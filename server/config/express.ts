
// import { ApolloServer } from 'apollo-server-express';

import express from 'express';
import * as http from 'http';
// import schema from '../graphql/schema/index';
import auth from '../middleware/auth';


const cors = require('cors')
// const allowedOrigins =  ['http://localhost:3000','https://excelnz.herokuapp.com/','http://localhost:4020']

// const dev = process.env.NODE_ENV !== "production";
// const app = next({dev});
// const handle = app.getRequestHandler();


const corsOptions = {
  origin: 'http://localhost:4020',
  credentials: true
};
class Express {
  public express: express.Application;
  // public server: ApolloServer = new ApolloServer(schema);
  public httpServer: http.Server;
  public init = (): void => {
   

    this.express = express();
 
  
    this.express.use(cors(corsOptions));


   


    this.express.use(auth);
    // this.express.use(bodyParser.json())
    // this.express.use(bodyParser.urlencoded({extended:true}))
    // this.server.applyMiddleware({ app: this.express });
    this.httpServer = http.createServer(this.express);
    /**
     * Installing subscription handlers
     */
    // this.server.installSubscriptionHandlers(this.httpServer);
  }
}

export default Express;



    /**
     *  Middlerware for extracting authToken
     */
    // {
    //   origin(origin, callback) {
    //     /**
    //      * Allow requests with no origin
    //      * Like mobile apps or curl requests
    //      */
    //     if (!origin) { return callback(null, true); }
    //     if (config.allowedOrigins.indexOf(origin) === -1) {
    //       const msg = `The CORS policy for this site does not
    //       allow access from the specified Origin.`;
    //       return callback(new Error(msg), false);
    //     }
    //     return callback(null, true);
    //   }
    // }