"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import Link from "next/link";
import UPI from "../Assets/PaymentLogo/google-pay-logo-transparent-free-png.png"
import PhonepayUPI from "../Assets/PaymentLogo/phonepe-logo-C4BD70AF79-seeklogo.com.png"
import PaytmUPI from "../Assets/PaymentLogo/paytm-icon.png"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className=" bg-gray-800 pt-9 w-full flex" >
      <div className="mx-auto w-full  px-4 xl:px-0 p-10">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10 p-4">
          {/* Logo & Info Section */}
          <div className="md:w-[316px]">
            <h1 className="text-white font-extrabold">
             Hotel  <span className="text-rose-600">Sudarshan</span>
            </h1>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Welcome to Hotel Sudarshan, a place where luxury meets comfort. Enjoy a unique experience tailored for your every need. Whether it&apos;s our world-class amenities, rooms, or services, we are here to offer the best stay in town.
            </p>
            <div className="mt-[18px] flex gap-4">
              {/* Social Media Links */}
              <Link className="hover:scale-110" target="_blank" href="https://www.facebook.com/SudarshanHotel">
                <FaFacebookF className="text-white" size={36} />
              </Link>
              <Link className="hover:scale-110" target="_blank" href="https://www.linkedin.com/company/sudarshan-hotel">
                <FaLinkedinIn className="text-white" size={36} />
              </Link>
              <Link className="hover:scale-110" target="_blank" href="https://www.instagram.com/sudarshan_hotel">
                <FaInstagram className="text-white" size={36} />
              </Link>
              <Link className="hover:scale-110" target="_blank" href="https://twitter.com/SudarshanHotel">
                <FaTwitter className="text-white" size={36} />
              </Link>
              <Link className="hover:scale-110" target="_blank" href="https://www.youtube.com/channel/sudarshan-hotel">
                <FaYoutube className="text-white" size={36} />
              </Link>
            </div>
          </div>

          {/* Support Info Section */}
          <div className="md:w-[316px] p-4 ">
            <div className="mt-[23px] flex flex-col  justify-center ">
           
              <div className="ml-4 text-white/[80%]  ">
           
              <h4 className="font-semibold flex gap-4 items-center "> Support </h4>
                <p>For inquiries, call or email:</p>
                <a href="tel:+1234567890" className="text-white hover:text-rose-600">+123 456 7890</a><br />
                <a href="mailto:info@sudarshanhotel.com" className="text-white hover:text-rose-600">info@sudarshanhotel.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:w-[316px] p-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-white/[80%]">
              <li><a href="/about-us" className="hover:text-rose-600">About Us</a></li>
              <li><a href="/rooms" className="hover:text-rose-600">Rooms</a></li>
              <li><a href="/amenities" className="hover:text-rose-600">Amenities</a></li>
              <li><a href="/contact-us" className="hover:text-rose-600">Contact Us</a></li>
              <li><a href="/booking" className="hover:text-rose-600">Booking</a></li>
              <li><a href="/gallery" className="hover:text-rose-600">Gallery</a></li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="md:w-[316px] p-10">
            <h4 className="font-semibold text-white">Payment Method</h4>
            <div className="flex gap-4 mt-4">
              <Link href="/" className="flex items-center justify-center  bg-white p-2">
                <Image src={UPI} alt="Google Play" width="135" className=" " />
              </Link>
              <Link href="/" className="flex items-center justify-center bg-white p-2">
                <Image src={PhonepayUPI} alt="Apple Store" width="135" className=""/>
              </Link>
              <Link href="/" className="flex items-center justify-center  bg-white p-2">
                <Image src={PaytmUPI} alt="Apple Store" width="135" className="" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="flex justify-between items-center mt-2 border-t border-white pt-4 p-10">
          <div className="text-white text-[14px]">
            <p>&copy; {year} Hotel Sudarshan . All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-white text-[14px] hover:text-rose-600">Privacy Policy</a>
            <a href="/terms-conditions" className="text-white text-[14px] hover:text-rose-600">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
