/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      type
      id
      content
      owner
      timestamp
      timelinePostId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        type
        id
        content
        owner
        timestamp
        timelinePostId
      }
      nextToken
    }
  }
`;
export const getFollowRelationship = /* GraphQL */ `
  query GetFollowRelationship($id: ID!) {
    getFollowRelationship(id: $id) {
      followeeId
      followerId
      timestamp
      id
    }
  }
`;
export const listFollowRelationships = /* GraphQL */ `
  query ListFollowRelationships(
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowRelationships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        followeeId
        followerId
        timestamp
        id
      }
      nextToken
    }
  }
`;
export const getTimeline = /* GraphQL */ `
  query GetTimeline($userId: ID!) {
    getTimeline(userId: $userId) {
      userId
      timestamp
      post {
        items {
          type
          id
          content
          owner
          timestamp
          timelinePostId
        }
        nextToken
      }
    }
  }
`;
export const listTimelines = /* GraphQL */ `
  query ListTimelines(
    $userId: ID
    $filter: ModelTimelineFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTimelines(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        timestamp
        post {
          nextToken
        }
      }
      nextToken
    }
  }
`;
