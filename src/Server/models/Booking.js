/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  pincode: String,
  phone: String,
  email: String,
  checkIn: Date,
  checkOut: Date,
  checkInTime: String,
  checkOutTime: String,
  roomPreference: String,
  numberOfAdults: Number,
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
