import gql from 'graphql-tag';
const GET_SOMEPOSTS = gql`

  query somePosts($after: String) {
    somePosts(first: 2, after: $after) {
      edges{
      node{
        _id
        file
        username
        createdAt
        description
        updatedAt
        postTitle
      }
      cursor
    }
    pageInfo{
      endCursor
      hasNextPage
    }
    totalCount
  }
  }
`;

export default GET_SOMEPOSTS;