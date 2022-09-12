import mongoose from 'mongoose';
var shortId = require('shortid');

const postSchema = new mongoose.Schema(
  {
    _id: {type: String, unique: true, default: shortId.generate},
    username: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  file:{
    type: String
    },
    postTitle:{
      type:String
    }
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
postSchema.statics = {
  /**
   * Get User
   * @param {ObjectId} id - The objectId of user.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((post: any) => {
        if (post) {
          return post;
        }
      });
  }
};

export default mongoose.model('Post', postSchema);