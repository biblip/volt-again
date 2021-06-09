import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostStatus {
  VISIBLE = "VISIBLE",
  HIDDEN = "HIDDEN",
  DELETED = "DELETED",
  SANCTIONED = "SANCTIONED"
}

export enum CommentStatus {
  VISIBLE = "VISIBLE",
  HIDDEN = "HIDDEN",
  DELETED = "DELETED",
  SANCTIONED = "SANCTIONED"
}



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
  readonly category: string;
  readonly link: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SuggestedAppLink>);
  static copyOf(source: SuggestedAppLink, mutator: (draft: MutableModel<SuggestedAppLink>) => MutableModel<SuggestedAppLink> | void): SuggestedAppLink;
}

export declare class Category {
  readonly id: string;
  readonly shortName: string;
  readonly name: string;
  readonly manifest: string;
  readonly applink?: (AppLink | null)[];
  readonly applinkmanifests?: (AppLinkManifest | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class AppLink {
  readonly id: string;
  readonly domain: string;
  readonly path?: string;
  readonly resource?: string;
  readonly categoryID?: string;
  readonly singlecomments?: (SingleComment | null)[];
  readonly posts?: (Post | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AppLink>);
  static copyOf(source: AppLink, mutator: (draft: MutableModel<AppLink>) => MutableModel<AppLink> | void): AppLink;
}

export declare class SingleComment {
  readonly id: string;
  readonly content: string;
  readonly status?: CommentStatus | keyof typeof CommentStatus;
  readonly applinkID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SingleComment>);
  static copyOf(source: SingleComment, mutator: (draft: MutableModel<SingleComment>) => MutableModel<SingleComment> | void): SingleComment;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly status?: PostStatus | keyof typeof PostStatus;
  readonly applinkID?: string;
  readonly postcomments?: (PostComment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class PostComment {
  readonly id: string;
  readonly content: string;
  readonly status?: string;
  readonly postID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PostComment>);
  static copyOf(source: PostComment, mutator: (draft: MutableModel<PostComment>) => MutableModel<PostComment> | void): PostComment;
}

export declare class AppLinkManifest {
  readonly id: string;
  readonly domain: string;
  readonly manifest: string;
  readonly categoryID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AppLinkManifest>);
  static copyOf(source: AppLinkManifest, mutator: (draft: MutableModel<AppLinkManifest>) => MutableModel<AppLinkManifest> | void): AppLinkManifest;
}