import { PubSub } from 'apollo-server';
// import mongoose from 'mongoose';
// import config from '../../../config';
import Post from '../../models/post';
const cloudinary = require("cloudinary");
import { transformPost } from './merge';
// const { AuthenticationError} = require('apollo-server');
var shortId = require('shortid');

const uploadFile = async (file:any):Promise<any> => {
  // The Upload scalar return a a promise

  const { createReadStream } = await file;
  console.log('createReadString:',createReadStream)
  const fileStream = createReadStream();
cloudinary.config(
  {
      cloud_name: 'depk7masa',
      api_key: '371641928741888',
      api_secret: 'Fwbz4p3FmzCmT73bBe9WS2YR2Zo'
  }
);
return new Promise((resolve, reject):any => {
  const cloudStream = cloudinary.v2.uploader.upload_stream(function (
    err,
    fileUploaded
  ) {

    if (err) {
      reject(err);
    }


    resolve(fileUploaded);
  });

  fileStream.pipe(cloudStream);
});
};


const pubsub = new PubSub();

const POST_ADDED = 'POST_ADDED';



const PostQueries = {
  posts: async (parent,args,context) => {
    try {
      const posts = await Post.find()
      return posts.map((p) => {
        return transformPost(p);
      });
    } catch (err) {
      throw err;
    }
  },
  post: async (parent, { postId }) => {
    console.log("pId",postId)

    try {
      const post = await Post.findById(postId);
      return transformPost(post);
    } catch (err) {
      throw err;
    }
  },
  somePosts:async (parent:any,{after,first}:{after: string, first: number }, context) => {
    console.log('after',after)
    try {
      if (first < 0) {
        throw new Error('First must be positive');
      }

      const posts = await Post.find()
      console.log('p',posts)
     
      // const index = posts.map(m => m.id).indexOf(after) + 1;
      // console.log('pndex',index)
      const totalCount = posts.length

      let postArray = []
      let start = 0;
       console.log('after',after)
      if (after !== undefined) {
        const buff = new Buffer(after, 'base64');
         console.log('buff',buff)
        const id = buff.toString('ascii');
      console.log('id',id)
        const index = posts.findIndex((post) => post._id === id);
        
        if (index === -1) {
          throw new Error('After does not exist');
        }
        start = index + 1;
      }
      console.log('start:',start)
     
      postArray = first === undefined ?
      posts :
      posts.slice(start, start + first);
      console.log('first',first)
    let endCursor: string;

    const edges = postArray.map((post) => {
      const buffer = new Buffer(post.id);
      endCursor = buffer.toString('base64');
      // endCursor = Buffer.from(post.id,"base64").toString('base64');
      // endCursor = post.id
      return ({
        cursor: endCursor,
        node: transformPost(post),
      });
    });

    const hasNextPage = start + first < totalCount;
    const pageInfo = endCursor !== undefined ?
      {
        endCursor,
        hasNextPage,
      } :
      {
        hasNextPage,
      };
    const result = {
      edges,
      pageInfo,
      totalCount,
    };
    return result;
  
    } catch (err) {
      throw err;
    }
  },
}
const PostMutation = {
  createPost: async (parent: any, { postInput: {file,username,description,postTitle}}:any) => {
   //postInput
  
    console.log('data',file)

  const pictuer = await uploadFile(file);


 console.log('picterUrl',pictuer)
    // await processUpload({ stream });
  
    try {
      const post = await Post.findOne({
        username: username
      });
      if (post) {
        throw new Error('Post already Exists');
      } else {
        // let buff = new Buffer(post.id);
        // let id = buff.toString('base64')
        const newPost = new Post({
          _id: shortId.generate(),
          username: username,
          description: description,
          postTitle:postTitle,
          file:pictuer.url
        });
        const savedPost = await newPost.save();
        //   pubsub.publish(POST_ADDED, {
        //   postAdded: transformPost(savedPost)
        // });
        return savedPost
      }
    } catch (error) {
      throw error;
    }
  },
 deletePost: async (_, { _id }, context) => {
    try {
      const deletePost = await Post.findByIdAndRemove({_id})
      return { _id: deletePost._id};
      // await Post.findByIdAndRemove(postId)
    } catch (err) {
      throw new Error(err);
    }
  },
  updatePost: async (parent:any, { postId,postUpdate:{username,description,postTitle,file}}:any, context) => {
    // If not authenticated throw error
   
    console.log("Up_postId",postId)

    // if (!context.isAuth) {
    
    //   console.log("cntext",context.isAuth);
    //   throw new Error('Non Authenticated');
    // }
    console.log('dataaaaa',file)
    const pictuer = await uploadFile(file);
 console.log('username',username)
 
 const postObject = {
   username,
   description,
   postTitle,
   file:pictuer.url
 };
 
    // const willUpdatePost = new Post({
    //   // _id: shortId.generate(),
    //   username: username,
    //   description: description,
    //   postTitle:postTitle,
    //   file:pictuer.url
    // });
    
    console.log('value',postObject)
      
    try {
      const post = await Post.findByIdAndUpdate(postId,postObject, {
        new: true
      });
      return transformPost(post);
    } catch (error) {
      throw error;
    }
  }
};

/**
 * Post Subscriptions
 */
const PostSubscription = {
  postAdded: {
    subscribe: () => pubsub.asyncIterator([POST_ADDED])
  }
};

export { PostQueries, PostMutation, PostSubscription };