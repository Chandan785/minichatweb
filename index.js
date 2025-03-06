const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const chat = require('./model/chat.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

main()
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/WhatApp')
    };
 
    app.get('/chats', async (req, res) => {
        let chats = await chat.find();
        res.send(chats);
    });
app.get('/', (req, res) => {
  res.send('i am listening'); 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});