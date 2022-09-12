import gql from 'graphql-tag';


const CREATE_MESSAGE = gql`
  mutation createMessage($email: String!,$number: String!,
    $message: String!,$name: String!) {
    createMessage(name:$name,message:$message,email:$email,number:$number) {
      name  
      message
      email
      number
    }
  }
`;

export default CREATE_MESSAGE