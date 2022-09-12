import gql from 'graphql-tag';


const CREATE_NOTICE = gql`
  mutation createNotice($body: String!) {
    createNotice(body:$body) {
       _id
      body
      createdAt
    }
  }
`;

export default CREATE_NOTICE