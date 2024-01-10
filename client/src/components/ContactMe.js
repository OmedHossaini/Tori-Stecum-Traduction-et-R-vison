// ContactMe.js

import React, { useState } from 'react';
import '../css/ContactMe.css';
const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      window.alert(data.message);
      console.log('Email sent successfully:', data);
    } catch (error) {
      console.error('Error sending email:', error.message || error);
      window.alert('Error sending email. Please try again.');
    }
  };

  return (
    <div id="contact" className="contact-me-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>

      <p>If you need a quote or have any inquiries, feel free to drop us a line for a guaranteed prompt and warm response. Au plaisir de travailler avec vous 🌎 Cheers to future projects together!</p>
    </div>
  );
};

export default ContactMe;