"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
var shortId = require('shortid');
const postSchema = new mongoose_1.default.Schema({
    _id: { type: String, unique: true, default: shortId.generate },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    file: {
        type: String
    },
    postTitle: {
        type: String
    }
}, {
    timestamps: true
});
/**
 * Statics
 */
postSchema.statics = {
    /**
     * Get User
     * @param {ObjectId} id - The objectId of user.
     */
    get(id) {
        return this.findById(id)
            .execAsync()
            .then((post) => {
            if (post) {
                return post;
            }
        });
    }
};
exports.default = mongoose_1.default.model('Post', postSchema);
//# sourceMappingURL=post.js.map