import gql from 'graphql-tag';

const GET_POSTS = gql`
  {
    posts {
      _id
      username
      description
      file
      postTitle
    }
  }
`;

export default GET_POSTS;
