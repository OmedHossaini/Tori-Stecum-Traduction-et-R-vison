# Tori Stecum Traduction et Révision

A professional website for a translation and revision service based in Montreal, Canada. This full-stack application showcases translation, revision, and copywriting services while providing a seamless bilingual user experience.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Key Highlights](#key-highlights)
- [License](#license)
- [Contact](#contact)

## Overview

This application serves as a professional online presence for Tori Stecum Traduction et Révision, a language service provider specializing in translation, revision, and copywriting services between English and French. The website features a clean, responsive design with bilingual support and seamless content transitions.

## Features

### 1. Bilingual User Interface
- Complete language switching functionality (English/French)
- Persistent language preference through localStorage
- Smooth content transitions when switching languages

### 2. Responsive Design
- Mobile-first approach ensuring optimal display across all devices
- Animated navigation menu for mobile devices
- Flexible grid layouts adapting to different screen sizes

### 3. Hero Section
- Engaging landing section with animated elements
- Clear value proposition and service overview
- Direct call-to-action linking to contact form

### 4. Service Sections
- **Translation Services**: Detailed showcase of language pairs and specialized domains
- **Revision & Proofreading**: Highlight of human expertise in document polishing
- **Copywriting Services**: Presentation of content creation offerings with specific examples

### 5. Contact System
- User-friendly contact form with client-side validation
- Secure form submission with error handling
- Backend email delivery system using NodeMailer
- Success/error feedback for form submission

### 6. Animations & Visual Elements
- Subtle scroll animations and hover effects
- Custom animated background elements
- Strategic use of icons and visual cues

### 7. Deployment & Analytics
- Integration with Vercel Analytics for performance monitoring
- Server deployment on Render
- CORS configuration for secure API communication

## Technologies Used

### Frontend
- React.js
- React Router
- React Scroll
- React Icons
- CSS3 with custom animations
- Context API for state management

### Backend
- Node.js
- Express.js
- Nodemailer for email functionality
- CORS middleware
- Environment variable management with dotenv

### DevOps
- Vercel for frontend hosting
- Render for backend hosting
- GitHub for version control
- npm for package management

## Project Structure

```
/
├── client/                  # Frontend React application
│   ├── public/              # Public assets
│   └── src/
│       ├── components/      # React components
│       ├── css/             # Component-specific styles
│       ├── LanguageContext.js  # Language context provider
│       └── Translations.js  # Translation key-value pairs
│
├── server/                  # Backend Node.js application
│   ├── server.js            # Express server setup
│   └── package.json         # Backend dependencies
│
├── LICENSE                  # MIT License
└── README.md                # Project documentation
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file with the following variables
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
PORT=5000

# Start development server
npm run dev
```

## Usage

### Development
- Frontend runs on http://localhost:3000
- Backend runs on http://localhost:5000

### Production
- Deploy frontend to Vercel
- Deploy backend to Render
- Set environment variables in respective hosting platforms

## Key Highlights

1. **Bilingual Implementation**: Seamless language switching with persistent user preferences and complete content translation.

2. **Responsive Design Architecture**: Mobile-first approach with adaptive layouts and optimized user experience across devices.

3. **Full-Stack Integration**: Complete end-to-end solution connecting React frontend with Node.js backend and third-party service integrations.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries about this project, please contact:
- Email: toristecum.translations@gmail.com
- Location: Montreal, Canada