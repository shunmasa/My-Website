import gql from 'graphql-tag';


const CREATE_POST = gql`
  mutation createPost($postInput: PostInput) {
    createPost(postInput: $postInput) {
       _id
       username
       description
       file
    }
  }
`;

export default CREATE_POST