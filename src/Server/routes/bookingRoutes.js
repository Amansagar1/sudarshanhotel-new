
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// POST request to save the booking
router.post('/book', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      city,
      pincode,
      phone,
      email,
      checkIn,
      checkOut,
      checkInTime,
      checkOutTime,
      roomPreference,
      numberOfAdults,
      roomId, // Include roomId from the client
      roomTitle, // Include roomTitle from the client
      roomPrice, // Include roomPrice from the client
    } = req.body;

    // Create new booking
    const newBooking = new Booking({
      firstName,
      lastName,
      address,
      city,
      pincode,
      phone,
      email,
      checkIn,
      checkOut,
      checkInTime,
      checkOutTime,
      roomPreference,
      numberOfAdults,
      roomId, // Store room ID
      roomTitle, // Store room title
      roomPrice, // Store room price
    });

    // Save the booking
    await newBooking.save();

    res.status(201).json({ message: 'Booking confirmed!', booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while booking', error });
  }
});

module.exports = router;
