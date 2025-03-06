const mongoose = require('mongoose');
const chat = require('./model/chat.js');


main()
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/WhatApp')
    };

    
    let chats =  [
        {
        message: "Hello",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "Hi",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    {
        message: "How are you",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "I am fine",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    {
        message: "How are you",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "I am fine",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    {
        message: "How are you",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "I am fine",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    {
        message: "How are you",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "I am fine",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    {
        message: "How are you",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "I am fine",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    {
        message: "How are you",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "I am fine",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    {
        message: "How are you",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "I am fine",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    {
        message: "How are you",
        sender: "John",
        receiver: "Doe",
        date: Date.now()
    },
    {
        message: "I am fine",
        sender: "Doe",
        receiver: "John",
        date: Date.now()
    },
    
    
    ];
    chat.insertMany(chats)
    .then(result => {
        console.log(result);
    })