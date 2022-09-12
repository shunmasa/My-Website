"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
// import { graphqlUploadExpress } from 'graphql-upload';
const http = tslib_1.__importStar(require("http"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const index_1 = tslib_1.__importDefault(require("./config/index"));
// import Express from './config/express';
const next = require('next');
// const express = require('express')
// const next = require('next')
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const auth_1 = tslib_1.__importDefault(require("./middleware/auth"));
const express = require('express');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
/**
 * Promisify All The Mongoose
 * @param mongoose
 */
bluebird_1.default.promisifyAll(mongoose_1.default);
/**
 * Connecting Mongoose
 * @param uris
 * @param options
 */
mongoose_1.default.connect(index_1.default.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
/**
 * Throw error when not able to connect to database
 */
mongoose_1.default.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${index_1.default.DB_URI}`);
});
app.prepare()
    .then(() => {
    const server = express();
    server.use(auth_1.default);
    const apolloServer = require('./graphql/schema/index').createApolloServer();
    // server.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
    apolloServer.applyMiddleware({ app: server });
    const httpServer = http.createServer(server);
    apolloServer.installSubscriptionHandlers(httpServer);
    server.all("*", (req, res) => {
        return handle(req, res);
    });
    //  server.get("/form", (req, res) => {
    //     return handle(req, res)
    // })
    server.listen(port, err => {
        if (err)
            throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
//# sourceMappingURL=index.js.map