"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const noticeSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
noticeSchema.statics = {
    /**
     * Get User
     * @param {ObjectId} id - The objectId of user.
     */
    get(id) {
        return this.findById(id)
            .execAsync()
            .then((notice) => {
            if (notice) {
                return notice;
            }
        });
    }
};
exports.default = mongoose_1.default.model('Notice', noticeSchema);
//# sourceMappingURL=notice.js.map