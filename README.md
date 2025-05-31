# Perfume Store - MERN Stack Application

A full-stack e-commerce application for perfumes built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Project Structure
```
perfume-store/
├── frontend/         # React frontend application
└── backend/         # Express.js and MongoDB backend
```

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Features
- Product catalog with perfume listings
- User authentication
- Shopping cart functionality
- Order management
- Admin dashboard for product management

## Technologies Used
- Frontend: React.js, React Router, Axios
- Backend: Node.js, Express.js
- Database: MongoDB
- State Management: Redux Toolkit
- Styling: Tailwind CSS 