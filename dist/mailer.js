"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailer = void 0;
const tslib_1 = require("tslib");
const nodemailer = require('nodemailer');
const index_1 = tslib_1.__importDefault(require("./config/index"));
var transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: false,
    requireTLS: true,
    auth: {
        user: index_1.default.userID,
        pass: index_1.default.mailPass,
        clientSecret: index_1.default.clientSecret,
        refreshToken: index_1.default.refreshToken
    }
});
const mailer = (mailOptions) => {
    transporter.sendMail(mailOptions).then(function (data) {
        return true;
    }, function (error) {
        console.error(error);
        return false;
    });
};
exports.mailer = mailer;
//# sourceMappingURL=mailer.js.map