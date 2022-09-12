import dateToString from '../../helpers/date';
import User from '../../models/user';
import Post from '../../models/post';
import Notice from '../../models/notice'
/**
 *
 * @param id
 */
const getUser = async (id: string) => {
  try {
    const user: any = await User.findById(id);
 
    return {
      ...user._doc,
      _id: user.id
    };
  } catch (err) {
    throw err;
  }
};

/**
 * Get user object with schema typing
 * @param user
 */
const transformUser = (user: any) => {
  return {
    ...user._doc,
    _id: user.id
  };
};



const getNotice = async (id: string) => {
  try {
    const notice: any = await Notice.findById(id);
 
    return {
      ...notice._doc,
      _id: notice.id,
      createdAt: dateToString(notice._doc.createdAt),
    };
  } catch (err) {
    throw err;
  }
};
const transformNotice = (notice: any) => {
  return {
    ...notice._doc,
    _id: notice.id,
    createdAt: dateToString(notice._doc.createdAt),
  };
};


const getPost = async (id: string) => {
  try {
    const post: any = await Post.findById(id);
 
    return {
      ...post._doc,
      _id: post.id,
      createdAt: dateToString(post._doc.createdAt),
      updatedAt: dateToString(post._doc.updatedAt)
    };
  } catch (err) {
    throw err;
  }
};
const transformPost = (post: any) => {
  return {
    ...post._doc,
    _id: post.id,
    createdAt: dateToString(post._doc.createdAt),
    updatedAt: dateToString(post._doc.updatedAt)
  };
};
export { getUser, transformUser,getPost,transformPost,getNotice,transformNotice };