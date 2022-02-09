/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  type: string,
  id?: string | null,
  content: string,
  owner?: string | null,
  timestamp: number,
};

export type ModelPostConditionInput = {
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
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

export type Post = {
  __typename: "Post",
  type: string,
  id: string,
  content: string,
  owner?: string | null,
  timestamp: number,
};

export type DeletePostInput = {
  id: string,
};

export type CreateFollowRelationshipInput = {
  followeeId: string,
  followerId: string,
  timestamp: number,
};

export type ModelFollowRelationshipConditionInput = {
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
};

export type DeleteFollowRelationshipInput = {
  followeeId: string,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowRelationshipQueryVariables = {
  followeeId: string,
};

export type GetFollowRelationshipQuery = {
  getFollowRelationship?:  {
    __typename: "FollowRelationship",
    followeeId: string,
    followerId: string,
    timestamp: number,
  } | null,
};

export type ListFollowRelationshipsQueryVariables = {
  followeeId?: string | null,
  filter?: ModelFollowRelationshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFollowRelationshipsQuery = {
  listFollowRelationships?:  {
    __typename: "ModelFollowRelationshipConnection",
    items:  Array< {
      __typename: "FollowRelationship",
      followeeId: string,
      followerId: string,
      timestamp: number,
    } | null >,
    nextToken?: string | null,
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
  } | null,
};
