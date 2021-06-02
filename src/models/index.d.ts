import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Task {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly status?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class SuggestedAppLink {
  readonly id: string;
  readonly protocol: string;
  readonly domain: string;
  readonly resource?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SuggestedAppLink>);
  static copyOf(source: SuggestedAppLink, mutator: (draft: MutableModel<SuggestedAppLink>) => MutableModel<SuggestedAppLink> | void): SuggestedAppLink;
}

export declare class Protocol {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Protocol>);
  static copyOf(source: Protocol, mutator: (draft: MutableModel<Protocol>) => MutableModel<Protocol> | void): Protocol;
}

export declare class AppLink {
  readonly id: string;
  readonly protocol: string;
  readonly domain: string;
  readonly resource?: string;
  readonly posts?: (Post | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AppLink>);
  static copyOf(source: AppLink, mutator: (draft: MutableModel<AppLink>) => MutableModel<AppLink> | void): AppLink;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly status?: string;
  readonly comments?: (Comment | null)[];
  readonly applinkID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly content: string;
  readonly status?: string;
  readonly postID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}