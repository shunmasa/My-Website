import gql from 'graphql-tag';

const GET_NOTICE = gql`
  query getNotice(noticeId:ID){
    body
    createdAt
    _id
  }
`;

export default GET_NOTICE;
