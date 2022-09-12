"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMutation = void 0;
const tslib_1 = require("tslib");
const mailer_1 = require("../../mailer");
const index_1 = tslib_1.__importDefault(require("../../config/index"));
// const send = ({name,email,number,message}) =>{
//   let sendSmtpEmail = {
//     to: [{
//         email: 'masashilandjob@gmail.com'
//     }],
//     templateId: 1,
//     params: {
//       name:name,
//       email:email,
//       number:number,
//       subject: 'お問い合わせ内容',
//       text: message,
//   }
//   }
//   sendinblue(sendSmtpEmail) 
// }
const SendMutation = {
    createMessage: (parent, { email, message, name, number }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        console.log('message:', message);
        console.log('email:', email);
        var mailOptions = {
            from: '' + index_1.default.from + '',
            to: "masashilandjob@gmail.com",
            email: email,
            subject: 'お客様からのお問合せ',
            html: 'お問い合わせが' + name + '様よりありました' + 'お問い合わせ内容は' + message + 'メールアドレス' + email + '電話番号' + number,
            name: name,
            number: number
        };
        mailer_1.mailer(mailOptions);
    })
};
exports.SendMutation = SendMutation;
//# sourceMappingURL=email.js.map