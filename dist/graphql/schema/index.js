"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const index_1 = tslib_1.__importDefault(require("../resolvers/index"));
exports.createApolloServer = () => {
    const typeDefs = apollo_server_express_1.gql `

  type Query {
    users: [User!]! 
    user(userId: ID!): User!
    posts:[Post!]!
    somePosts(after: String,first: Int):PostConnection
    post(postId:ID!):Post!
    notices:[Notice!]!
    notice(_id:ID!):Notice!
    allMessage: Message
  }
  type Mutation {
    login(email: String!, password: String!): AuthData!
    createUser(userInput: UserInput): AuthData!
    updateUser(userId: ID!, updateUser: UpdateUser): User!
    createPost(postInput: PostInput): Post!
    deletePost(_id: ID!):Post
    updatePost(postId:ID!,postUpdate:PostUpdate):Post!
    createNotice(body:String!):Notice!
    updateNotice(_id:ID!,noticeInput:UpdateNotice!):Notice!
    deleteNotice(_id:ID!):Notice
    createMessage(email: String!, message: String!,name:String!,number:String!): Message
  }
  type Subscription {
    userAdded: User
    postAdded: Post
    }

  type User {
    _id: ID!
    email: String!
    username: String
    password: String
    # createdAt: String
    # updatedAt: String
  }
 type Notice{
   _id:ID!
   body:String!
   createdAt: String
 }
  
  type Post{
  _id:ID!
  username:String!
  description:String!
  createdAt: String
  updatedAt: String
  file:String
  postTitle:String!
}

type PostConnection{
  totalCount:Int
  pageInfo:PageInfo!
  edges:[PostEdge]!
}

type PostEdge{
  cursor:String!
  node:Post!
}
type PageInfo{
  endCursor:String
  hasNextPage:Boolean!
}

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  # type File {
  #   filename:String!
  #   mimetype:String!
  #   encoding:String!
  # }
  
 type Message {
   email:String!,
   message:String!,
   number:String!,
   name:String!

 }




  input UserInput {
    email: String!
    username: String!
    password: String!
  }

  input UpdateUser {
    email: String
    username: String
    password: String
  }

  input PostInput{
  username:String!
  description:String!
  file:Upload
  postTitle:String!
 }

 input PostUpdate {
    description: String
    username: String
    file:Upload
    postTitle:String
  
  }
  input UpdateNotice {
   body:String
   updatedAt: String
  }

`;
    const apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs,
        resolvers: index_1.default,
        context: ({ req, connection, payload }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            if (connection) {
                return { isAuth: payload.authToken };
            }
            return { isAuth: req.isAuth };
        }),
        introspection: true,
        playground: true,
    });
    return apolloServer;
};
//# sourceMappingURL=index.js.map