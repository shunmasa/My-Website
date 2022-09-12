"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const post_1 = require("./post");
const notice_1 = require("./notice");
const email_1 = require("./email");
const rootResolver = {
    Query: Object.assign(Object.assign(Object.assign({}, user_1.UserQueries), post_1.PostQueries), notice_1.NoticeQueries),
    Mutation: Object.assign(Object.assign(Object.assign(Object.assign({}, user_1.UserMutation), post_1.PostMutation), notice_1.NoticeMutation), email_1.SendMutation),
    Subscription: Object.assign(Object.assign({}, user_1.UserSubscription), post_1.PostSubscription)
};
//
exports.default = rootResolver;
//# sourceMappingURL=index.js.map