import Promise from 'bluebird';
import { graphqlUploadExpress } from 'graphql-upload';
import * as http from 'http';
import mongoose from 'mongoose';
import config from './config/index';
// import Express from './config/express';
const next = require('next')
// const express = require('express')
// const next = require('next')
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
import auth from './middleware/auth';
const { join } = require('path');

const favicon = require('serve-favicon');
const express = require('express')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();



/**
 * Promisify All The Mongoose
 * @param mongoose
 */
Promise.promisifyAll(mongoose);

/**
 * Connecting Mongoose
 * @param uris
 * @param options
 */


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});




/**
 * Throw error when not able to connect to database
 */
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.DB_URI}`);
});



app.prepare()
.then(() => { 
  const server = express()
  server.use(favicon(join(__dirname, 'static', 'favicon.ico')));
  server.use(auth);
  const apolloServer = require('./graphql/schema/index').createApolloServer();
  server.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  apolloServer.applyMiddleware({app: server})

  const httpServer = http.createServer(server);
  apolloServer.installSubscriptionHandlers(httpServer);

  server.all("*", (req, res) => {
    return handle(req, res)
  
})

//  server.get("/form", (req, res) => {
//     return handle(req, res)
  
// })


server.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})


});
