/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSuggestedAppLink = /* GraphQL */ `
  mutation CreateSuggestedAppLink(
    $input: CreateSuggestedAppLinkInput!
    $condition: ModelSuggestedAppLinkConditionInput
  ) {
    createSuggestedAppLink(input: $input, condition: $condition) {
      id
      protocol
      domain
      resource
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSuggestedAppLink = /* GraphQL */ `
  mutation UpdateSuggestedAppLink(
    $input: UpdateSuggestedAppLinkInput!
    $condition: ModelSuggestedAppLinkConditionInput
  ) {
    updateSuggestedAppLink(input: $input, condition: $condition) {
      id
      protocol
      domain
      resource
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSuggestedAppLink = /* GraphQL */ `
  mutation DeleteSuggestedAppLink(
    $input: DeleteSuggestedAppLinkInput!
    $condition: ModelSuggestedAppLinkConditionInput
  ) {
    deleteSuggestedAppLink(input: $input, condition: $condition) {
      id
      protocol
      domain
      resource
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProtocol = /* GraphQL */ `
  mutation CreateProtocol(
    $input: CreateProtocolInput!
    $condition: ModelProtocolConditionInput
  ) {
    createProtocol(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateProtocol = /* GraphQL */ `
  mutation UpdateProtocol(
    $input: UpdateProtocolInput!
    $condition: ModelProtocolConditionInput
  ) {
    updateProtocol(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteProtocol = /* GraphQL */ `
  mutation DeleteProtocol(
    $input: DeleteProtocolInput!
    $condition: ModelProtocolConditionInput
  ) {
    deleteProtocol(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAppLink = /* GraphQL */ `
  mutation CreateAppLink(
    $input: CreateAppLinkInput!
    $condition: ModelAppLinkConditionInput
  ) {
    createAppLink(input: $input, condition: $condition) {
      id
      protocol
      domain
      resource
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAppLink = /* GraphQL */ `
  mutation UpdateAppLink(
    $input: UpdateAppLinkInput!
    $condition: ModelAppLinkConditionInput
  ) {
    updateAppLink(input: $input, condition: $condition) {
      id
      protocol
      domain
      resource
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAppLink = /* GraphQL */ `
  mutation DeleteAppLink(
    $input: DeleteAppLinkInput!
    $condition: ModelAppLinkConditionInput
  ) {
    deleteAppLink(input: $input, condition: $condition) {
      id
      protocol
      domain
      resource
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      status
      applinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      comments {
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      status
      applinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      comments {
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      status
      applinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      comments {
        nextToken
        startedAt
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      status
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      status
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      status
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
