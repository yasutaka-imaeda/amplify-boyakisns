import React, { useState, useEffect, useReducer } from "react";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router";

import { listPosts, getFollowRelationship } from "../graphql/queries";
import {
  createFollowRelationship,
  deleteFollowRelationship,
} from "../graphql/mutations";
import { onCreatePost } from "../graphql/subscriptions";

import PostList from "../components/PostList";
import Sidebar from "./Sidebar";

import { Button } from "@material-ui/core";

import Amplify from "aws-amplify";
import config from "../aws-exports";

Amplify.configure(config);

const SUBSCRIPTION = "SUBSCRIPTION";
const INITIAL_QUERY = "INITIAL_QUERY";
const ADDITIONAL_QUERY = "ADDITIONAL_QUERY";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case INITIAL_QUERY:
      return action.posts;
    case ADDITIONAL_QUERY:
      return [...state, ...action.posts];
    case SUBSCRIPTION:
      return [action.post, ...state];
    default:
      return state;
  }
};

const PostsBySpecifiedUser: any = () => {
  const { userId }: any = useParams();

  const [posts, dispatch] = useReducer(reducer, []);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const getPosts = async (type: any, nextToken = null) => {
    const res: any = await API.graphql(graphqlOperation(listPosts));
    console.log(res);
    dispatch({ type: type, posts: res.data.listPosts.items });
    setNextToken(res.data.listPosts.nextToken);
    setIsLoading(false);
  };

  const getIsFollowing = async ({ followerId, followeeId }: any) => {
    const res: any = await API.graphql(
      graphqlOperation(getFollowRelationship, {
        followeeId: followeeId,
      })
    );
    console.log(res);
    // TODO：followerIdのフィルター処理を記述
    return res.data.getFollowRelationship !== null;
  };

  const getAdditionalPosts = () => {
    if (nextToken === null) return; //Reached the last page
    getPosts(ADDITIONAL_QUERY, nextToken);
  };

  const follow = async () => {
    console.log("follow");
    const input = {
      followeeId: userId,
      followerId: currentUser.username,
      timestamp: Math.floor(Date.now() / 1000),
    };
    const res: any = await API.graphql(
      graphqlOperation(createFollowRelationship, { input: input })
    );
    if (!res.data.createFollowRelationship.erros) setIsFollowing(true);
    console.log(res);
  };

  const unfollow = async () => {
    console.log("unfollow");
    const input = {
      followeeId: userId,
      followerId: currentUser.username,
    };
    const res: any = await API.graphql(
      graphqlOperation(deleteFollowRelationship, { input: input })
    );
    if (!res.data.deleteFollowRelationship.erros) setIsFollowing(false);
    console.log(res);
  };

  useEffect(() => {
    const init = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setCurrentUser(currentUser);

      setIsFollowing(
        await getIsFollowing({
          followeeId: userId,
          followerId: currentUser.username,
        })
      );

      getPosts(INITIAL_QUERY);
    };
    init();

    const subscriptionGQL: any = API.graphql(graphqlOperation(onCreatePost));
    const subscription: any = subscriptionGQL.subscribe({
      next: (msg: any) => {
        const post = msg.value.data.onCreatePost;
        if (post.owner !== userId) return;
        dispatch({ type: SUBSCRIPTION, post: post });
      },
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <React.Fragment>
      <Sidebar activeListItem="profile" />
      <PostList
        isLoading={isLoading}
        posts={posts}
        getAdditionalPosts={getAdditionalPosts}
        listHeaderTitle={userId}
        listHeaderTitleButton={
          currentUser &&
          userId !== currentUser.username &&
          (isFollowing ? (
            <Button variant="contained" color="primary" onClick={unfollow}>
              Following
            </Button>
          ) : (
            <Button variant="outlined" color="primary" onClick={follow}>
              Follow
            </Button>
          ))
        }
      />
    </React.Fragment>
  );
};

export default PostsBySpecifiedUser;
