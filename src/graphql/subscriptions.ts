/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      type
      id
      content
      owner
      timestamp
      timelinePostId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      type
      id
      content
      owner
      timestamp
      timelinePostId
    }
  }
`;
export const onCreateFollowRelationship = /* GraphQL */ `
  subscription OnCreateFollowRelationship($followerId: String) {
    onCreateFollowRelationship(followerId: $followerId) {
      followeeId
      followerId
      timestamp
      id
    }
  }
`;
export const onDeleteFollowRelationship = /* GraphQL */ `
  subscription OnDeleteFollowRelationship($followerId: String) {
    onDeleteFollowRelationship(followerId: $followerId) {
      followeeId
      followerId
      timestamp
      id
    }
  }
`;
export const onCreateTimeline = /* GraphQL */ `
  subscription OnCreateTimeline($userId: String) {
    onCreateTimeline(userId: $userId) {
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
