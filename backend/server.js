require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const sendNotification = require("./services/notificationService");

app.post("/send", async (req, res) => {
    const { email, phone, message } = req.body;

    try {
        if (email) await sendNotification.sendEmail(email, message);
        if (phone) await sendNotification.sendSMS(phone, message);

        console.log("Notification Sent:", { email, phone, message });
        res.status(200).json({ message: "Notification sent successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
