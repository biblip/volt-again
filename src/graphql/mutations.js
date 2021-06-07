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
      category
      link
      description
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
      category
      link
      description
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
      category
      link
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      shortName
      name
      manifest
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      shortName
      name
      manifest
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      shortName
      name
      manifest
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
      domain
      path
      resource
      manifest
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      domain
      path
      resource
      manifest
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      domain
      path
      resource
      manifest
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      appLinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      appLinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      appLinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
export const createSingleComment = /* GraphQL */ `
  mutation CreateSingleComment(
    $input: CreateSingleCommentInput!
    $condition: ModelSingleCommentConditionInput
  ) {
    createSingleComment(input: $input, condition: $condition) {
      id
      content
      status
      appLinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSingleComment = /* GraphQL */ `
  mutation UpdateSingleComment(
    $input: UpdateSingleCommentInput!
    $condition: ModelSingleCommentConditionInput
  ) {
    updateSingleComment(input: $input, condition: $condition) {
      id
      content
      status
      appLinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSingleComment = /* GraphQL */ `
  mutation DeleteSingleComment(
    $input: DeleteSingleCommentInput!
    $condition: ModelSingleCommentConditionInput
  ) {
    deleteSingleComment(input: $input, condition: $condition) {
      id
      content
      status
      appLinkID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
