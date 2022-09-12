"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformNotice = exports.getNotice = exports.transformPost = exports.getPost = exports.transformUser = exports.getUser = void 0;
const tslib_1 = require("tslib");
const date_1 = tslib_1.__importDefault(require("../../helpers/date"));
const user_1 = tslib_1.__importDefault(require("../../models/user"));
const post_1 = tslib_1.__importDefault(require("../../models/post"));
const notice_1 = tslib_1.__importDefault(require("../../models/notice"));
/**
 *
 * @param id
 */
const getUser = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(id);
        return Object.assign(Object.assign({}, user._doc), { _id: user.id });
    }
    catch (err) {
        throw err;
    }
});
exports.getUser = getUser;
/**
 * Get user object with schema typing
 * @param user
 */
const transformUser = (user) => {
    return Object.assign(Object.assign({}, user._doc), { _id: user.id });
};
exports.transformUser = transformUser;
const getNotice = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const notice = yield notice_1.default.findById(id);
        return Object.assign(Object.assign({}, notice._doc), { _id: notice.id, createdAt: date_1.default(notice._doc.createdAt) });
    }
    catch (err) {
        throw err;
    }
});
exports.getNotice = getNotice;
const transformNotice = (notice) => {
    return Object.assign(Object.assign({}, notice._doc), { _id: notice.id, createdAt: date_1.default(notice._doc.createdAt) });
};
exports.transformNotice = transformNotice;
const getPost = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_1.default.findById(id);
        return Object.assign(Object.assign({}, post._doc), { _id: post.id, createdAt: date_1.default(post._doc.createdAt), updatedAt: date_1.default(post._doc.updatedAt) });
    }
    catch (err) {
        throw err;
    }
});
exports.getPost = getPost;
const transformPost = (post) => {
    return Object.assign(Object.assign({}, post._doc), { _id: post.id, createdAt: date_1.default(post._doc.createdAt), updatedAt: date_1.default(post._doc.updatedAt) });
};
exports.transformPost = transformPost;
//# sourceMappingURL=merge.js.map