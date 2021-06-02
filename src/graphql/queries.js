/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSuggestedAppLink = /* GraphQL */ `
  query GetSuggestedAppLink($id: ID!) {
    getSuggestedAppLink(id: $id) {
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
export const listSuggestedAppLinks = /* GraphQL */ `
  query ListSuggestedAppLinks(
    $filter: ModelSuggestedAppLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestedAppLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSuggestedAppLinks = /* GraphQL */ `
  query SyncSuggestedAppLinks(
    $filter: ModelSuggestedAppLinkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSuggestedAppLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProtocol = /* GraphQL */ `
  query GetProtocol($id: ID!) {
    getProtocol(id: $id) {
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
export const listProtocols = /* GraphQL */ `
  query ListProtocols(
    $filter: ModelProtocolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProtocols(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProtocols = /* GraphQL */ `
  query SyncProtocols(
    $filter: ModelProtocolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProtocols(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAppLink = /* GraphQL */ `
  query GetAppLink($id: ID!) {
    getAppLink(id: $id) {
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
export const listAppLinks = /* GraphQL */ `
  query ListAppLinks(
    $filter: ModelAppLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        protocol
        domain
        resource
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const searchAppLinks = /* GraphQL */ `
  query SearchAppLinks(
    $filter: SearchableAppLinkFilterInput
    $sort: SearchableAppLinkSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchAppLinks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        protocol
        domain
        resource
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const syncAppLinks = /* GraphQL */ `
  query SyncAppLinks(
    $filter: ModelAppLinkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        protocol
        domain
        resource
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
