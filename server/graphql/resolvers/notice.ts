  
const { UserInputError } = require('apollo-server');
import mongoose from 'mongoose';
// import config from '../../../config';
import Notice from '../../models/notice';

import { transformNotice } from './merge';
// const { AuthenticationError} = require('apollo-server');


const NoticeQueries = {
  notices: async (parent, args, context) => {
    try {
      const notices = await Notice.find();
      console.log('userdata',notices)
   
    //  const {notices} = user
      return notices.map((n) => {
        return transformNotice(n);
      });
    } catch (err) {
      throw err;
    }
  },
  notice: async (parent, { _id }) => {

    try {
      const notice = await Notice.findById(_id);
      return transformNotice(notice);
    } catch (err) {
      throw err;
    }
  }
};

const NoticeMutation = {
  createNotice: async (parent: any, { body }:any) => {
    if (body.trim() === '') {
      throw new UserInputError('Empty notice', {
        errors: {
          body: 'body must not be empty'
        }
      });
    }
 
    try {
        const newNotice = new Notice({
          _id: new mongoose.Types.ObjectId(),
          body
        });
        // const {notices}:any = user;

        // const newNotice = notices.unshift({
        //   _id: new mongoose.Types.ObjectId(),
        //   body
        // })
        const savedNotice = await newNotice.save();
      
        return savedNotice
    } catch (error) {
      throw error;
    }
  },
 deleteNotice: async (parent, {_id }, context) => {
    try {
      console.log('id',_id)
  const deleteNotice = await Notice.findByIdAndRemove({_id})
  return { _id: deleteNotice._id};
    // return { _id: deletedNotice.id};
    } catch (err) {
      throw new Error(err);
    }
  },
  updateNotice: async (parent, { _id, noticeInput}, context) => {
    // If not authenticated throw error
    if (!context.isAuth) {
      console.log("cntext",context.isAuth);
      throw new Error('Non Authenticated');
    }
    try {
      const notice = await Notice.findByIdAndUpdate(_id, noticeInput, {
        new: true
      });
      return transformNotice(notice);
    } catch (error) {
      throw error;
    }
  }
};



export { NoticeQueries, NoticeMutation};