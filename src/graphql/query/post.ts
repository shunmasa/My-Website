import gql from 'graphql-tag';

const GET_POST = gql`
query post($postId:ID!){
  post(postId:$postId){
       _id
      username
      description
      file
      postTitle
  }
  
  }
`;

export default GET_POST;
