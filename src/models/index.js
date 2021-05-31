// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, AppLink, Post, Comment } = initSchema(schema);

export {
  Task,
  AppLink,
  Post,
  Comment
};