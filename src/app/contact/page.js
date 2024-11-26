"use client";
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center bg-yellow-50">

      {/* Image Banner */}
      <div className="w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/img4.jpg')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <div className="">
            <Link href="/" passHref>
              <span className="text-lg mt-2">Home /</span>
            </Link>
            <span className="text-lg mt-2">
              <Link href="/contact"> Contact Us</Link>
            </span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full lg:w-[1000px] mx-4 lg:mx-10 mt-10 rounded-lg bg-gray-700 shadow-lg border flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0">

        {/* Contact Information (White Section) */}
        <div className="w-full lg:w-1/2  p-8 space-y-6  ">
          <h2 className="text-lg font-semibold text-white uppercase">Contact Us</h2>
          <h1 className="text-3xl font-bold text-white ">Reach Out to Us</h1>
          <p className="text-white">
            We’re here to make your stay as enjoyable as possible. Feel free to contact us for any inquiries.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-white" />
              <span className="text-white">+950 123 (4567) 890</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <FaEnvelope className="text-2xl text-white" />
              <span className="text-white">example@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <FaMapMarkerAlt className="text-2xl text-white" />
              <span className="text-white">New Elephant Road, Dhammondi, Dhaka - 1212</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-white">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-white hover:text-blue-600" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xltext-white hover:text-pink-500" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-white hover:text-blue-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form (Yellow Section) */}
        <div className="w-full lg:w-1/2 bg-yellow-700 text-white p-8 shadow-md">
          <h2 className="text-lg font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded bg-yellow-900 text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-4 rounded bg-yellow-900 text-white placeholder-gray-400 focus:outline-none"
            />
            <select className="w-full p-4 rounded bg-yellow-900 text-white focus:outline-none">
              <option>General Inquiry</option>
              <option>Booking Assistance</option>
              <option>Feedback</option>
            </select>
            <textarea
              placeholder="Write Message"
              className="w-full p-4 rounded bg-yellow-900 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="w-full p-4 rounded bg-yellow-600 hover:bg-yellow-500 text-white font-semibold">
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Google Map */}
      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28492.61015784416!2d82.17856827756489!3d26.789773710096828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1731177235681!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
