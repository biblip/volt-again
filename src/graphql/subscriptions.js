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
export const onUpdateSuggestedAppLink = /* GraphQL */ `
  subscription OnUpdateSuggestedAppLink($owner: String) {
    onUpdateSuggestedAppLink(owner: $owner) {
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
export const onDeleteSuggestedAppLink = /* GraphQL */ `
  subscription OnDeleteSuggestedAppLink($owner: String) {
    onDeleteSuggestedAppLink(owner: $owner) {
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
export const onCreateProtocol = /* GraphQL */ `
  subscription OnCreateProtocol {
    onCreateProtocol {
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
export const onUpdateProtocol = /* GraphQL */ `
  subscription OnUpdateProtocol {
    onUpdateProtocol {
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
export const onDeleteProtocol = /* GraphQL */ `
  subscription OnDeleteProtocol {
    onDeleteProtocol {
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
export const onCreateAppLink = /* GraphQL */ `
  subscription OnCreateAppLink {
    onCreateAppLink {
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
export const onUpdateAppLink = /* GraphQL */ `
  subscription OnUpdateAppLink {
    onUpdateAppLink {
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
export const onDeleteAppLink = /* GraphQL */ `
  subscription OnDeleteAppLink {
    onDeleteAppLink {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
