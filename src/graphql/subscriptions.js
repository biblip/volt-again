/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateSuggestedAppLink = /* GraphQL */ `
  subscription OnCreateSuggestedAppLink($owner: String) {
    onCreateSuggestedAppLink(owner: $owner) {
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
export const onUpdateSuggestedAppLink = /* GraphQL */ `
  subscription OnUpdateSuggestedAppLink($owner: String) {
    onUpdateSuggestedAppLink(owner: $owner) {
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
export const onDeleteSuggestedAppLink = /* GraphQL */ `
  subscription OnDeleteSuggestedAppLink($owner: String) {
    onDeleteSuggestedAppLink(owner: $owner) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateAppLinkManifest = /* GraphQL */ `
  subscription OnCreateAppLinkManifest {
    onCreateAppLinkManifest {
      id
      domain
      manifest
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAppLinkManifest = /* GraphQL */ `
  subscription OnUpdateAppLinkManifest {
    onUpdateAppLinkManifest {
      id
      domain
      manifest
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAppLinkManifest = /* GraphQL */ `
  subscription OnDeleteAppLinkManifest {
    onDeleteAppLinkManifest {
      id
      domain
      manifest
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAppLink = /* GraphQL */ `
  subscription OnCreateAppLink {
    onCreateAppLink {
      id
      domain
      path
      resource
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
export const onUpdateAppLink = /* GraphQL */ `
  subscription OnUpdateAppLink {
    onUpdateAppLink {
      id
      domain
      path
      resource
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
export const onDeleteAppLink = /* GraphQL */ `
  subscription OnDeleteAppLink {
    onDeleteAppLink {
      id
      domain
      path
      resource
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateSingleComment = /* GraphQL */ `
  subscription OnCreateSingleComment {
    onCreateSingleComment {
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
export const onUpdateSingleComment = /* GraphQL */ `
  subscription OnUpdateSingleComment {
    onUpdateSingleComment {
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
export const onDeleteSingleComment = /* GraphQL */ `
  subscription OnDeleteSingleComment {
    onDeleteSingleComment {
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
