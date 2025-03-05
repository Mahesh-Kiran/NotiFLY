# NotiFLY

This is a simple web application that allows users to send email and SMS notifications.

## Features

- Send email notifications
- Send SMS notifications
- Real-time success and error messages
- Responsive and user-friendly design

## Technologies Used

- React (Frontend)
- Axios (HTTP Requests)
- Node.js with Express (Backend)
- CSS for styling

##Prerequisites

Make sure you have the following installed:

Node.js (v18)

## Installation and Setup

1. Clone the Repository

2. Install Dependencies
    npm install express cors nodemailer twilio dotenv body-parser axios

3. Configure Environment Variables (.env in backend)
   Create a .env file in the root directory and add the following variables:
    EMAIL_USER=your_mail_which_is_used_for_sending_mails_from_this.
    EMAIL_PASS=App_password created from google services
    Create a Twilio account for sending sms
    TWILIO_SID=Sid_from_twilio
    TWILIO_AUTH_TOKEN=token
    TWILIO_PHONE_NUMBER=twilio_generated_phone_no.



5. Start the Development Server

    cd backend
    node server.js
    
    cd frontend
    npm start
