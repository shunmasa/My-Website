const nodemailer = require('nodemailer')
import config from './config/index';

var transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,
  requireTLS: true,
  auth: {
      user: config.userID,
      pass: config.mailPass,
      clientSecret: config.clientSecret,
      refreshToken: config.refreshToken
  }
});


export const mailer = (mailOptions) => {
  transporter.sendMail(mailOptions).then(function(data) {
      return true;
    }, function(error) {
      console.error(error);
      return false;
    });
}

