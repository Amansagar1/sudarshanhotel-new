"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import BrandLogo from "../Assets/WhatsApp_Image_2024-11-05_at_21.13.36_d4644e5a-removebg-preview.png";
import navLinks from "./Navbar.json";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const [navbarBg, setNavbarBg] = useState('bg-transparent'); // Default background color

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('bg-[#000000e7]'); // Change to black background on scroll
      } else {
        setNavbarBg('bg-transparent'); // Transparent on top of the page
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu visibility on click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      {/* Navbar with conditional background color */}
      <div className="w-full mx-auto py-2 md:py-1 bg-black md:bg-transparent"> {/* Black for mobile, transparent for desktop */}
        <div className="flex items-center justify-between w-[90%] mx-auto">

          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src={BrandLogo}
              width={160} // Fixed size
              height={160} // Fixed size
              alt="brand logo"
            />
          </div>

          {/* Links Section (Desktop) */}
          <div className="hidden md:flex gap-8 items-center text-white">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span className="hover:text-yellow-500 transition duration-300">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Booking Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link href="/bookingonline">
              <button className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition duration-300">
                BOOKING ONLINE
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {menuOpen ? "✕" : "☰"} {/* Change icon based on menu state */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown on Mobile) */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white w-full transition-all duration-300">
          <div className="flex flex-col items-center py-2 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={toggleMenu}>
                <span className="hover:text-yellow-500 transition duration-300">{link.label}</span>
              </Link>
            ))}
            <Link href="/bookingonline">
              <button className="w-full px-6 py-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition duration-300">
                BOOKING ONLINE
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
