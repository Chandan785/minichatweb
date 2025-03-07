const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const chat = require('./model/chat.js');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


main()
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/WhatApp')
    };
 
    app.get('/chats', async (req, res) => {
        let chats = await chat.find();
        console.log(chats);  
        res.render("index.ejs", {chats});
    });

    app.get('/chats/new', (req, res) => {
        res.render('new.ejs');
    });

    app.post('/chats', async (req, res) => {
        let newChat = new chat(req.body);
        await newChat.save();
        res.redirect('/chats');
    });

    //edit route
    app.get('/chats/:id', async (req, res) => {
        let chatId = req.params.id;
        let chatFound = await chat.findById(chatId);
        res.render('edit.ejs', {chatFound});
    });

 //update route
    app.put('/chats/:id', async (req, res) => {
        let chatId = req.params.id;
        await chat.findByIdAndUpdate(chatId, req.body, {new: true});
        res.redirect('/chats');
    });


//delete route
    app.delete('/chats/:id', async (req, res) => {
        let chatId = req.params.id; 
        await chat.findByIdAndDelete(chatId);
        res.redirect('/chats');
    });

app.get('/', (req, res) => {
  res.send('i am listening'); 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});