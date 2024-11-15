
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: String,
  price: String,
  rating: Number,
  available: { type: Boolean, required: true },  // New field
  bookingstatus: { type: Boolean, required: true }, 
  description: String,
  features: [String],
  amenities: [String],
  facilities: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RoomDetails', roomSchema);
