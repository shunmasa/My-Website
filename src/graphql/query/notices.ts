import gql from 'graphql-tag';

const GET_NOTICES = gql`
{
  notices{
    _id
    body
    createdAt
  }
}
`;

export default GET_NOTICES;
