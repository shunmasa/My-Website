import gql from 'graphql-tag'


const UPDATE_NOTICE = gql`
  mutation updateNotice($postId:ID,$updateNotice:UpdateNotice){
         updateNotice(noticeID:$noticeId,updateNotice:$updateNotice){
           _id
           body
           createdAt
         }
  }

`


export default UPDATE_NOTICE