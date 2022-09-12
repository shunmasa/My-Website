"use strict";
// import { ApolloServer } from 'apollo-server-express';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const http = tslib_1.__importStar(require("http"));
// import schema from '../graphql/schema/index';
const auth_1 = tslib_1.__importDefault(require("../middleware/auth"));
const cors = require('cors');
// const allowedOrigins =  ['http://localhost:3000','https://excelnz.herokuapp.com/','http://localhost:4020']
// const dev = process.env.NODE_ENV !== "production";
// const app = next({dev});
// const handle = app.getRequestHandler();
const corsOptions = {
    origin: 'http://localhost:4020',
    credentials: true
};
class Express {
    constructor() {
        this.init = () => {
            this.express = express_1.default();
            this.express.use(cors(corsOptions));
            this.express.use(auth_1.default);
            // this.express.use(bodyParser.json())
            // this.express.use(bodyParser.urlencoded({extended:true}))
            // this.server.applyMiddleware({ app: this.express });
            this.httpServer = http.createServer(this.express);
            /**
             * Installing subscription handlers
             */
            // this.server.installSubscriptionHandlers(this.httpServer);
        };
    }
}
exports.default = Express;
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
//# sourceMappingURL=express.js.map