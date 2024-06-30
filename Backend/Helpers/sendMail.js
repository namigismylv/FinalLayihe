// Import the Nodemailer library
require('dotenv').config()
const nodemailer = require('nodemailer');
async function sendVerifyEmail(email, token) {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: "gmail",
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    const mailData = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your Account (rockstar__app)',
        text: 'That was easy!',
        html: `Click <b style ="color:red;",>here</b> to verify your account: http://localhost:3000/verify/${token}`
    };

    await transporter.sendMail(mailData)


}

module.exports = sendVerifyEmail