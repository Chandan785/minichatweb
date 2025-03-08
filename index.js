const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const chat = require('./model/chat.js');
const methodOverride = require('method-override');

// Load environment variables
require("dotenv").config();

const port = process.env.PORT || 8080;
const mongo_Url = process.env.MONGO_URL;  // MongoDB connection URL

// Middleware setup
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Ensure MongoDB URL is defined before connecting
if (!mongo_Url) {
    console.error("Error: MongoDB connection URL is undefined. Check your .env file.");
    process.exit(1); // Stop the server if MongoDB URL is missing
}

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(mongo_Url);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

main();

// Routes
app.get('/chats', async (req, res) => {
    let chats = await chat.find();
    console.log(chats);  
    res.render("index.ejs", { chats });
});

app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/chats', async (req, res) => {
    let newChat = new chat(req.body);
    await newChat.save();
    res.redirect('/chats');
});

// Edit route
app.get('/chats/:id', async (req, res) => {
    let chatId = req.params.id;
    let chatFound = await chat.findById(chatId);
    res.render('edit.ejs', { chatFound });
});

// Update route
app.put('/chats/:id', async (req, res) => {
    let chatId = req.params.id;
    await chat.findByIdAndUpdate(chatId, req.body, { new: true });
    res.redirect('/chats');
});

// Delete route
app.delete('/chats/:id', async (req, res) => {
    let chatId = req.params.id; 
    await chat.findByIdAndDelete(chatId);
    res.redirect('/chats');
});

app.get('/', (req, res) => {
    res.send('I am listening'); 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
