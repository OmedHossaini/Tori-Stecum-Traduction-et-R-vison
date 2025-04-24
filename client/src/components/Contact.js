import React, { useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../LanguageContext';
import translations from '../Translations';
import '../css/Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = t.contact.nameError;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.emailError;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t.contact.emailInvalid;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = t.contact.messageError;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.messageTooShort;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setStatus({ ...status, submitting: true });
    
    try {
      const response = await axios.post(
        'https://tori-stecum-traduction-et-r-vison.onrender.com/api/submitForm',
        formData,
        { timeout: 10000 }
      );
      
      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: response.data.message || t.contact.successMessage
      });
      
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false, message: '' }));
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: t.contact.errorMessage
      });
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: false, message: '' }));
      }, 5000);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.contact.title}</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contact.getInTouch}</h3>
            <p>{t.contact.contactIntro}</p>
            
            <div className="contact-method">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
              </div>
              <div className="contact-text">
                <h4>{t.contact.phone}</h4>
                <p>{t.contact.phoneText}</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-text">
                <h4>{t.contact.email}</h4>
                <p>{t.contact.emailText}</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-text">
                <h4>{t.contact.location}</h4>
                <p>{t.contact.locationText}</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">{t.contact.subjectLabel}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{t.contact.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <div className="error-message">{errors.message}</div>}
              </div>
              
              <button type="submit" disabled={status.submitting} className="submit-button">
                {status.submitting ? t.contact.sending : t.contact.submitButton}
              </button>
              
              {status.success && <div className="success-message">{status.message}</div>}
              {status.error && <div className="error-message">{status.message}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;