"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID from .env
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID from .env
        { name, email, subject, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key from .env
      )
      .then((response) => {
        console.log("Message sent successfully:", response);
        setSuccess(true);
        setError("");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setError("Failed to send the message. Please try again.");
      });
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url('/images/img5.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full max-w-5xl mx-auto p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Contact Us
          </h1>
          <div className="text-lg mt-4">
            <Link href="/" passHref>
              <span className="text-lg mt-2 hover:underline ">Home /</span>
            </Link>
            <span className="text-lg mt-2 pl-2 hover:underline">
              <Link href="/contact">Contact Us</Link>
            </span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full lg:w-[1000px] mx-4 lg:mx-10 mt-10 rounded-lg bg-gray-700 shadow-lg border flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 p-8 space-y-6">
            <h2 className="text-lg font-semibold text-white uppercase">
              Contact Us
            </h2>
            <h1 className="text-3xl font-bold text-white">
              Reach Out to Us
            </h1>
            <p className="text-white">
              We’re here to make your stay as enjoyable as possible. Feel free
              to contact us for any inquiries.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-2xl text-white" />
                <span className="text-white">+91 0000000000</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <FaEnvelope className="text-2xl text-white" />
                <span className="text-white">hotelsudarshan01@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <FaMapMarkerAlt className="text-2xl text-white" />
                <span className="text-white">
                  Ayodhya Road, Ayodhya, Uttar Pradesh - 0000
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4 text-white">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl text-white hover:text-blue-600" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-white hover:text-pink-500" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl text-white hover:text-blue-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-yellow-700 text-white p-8 shadow-md flex items-center justify-center">
            {!success ? (
              <div className="w-full max-w-md">
                <h2 className="text-lg font-semibold mb-6">Get in Touch</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded bg-yellow-900 text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded bg-yellow-900 text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 rounded bg-yellow-900 text-white focus:outline-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Booking Assistance">
                      Booking Assistance
                    </option>
                    <option value="Feedback">Feedback</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Write Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded bg-yellow-900 text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full p-4 rounded bg-yellow-600 hover:bg-yellow-500 text-white font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <div className="w-full max-w-md text-center animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-white">
                  Your message has been sent successfully. We'll get back to you
                  shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3562.472390398609!2d82.15182107543426!3d26.761207976737815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ1JzQwLjQiTiA4MsKwMDknMTUuOCJF!5e0!3m2!1sen!2sin!4v1732726054854!5m2!1sen!2sin"
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
