const nodemailer = require("nodemailer");
const twilio = require("twilio");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendEmail = async (email, message) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Notification",
        text: message || "Default message",
    };

    await transporter.sendMail(mailOptions);
};

const sendSMS = async (phone, message) => {
    await twilioClient.messages.create({
        body: message || "Default SMS message",
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
    });
};

module.exports = { sendEmail, sendSMS };
