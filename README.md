📌 Project Overview

This Proof of Concept (PoC) web application replaces the traditional paper-based hardware management system with an automated, scalable, and secure platform. It enables users to request, allocate, track, and manage hardware resources efficiently while ensuring data security and real-time insights.

🔹 Features
✔ Secure User Authentication – Encrypts user credentials for safe login and account management.
✔ Project Management – Allows users to create and manage hardware-related projects.
✔ Real-Time Hardware Tracking – View available resources, check-in/check-out hardware, and monitor usage.
✔ Automated Feedback Reports – Utilizes Google APIs for data visualization (bar charts, pie charts, scatter plots).
✔ Scalability & Cloud Deployment – Hosted on Heroku/Azure, supporting future expansion.

🛠 Tech Stack

Frontend: React.js, HTML, CSS
Backend: Python (Flask), Node.js
Database: MongoDB
APIs & Tools: Google APIs (for data visualization), Lesk Algorithm (for text summarization)
Deployment: Heroku

📌 System Architecture

The system follows a multi-tier architecture to ensure modularity, security, and scalability.

1️⃣ User Management
Signup/Login with encrypted credentials.
Project Creation: Users can initiate and manage projects.
Database: Securely stores user details, projects, and authentication data.
2️⃣ Hardware Resource Management
Resource Status Tracking: Users can view available resources before making requests.
Check-in/Check-out: Users can allocate and return hardware units via an interactive dashboard.
Real-time Updates using a database-backed tracking system.
3️⃣ Automated Feedback & Reporting
Feedback Analysis: Users can submit feedback on hardware usage.
Visualization: Uses Google APIs to generate bar charts, pie charts, and scatter plots.

🚀 Installation & Setup

🔹 Prerequisites
Ensure you have the following installed:
✔ Node.js
✔ Python
✔ MongoDB
✔ Heroku CLI (if deploying)

🔹 Clone the Repository
git clone https://github.com/your-username/HaaS-System.git
cd HaaS-System
🔹 Install Dependencies
# Backend
cd backend
pip install -r requirements.txt

# Frontend
cd frontend
npm install
🔹 Run the Application Locally
# Start Backend Server
cd backend
python app.py

# Start Frontend
cd frontend
npm start
