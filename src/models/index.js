// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "VISIBLE": "VISIBLE",
  "HIDDEN": "HIDDEN",
  "DELETED": "DELETED",
  "SANCTIONED": "SANCTIONED"
};

const CommentStatus = {
  "VISIBLE": "VISIBLE",
  "HIDDEN": "HIDDEN",
  "DELETED": "DELETED",
  "SANCTIONED": "SANCTIONED"
};

const { Task, SuggestedAppLink, Category, AppLink, SingleComment, Post, PostComment, AppLinkManifest } = initSchema(schema);

export {
  Task,
  SuggestedAppLink,
  Category,
  AppLink,
  SingleComment,
  Post,
  PostComment,
  AppLinkManifest,
  PostStatus,
  CommentStatus
};