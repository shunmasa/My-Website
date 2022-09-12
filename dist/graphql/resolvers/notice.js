"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeMutation = exports.NoticeQueries = void 0;
const tslib_1 = require("tslib");
const { UserInputError } = require('apollo-server');
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
// import config from '../../../config';
const notice_1 = tslib_1.__importDefault(require("../../models/notice"));
const merge_1 = require("./merge");
// const { AuthenticationError} = require('apollo-server');
const NoticeQueries = {
    notices: (parent, args, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const notices = yield notice_1.default.find();
            console.log('userdata', notices);
            //  const {notices} = user
            return notices.map((n) => {
                return merge_1.transformNotice(n);
            });
        }
        catch (err) {
            throw err;
        }
    }),
    notice: (parent, { _id }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const notice = yield notice_1.default.findById(_id);
            return merge_1.transformNotice(notice);
        }
        catch (err) {
            throw err;
        }
    })
};
exports.NoticeQueries = NoticeQueries;
const NoticeMutation = {
    createNotice: (parent, { body }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (body.trim() === '') {
            throw new UserInputError('Empty notice', {
                errors: {
                    body: 'body must not be empty'
                }
            });
        }
        try {
            const newNotice = new notice_1.default({
                _id: new mongoose_1.default.Types.ObjectId(),
                body
            });
            // const {notices}:any = user;
            // const newNotice = notices.unshift({
            //   _id: new mongoose.Types.ObjectId(),
            //   body
            // })
            const savedNotice = yield newNotice.save();
            return savedNotice;
        }
        catch (error) {
            throw error;
        }
    }),
    deleteNotice: (parent, { _id }, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('id', _id);
            const deleteNotice = yield notice_1.default.findByIdAndRemove({ _id });
            return { _id: deleteNotice._id };
            // return { _id: deletedNotice.id};
        }
        catch (err) {
            throw new Error(err);
        }
    }),
    updateNotice: (parent, { _id, noticeInput }, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        // If not authenticated throw error
        if (!context.isAuth) {
            console.log("cntext", context.isAuth);
            throw new Error('Non Authenticated');
        }
        try {
            const notice = yield notice_1.default.findByIdAndUpdate(_id, noticeInput, {
                new: true
            });
            return merge_1.transformNotice(notice);
        }
        catch (error) {
            throw error;
        }
    })
};
exports.NoticeMutation = NoticeMutation;
//# sourceMappingURL=notice.js.map