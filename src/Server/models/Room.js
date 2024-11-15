// models/Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },  // Keep it as a string
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  features: [String],  // Array of features
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
