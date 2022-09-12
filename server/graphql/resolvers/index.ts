import { UserMutation, UserQueries, UserSubscription } from './user';
import {PostQueries, PostMutation, PostSubscription} from './post';
import {NoticeQueries, NoticeMutation} from './notice';
import {SendMutation} from './email';

const rootResolver = {
  Query: {
    ...UserQueries,
    ...PostQueries,
    ...NoticeQueries
  
  },
  Mutation: {
    ...UserMutation,
    ...PostMutation,
    ...NoticeMutation,
    ...SendMutation

  },
  Subscription: {
    ...UserSubscription,
    ... PostSubscription
   
  }
};
//
export default rootResolver;