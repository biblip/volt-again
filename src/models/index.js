// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, SuggestedAppLink, Protocol, AppLink, Post, Comment } = initSchema(schema);

export {
  Task,
  SuggestedAppLink,
  Protocol,
  AppLink,
  Post,
  Comment
};