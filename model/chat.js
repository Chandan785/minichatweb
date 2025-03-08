const mongoose  = require('mongoose');

const chatSchema = new mongoose.Schema({
    message: {  type: String, required: true },
    sender: { type: String, required: true }, 
    receiver: { type: String, required: true },
    date: { type: Date, default: Date.now }
});  


const chats = mongoose.model('Chat', chatSchema);   

module.exports = chats;