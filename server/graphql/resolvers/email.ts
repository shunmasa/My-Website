//ID excel-310821
//pn  482364632785
 //clientId
//482364632785-jubfba72jnmnvc7uo8vatdehn6taou37.apps.googleusercontent.com
//es_oLW9UJ1nhVN4vqsooJaer
//token 4/0AY0e-g487bWKsjdk8M6ACdoaZe8XZH78Z6Z5GCPVDlIcEr6SsS_CSEpqY7v1TJorsqayqg
import { number } from 'prop-types'
import {mailer} from '../../mailer'
import config from '../../config/index';

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
  createMessage: async (parent: any, {email,message,name,number}:any) => {
   console.log('message:',message)
   console.log('email:',email)

   var mailOptions = {
    from:''+config.from+'',
    to:"masashilandjob@gmail.com",
    email:email,
    subject:'お客様からのお問合せ',
    html:'お問い合わせが'+ name + '様よりありました' +'お問い合わせ内容は' + message + 'メールアドレス'+ email + '電話番号'+number,
    name:name,
    number:number

  }
    mailer(mailOptions)
  }
}


export {SendMutation};


