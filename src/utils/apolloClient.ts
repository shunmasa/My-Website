import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { createPersistedQueryLink } from "apollo-link-persisted-queries";
// import { createHttpLink} from 'apollo-link-http';
import Cookies from 'js-cookie';
import { split, ApolloLink, concat } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
const { createUploadLink } = require('apollo-upload-client');
// import { createHttpLink } from "apollo-link-http";



interface Definintion {
  kind: string;
  operation?: string;
}

let authToken = null;

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: authToken || ''
    }
  });
  // Add onto payload for WebSocket authentication
  (operation as any & { authToken: string | undefined }).authToken = authToken;

  return forward(operation);
});

const webSocketLink: any = process.browser
  ? new WebSocketLink({
      uri:'wss://excelnz.herokuapp.com/graphql',
      options: {
        reconnect: true
      }
    })
  : null;

/**
 * Set Token
 * @param token
 */
export const setToken = async (token: string) => {
  try {
    authToken = token ? `Bearer ${token}` : null;
    Cookies.set('token', authToken, { expires: 7 });
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};

/**
 * Set Token In Request
 * @param token
 */
export const setTokenInRequest = async (token: string) => {
  try {
    authToken = token ? token : null;
    return authToken;
  } catch(error){
     // tslint:disable-next-line:no-console
     console.log(error);
  }
};

/**
 * Destroy Token
 * For logout purpose
 */
export const destroyToken = async () => {
  try {
    Cookies.remove('token');
    authToken = null;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};

const isBrowser = typeof window !== "undefined"
const httpLink =  createUploadLink ({
  // uri: process.env.BASE_URL , 
  uri:'https://excelnz.herokuapp.com/graphql' ,
  //uri:'http://localhost:3000/graphql',
  credentials: 'same-origin', 
  fetch
})
//
const link = process.browser
  ? split(
      ({ query }) => {
        const { kind, operation }: Definintion = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      webSocketLink,
      httpLink
    )
  : httpLink;

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
//
export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
    return new ApolloClient({
      connectToDevTools: isBrowser,
      ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
      link: concat(authMiddleware, link),//createUploadLink
      cache: new InMemoryCache().restore(initialState||{}),
    })
  }
