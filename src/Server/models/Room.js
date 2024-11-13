// models/Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  rating: Number,
  image: String
});

module.exports = mongoose.model('Room', roomSchema);
