/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  type: string,
  id?: string | null,
  content: string,
  owner?: string | null,
  timestamp: number,
  timelinePostId?: string | null,
};

export type ModelPostConditionInput = {
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  timelinePostId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Post = {
  __typename: "Post",
  type: string,
  id: string,
  content: string,
  owner?: string | null,
  timestamp: number,
  timelinePostId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateFollowRelationshipInput = {
  followeeId: string,
  followerId: string,
  timestamp: number,
  id?: string | null,
};

export type ModelFollowRelationshipConditionInput = {
  followeeId?: ModelStringInput | null,
  followerId?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelFollowRelationshipConditionInput | null > | null,
  or?: Array< ModelFollowRelationshipConditionInput | null > | null,
  not?: ModelFollowRelationshipConditionInput | null,
};

export type FollowRelationship = {
  __typename: "FollowRelationship",
  followeeId: string,
  followerId: string,
  timestamp: number,
  id: string,
};

export type DeleteFollowRelationshipInput = {
  id: string,
};

export type CreateTimelineInput = {
  userId: string,
  timestamp: number,
};

export type ModelTimelineConditionInput = {
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTimelineConditionInput | null > | null,
  or?: Array< ModelTimelineConditionInput | null > | null,
  not?: ModelTimelineConditionInput | null,
};

export type Timeline = {
  __typename: "Timeline",
  userId: string,
  timestamp: number,
  post?: ModelPostConnection | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  type?: ModelStringInput | null,
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  timelinePostId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFollowRelationshipFilterInput = {
  followeeId?: ModelStringInput | null,
  followerId?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelFollowRelationshipFilterInput | null > | null,
  or?: Array< ModelFollowRelationshipFilterInput | null > | null,
  not?: ModelFollowRelationshipFilterInput | null,
};

export type ModelFollowRelationshipConnection = {
  __typename: "ModelFollowRelationshipConnection",
  items:  Array<FollowRelationship | null >,
  nextToken?: string | null,
};

export type ModelTimelineFilterInput = {
  userId?: ModelIDInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTimelineFilterInput | null > | null,
  or?: Array< ModelTimelineFilterInput | null > | null,
  not?: ModelTimelineFilterInput | null,
};

export type ModelTimelineConnection = {
  __typename: "ModelTimelineConnection",
  items:  Array<Timeline | null >,
  nextToken?: string | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    type: string,
    id: string,
    content: string,
    owner?: string | null,
    timestamp: number,
    timelinePostId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    type: string,
    id: string,
    content: string,
    owner?: string | null,
    timestamp: number,
    timelinePostId?: string | null,
  } | null,
};

export type CreateFollowRelationshipMutationVariables = {
  input: CreateFollowRelationshipInput,
  condition?: ModelFollowRelationshipConditionInput | null,
};

export type CreateFollowRelationshipMutation = {
  createFollowRelationship?:  {
    __typename: "FollowRelationship",
    followeeId: string,
    followerId: string,
    timestamp: number,
    id: string,
  } | null,
};

export type DeleteFollowRelationshipMutationVariables = {
  input: DeleteFollowRelationshipInput,
  condition?: ModelFollowRelationshipConditionInput | null,
};

export type DeleteFollowRelationshipMutation = {
  deleteFollowRelationship?:  {
    __typename: "FollowRelationship",
    followeeId: string,
    followerId: string,
    timestamp: number,
    id: string,
  } | null,
};

export type CreateTimelineMutationVariables = {
  input: CreateTimelineInput,
  condition?: ModelTimelineConditionInput | null,
};

export type CreateTimelineMutation = {
  createTimeline?:  {
    __typename: "Timeline",
    userId: string,
    timestamp: number,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        type: string,
        id: string,
        content: string,
        owner?: string | null,
        timestamp: number,
        timelinePostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePostAndTimelineMutationVariables = {
  content: string,
};

export type CreatePostAndTimelineMutation = {
  createPostAndTimeline?:  {
    __typename: "Post",
    type: string,
    id: string,
    content: string,
    owner?: string | null,
    timestamp: number,
    timelinePostId?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    type: string,
    id: string,
    content: string,
    owner?: string | null,
    timestamp: number,
    timelinePostId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  id?: string | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      type: string,
      id: string,
      content: string,
      owner?: string | null,
      timestamp: number,
      timelinePostId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowRelationshipQueryVariables = {
  id: string,
};

export type GetFollowRelationshipQuery = {
  getFollowRelationship?:  {
    __typename: "FollowRelationship",
    followeeId: string,
    followerId: string,
    timestamp: number,
    id: string,
  } | null,
};

export type ListFollowRelationshipsQueryVariables = {
  filter?: ModelFollowRelationshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowRelationshipsQuery = {
  listFollowRelationships?:  {
    __typename: "ModelFollowRelationshipConnection",
    items:  Array< {
      __typename: "FollowRelationship",
      followeeId: string,
      followerId: string,
      timestamp: number,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTimelineQueryVariables = {
  userId: string,
};

export type GetTimelineQuery = {
  getTimeline?:  {
    __typename: "Timeline",
    userId: string,
    timestamp: number,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        type: string,
        id: string,
        content: string,
        owner?: string | null,
        timestamp: number,
        timelinePostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListTimelinesQueryVariables = {
  userId?: string | null,
  filter?: ModelTimelineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTimelinesQuery = {
  listTimelines?:  {
    __typename: "ModelTimelineConnection",
    items:  Array< {
      __typename: "Timeline",
      userId: string,
      timestamp: number,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    type: string,
    id: string,
    content: string,
    owner?: string | null,
    timestamp: number,
    timelinePostId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    type: string,
    id: string,
    content: string,
    owner?: string | null,
    timestamp: number,
    timelinePostId?: string | null,
  } | null,
};

export type OnCreateFollowRelationshipSubscriptionVariables = {
  followerId?: string | null,
};

export type OnCreateFollowRelationshipSubscription = {
  onCreateFollowRelationship?:  {
    __typename: "FollowRelationship",
    followeeId: string,
    followerId: string,
    timestamp: number,
    id: string,
  } | null,
};

export type OnDeleteFollowRelationshipSubscriptionVariables = {
  followerId?: string | null,
};

export type OnDeleteFollowRelationshipSubscription = {
  onDeleteFollowRelationship?:  {
    __typename: "FollowRelationship",
    followeeId: string,
    followerId: string,
    timestamp: number,
    id: string,
  } | null,
};

export type OnCreateTimelineSubscriptionVariables = {
  userId?: string | null,
};

export type OnCreateTimelineSubscription = {
  onCreateTimeline?:  {
    __typename: "Timeline",
    userId: string,
    timestamp: number,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        type: string,
        id: string,
        content: string,
        owner?: string | null,
        timestamp: number,
        timelinePostId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};
