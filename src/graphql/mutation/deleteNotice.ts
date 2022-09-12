import gql from 'graphql-tag';

const DELETE_NOTICE = gql`
  mutation deleteNotice($_id: ID!) {
    deleteNotice(_id:$_id){
      _id
    }
  }
`;

export default DELETE_NOTICE;