"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSubscription = exports.PostMutation = exports.PostQueries = void 0;
const tslib_1 = require("tslib");
const apollo_server_1 = require("apollo-server");
// import mongoose from 'mongoose';
// import config from '../../../config';
const post_1 = tslib_1.__importDefault(require("../../models/post"));
const cloudinary = require("cloudinary");
const merge_1 = require("./merge");
// const { AuthenticationError} = require('apollo-server');
var shortId = require('shortid');
const uploadFile = (file) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // The Upload scalar return a a promise
    const { createReadStream } = yield file;
    console.log('createReadString:', createReadStream);
    const fileStream = createReadStream();
    cloudinary.config({
        cloud_name: 'depk7masa',
        api_key: '371641928741888',
        api_secret: 'Fwbz4p3FmzCmT73bBe9WS2YR2Zo'
    });
    return new Promise((resolve, reject) => {
        const cloudStream = cloudinary.v2.uploader.upload_stream(function (err, fileUploaded) {
            if (err) {
                reject(err);
            }
            resolve(fileUploaded);
        });
        fileStream.pipe(cloudStream);
    });
});
const pubsub = new apollo_server_1.PubSub();
const POST_ADDED = 'POST_ADDED';
const PostQueries = {
    posts: (parent, args, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const posts = yield post_1.default.find();
            return posts.map((p) => {
                return merge_1.transformPost(p);
            });
        }
        catch (err) {
            throw err;
        }
    }),
    post: (parent, { postId }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        console.log("pId", postId);
        try {
            const post = yield post_1.default.findById(postId);
            console.log("p",post)
            return merge_1.transformPost(post);
        }
        catch (err) {
            throw err;
        }
    }),
    somePosts: (parent, { after, first }, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        console.log('after', after);
        try {
            if (first < 0) {
                throw new Error('First must be positive');
            }
            const posts = yield post_1.default.find();
            console.log('p', posts);
            // const index = posts.map(m => m.id).indexOf(after) + 1;
            // console.log('pndex',index)
            const totalCount = posts.length;
            let postArray = [];
            let start = 0;
            console.log('after', after);
            if (after !== undefined) {
                const buff = new Buffer(after, 'base64');
                console.log('buff', buff);
                const id = buff.toString('ascii');
                console.log('id', id);
                const index = posts.findIndex((post) => post._id === id);
                if (index === -1) {
                    throw new Error('After does not exist');
                }
                start = index + 1;
            }
            console.log('start:', start);
            postArray = first === undefined ?
                posts :
                posts.slice(start, start + first);
            console.log('first', first);
            let endCursor;
            const edges = postArray.map((post) => {
                const buffer = new Buffer(post.id);
                endCursor = buffer.toString('base64');
                // endCursor = Buffer.from(post.id,"base64").toString('base64');
                // endCursor = post.id
                return ({
                    cursor: endCursor,
                    node: merge_1.transformPost(post),
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
        }
        catch (err) {
            throw err;
        }
    }),
};
exports.PostQueries = PostQueries;
const PostMutation = {
    createPost: (parent, { postInput: { file, username, description, postTitle } }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        //postInput
        console.log('data', file);
        const pictuer = yield uploadFile(file);
        console.log('picterUrl', pictuer);
        // await processUpload({ stream });
        try {
            const post = yield post_1.default.findOne({
                username: username
            });
            if (post) {
                throw new Error('Post already Exists');
            }
            else {
                // let buff = new Buffer(post.id);
                // let id = buff.toString('base64')
                const newPost = new post_1.default({
                    _id: shortId.generate(),
                    username: username,
                    description: description,
                    postTitle: postTitle,
                    file: pictuer.url
                });
                const savedPost = yield newPost.save();
                //   pubsub.publish(POST_ADDED, {
                //   postAdded: transformPost(savedPost)
                // });
                return savedPost;
            }
        }
        catch (error) {
            throw error;
        }
    }),
    deletePost: (_, { _id }, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletePost = yield post_1.default.findByIdAndRemove({ _id });
            return { _id: deletePost._id };
            // await Post.findByIdAndRemove(postId)
        }
        catch (err) {
            throw new Error(err);
        }
    }),
    updatePost: (parent, { postId, postUpdate: { username, description, postTitle, file } }, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        // If not authenticated throw error
        console.log("Up_postId", postId);
        // if (!context.isAuth) {
        //   console.log("cntext",context.isAuth);
        //   throw new Error('Non Authenticated');
        // }
        console.log('dataaaaa', file);
        const pictuer = yield uploadFile(file);
        console.log('username', username);
        const postObject = {
            username,
            description,
            postTitle,
            file: pictuer.url
        };
        // const willUpdatePost = new Post({
        //   // _id: shortId.generate(),
        //   username: username,
        //   description: description,
        //   postTitle:postTitle,
        //   file:pictuer.url
        // });
        console.log('value', postObject);
        try {
            const post = yield post_1.default.findByIdAndUpdate(postId, postObject, {
                new: true
            });
            return merge_1.transformPost(post);
        }
        catch (error) {
            throw error;
        }
    })
};
exports.PostMutation = PostMutation;
/**
 * Post Subscriptions
 */
const PostSubscription = {
    postAdded: {
        subscribe: () => pubsub.asyncIterator([POST_ADDED])
    }
};
exports.PostSubscription = PostSubscription;
//# sourceMappingURL=post.js.map