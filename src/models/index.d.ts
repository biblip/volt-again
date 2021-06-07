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
  readonly manifest: string;
  readonly categoryID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AppLink>);
  static copyOf(source: AppLink, mutator: (draft: MutableModel<AppLink>) => MutableModel<AppLink> | void): AppLink;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly status?: PostStatus | keyof typeof PostStatus;
  readonly appLinkID?: string;
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

export declare class SingleComment {
  readonly id: string;
  readonly content: string;
  readonly status?: CommentStatus | keyof typeof CommentStatus;
  readonly appLinkID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SingleComment>);
  static copyOf(source: SingleComment, mutator: (draft: MutableModel<SingleComment>) => MutableModel<SingleComment> | void): SingleComment;
}