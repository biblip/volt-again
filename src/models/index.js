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

const { Task, SuggestedAppLink, Category, AppLinkManifest, AppLink, Post, Comment, SingleComment } = initSchema(schema);

export {
  Task,
  SuggestedAppLink,
  Category,
  AppLinkManifest,
  AppLink,
  Post,
  Comment,
  SingleComment,
  PostStatus,
  CommentStatus
};