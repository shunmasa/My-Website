import gql from 'graphql-tag';

const DELETE_POST = gql`
  mutation deletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
    }
  }
`;

export default DELETE_POST;