import React, { useState, useEffect, useReducer } from "react";

import { API, graphqlOperation } from "aws-amplify";

import { listPosts, listPostsSortedByTimestamp } from "../graphql/queries";
import { onCreatePost } from "../graphql/subscriptions";

import PostList from "../components/PostList";
import Sidebar from "./Sidebar";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

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

const AllPosts: any = () => {
  // userが認証されているかどうかでAPI呼び出し
  const [authState, setAuthState] = useState<any>();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);
  if (authState === AuthState.SignedIn && user) {
    const data: any = API.graphql(graphqlOperation(listPosts));
    console.log(data);
  }

  const [posts, dispatch] = useReducer(reducer, []);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async (type: any, nextToken = null) => {
    const res: any = await API.graphql(graphqlOperation(listPosts));
    console.log(res);
    dispatch({ type: type, posts: res.data.listPostsSortedByTimestamp.items });
    setNextToken(res.data.listPostsSortedByTimestamp.nextToken);
    setIsLoading(false);
  };

  const getAdditionalPosts = () => {
    if (nextToken === null) return; //Reached the last page
    getPosts(ADDITIONAL_QUERY, nextToken);
  };

  useEffect(() => {
    getPosts(INITIAL_QUERY);

    const subscriptionGQL: any = API.graphql(graphqlOperation(onCreatePost));
    const subscription: any = subscriptionGQL.subscribe({
      next: (msg: any) => {
        console.log("allposts subscription fired");
        const post = msg.value.data.onCreatePost;
        dispatch({ type: SUBSCRIPTION, post: post });
      },
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <React.Fragment>
      <Sidebar activeListItem="global-timeline" />
      <PostList
        isLoading={isLoading}
        posts={posts}
        getAdditionalPosts={getAdditionalPosts}
        listHeaderTitle={"Global Timeline"}
      />
    </React.Fragment>
  );
};

export default AllPosts;
