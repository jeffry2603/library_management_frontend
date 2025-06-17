Library Management System - MERN Stack
A comprehensive Library Management System built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to borrow books, manage inventory, and track borrowed items. The system features separate dashboards for administrators and regular users with appropriate permissions.

Features
Admin Features
Dashboard: View system statistics (users, books, borrowed/returned books)

Book Management: Add, view, and manage books in the library
User Management: View all registered users and their activities
Catalog Management: Track borrowed books and overdue items
Admin Management: Add new admin users
Automated Notifications: Email reminders for overdue books

User Features
Dashboard: View personal borrowing statistics
Book Browsing: Browse and borrow available books
Borrowed Books: Track personal borrowed books (returned and active)
Password Recovery: Secure password reset functionality
OTP Verification: Email verification for new accounts

Technologies Used
Frontend
React.js
Redux (State Management)
Chart.js (Data Visualization)
Tailwind CSS (Styling)
React Icons (Icon Library)

Backend
Node.js
Express.js
MongoDB (Database)
JWT (Authentication)
Nodemailer (Email notifications)
Cloudinary (Image storage)
Cron Jobs (Scheduled tasks)

Installation
Prerequisites
Node.js (v14+)

MongoDB Atlas account or local MongoDB installation

Cloudinary account (for admin avatar storage)

Demo Credentials
Admin Access : ->
Email: jeffryallan26032001@gmail.com
Password: 12345678

User Access
Register a new account or use the admin credentials above



Users
GET /api/v1/user/all - Get all users (Admin)
POST /api/v1/user/add/new-admin - Add new admin (Admin)

Scheduled Tasks
Notify Users: Runs every 30 minutes to send email reminders for overdue books

Clean Unverified Accounts: Runs every 5 minutes to remove unverified accounts older than 30 minutes

Contact
For any questions or suggestions, please contact the project maintainer at jeffryallan26032001@gmail.com.
