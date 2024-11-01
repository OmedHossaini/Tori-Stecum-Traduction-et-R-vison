const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
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
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App Password
      },
    });

    const mailOptions = {
      from: formData.email, // The user's email address
      to: 'toristecum.translations@gmail.com', // Your destination email address
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
