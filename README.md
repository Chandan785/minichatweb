# MiniChatWeb

## 🚀 About the Project
MiniChatWeb is a simple web-based chat application that allows users to send, edit, and delete messages. The messages are stored in a MongoDB database and managed through an intuitive interface built with EJS.

## 🛠️ Technologies Used
- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for handling routes
- **MongoDB** - Database for storing chat messages
- **Mongoose** - ODM for interacting with MongoDB
- **EJS** - Template engine for rendering views
- **Body-Parser** - Middleware for parsing form data
- **Method-Override** - Enables HTTP method overrides

## 🎯 Features
- 📩 Send messages
- ✏️ Edit messages
- 🗑️ Delete messages
- ⏳ Timestamp for each message
- 🔄 Data persistence using MongoDB

## 📂 Project Structure
```
/minichatweb
│-- models/
│   │-- chat.js       # Mongoose schema for chats
│-- views/
│   │-- index.ejs     # Homepage displaying messages
│   │-- new.ejs       # Form for adding new messages
│   │-- edit.ejs      # Form for editing messages
│-- public/
│-- routes/
│-- .env              # Environment variables
│-- server.js         # Main server file
│-- package.json      # Dependencies and scripts
│-- README.md         # Project documentation
```

## 🚀 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Chandan785/minichatweb.git
cd minichatweb
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=8080
MONGO_URL=mongodb://localhost:27017/minichatweb
```

### 4️⃣ Start the Server
```sh
npm start
```
The server will start on `http://localhost:8080`

## 🔗 Live Demo
[MiniChatWeb Demo](https://minichatweb-6.onrender.com)

## 💡 Future Enhancements
- ✅ User authentication
- ✅ Real-time messaging with WebSockets
- ✅ UI enhancements with TailwindCSS

## 📜 License
This project is open-source and free to use. Feel free to modify and improve!

---
💬 Happy Chatting with MiniChatWeb! 🚀

