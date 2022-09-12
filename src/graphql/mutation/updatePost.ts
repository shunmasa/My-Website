import gql from 'graphql-tag'


const UPDATE_POST = gql`
  mutation updatePost($postId:ID!,$postUpdate: PostUpdate){
         updatePost(postId:$postId,postUpdate: $postUpdate){
           _id
           description
           username
           file
         }
  }

`


export default UPDATE_POST