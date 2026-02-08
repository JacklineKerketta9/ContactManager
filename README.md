# 📇 Contact Manager Web Application

A full-stack Contact Management System that allows users to securely store, manage, and organize their personal and professional contacts.

Built using the MERN stack with authentication, filtering, grouping, favorites, and search functionality.

---

## 🚀 Live Demo

🌐 **Frontend:** https://contact-manager-two-tau.vercel.app  

---

## 📌 Features

### 🔐 Authentication
- User Signup & Login
- JWT-based authentication
- Protected routes
- Secure password handling

### 👥 Contact Management
- Add new contacts
- View contact details
- Edit / update contacts
- Delete contacts

### ⭐ Favorites
- Mark / unmark contacts as favorite
- Filter by favorites

### 🏷️ Tags & Grouping
- Add tags to contacts
- Filter contacts by tags
- Dynamic tag dropdown

### 🔎 Search & Filter
- Search by name, email, or phone
- Tag filtering
- Favorite filtering

### 📄 Pagination
- 10 contacts per page
- Prev / Next navigation

### 📱 Responsive UI
- Works on desktop

---

## 🛠️ Tech Stack

### Frontend
- React (Create React App)
- Axios
- React Router DOM
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Express Validator

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---


## 📂 Detailed Project Structure

```
ContactManager/
│
├── client/                             # React Frontend
│   │
│   ├── node_modules/
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   └── logo.png
│   │   │
│   │   ├── components/
│   │   │   ├── ContactRow.jsx
│   │   │   ├── ContactTable.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── ContactDetails.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Login.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── contactService.js
│   │   │
│   │   ├── styles/
│   │   │   └── app.css
│   │   │
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── logo.svg
│   ├── package-lock.json
│   └── package.json
│
│
├── server/                             # Express Backend
│   │
│   ├── models/
│   │   ├── Contact.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── contactRoutes.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── hashPassword.js
│   │   └── pagination.js
│   │
│   ├── validators/
│   │   ├── authValidator.js
│   │   └── contactValidator.js
│   │
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   ├── server.js
│   ├── package-lock.json
│   └── package.json
│
│
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/JacklineKerketta9/ContactManager
cd contact-manager
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside **server/** and add:

```
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
PORT=5000
```

Run Backend:

```bash
npm run start
```

Server runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside **client/** and add:

```
REACT_APP_API_URL=http://localhost:5000
```

Run Frontend:

```bash
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🧪 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint | Description |
|-------|-----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

---

### 📇 Contact Routes

| Method | Endpoint | Description |
|-------|-----------|-------------|
| GET | /api/contacts | Get all contacts |
| POST | /api/contacts | Create contact |
| GET | /api/contacts/:id | Get single contact |
| PUT | /api/contacts/:id | Update contact |
| DELETE | /api/contacts/:id | Delete contact |
| PATCH | /api/contacts/:id/favorite | Toggle favorite |

---

## 📸 Screenshots

- Login / Signup Page
  <img width="1789" height="1040" alt="Screenshot 2026-02-08 at 8 45 28 PM" src="https://github.com/user-attachments/assets/b298225a-2fb3-4808-a880-a71548829037" />

- Dashboard
  <img width="1789" height="1040" alt="Screenshot 2026-02-08 at 8 59 59 PM" src="https://github.com/user-attachments/assets/f1eb6f11-a11a-4c46-87fd-ab3b1e765e9a" />

- Add Contact Form
  <img width="1789" height="1040" alt="Screenshot 2026-02-08 at 9 00 12 PM" src="https://github.com/user-attachments/assets/d41f1ca4-a023-43c4-8397-059f4e0031ef" />

- Contact Details View
  <img width="1789" height="1040" alt="Screenshot 2026-02-08 at 9 00 37 PM" src="https://github.com/user-attachments/assets/363a336e-2538-4664-9e75-de16ac1038e7" />

- Filters & Tags
  <img width="1789" height="1040" alt="Screenshot 2026-02-08 at 9 01 13 PM" src="https://github.com/user-attachments/assets/759dad94-cc5d-414c-894d-cf86ef6e6136" />



