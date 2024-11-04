const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'https://tori-stecum-traduction-et-r-vison.vercel.app/' // Replace with your actual frontend URL
}));
app.use(express.json());

// Server - /api/submitForm route
app.post('/api/submitForm', async (req, res) => {
  try {
    const formData = req.body;
    console.log('Received form data:', formData);

    // Set up nodemailer transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: formData.email,
      to: 'toristecum.translations@gmail.com', 
      subject: 'New Contact Form Submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error.message || error);
    res.status(500).json({ message: 'Internal Server Error', details: 'Failed to process the form submission', error: error.message || error });
  }
});
