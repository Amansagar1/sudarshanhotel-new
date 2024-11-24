"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

import navLinks from "./Navbar.json";
import UserCard from './UserCard';
import { useSession } from 'next-auth/react'; // Importing useSession

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const [userCardOpen, setUserCardOpen] = useState(false); // User card toggle state

  const { data: session } = useSession(); // Get session data

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('bg-[#000000e7]');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserCard = () => {
    setUserCardOpen(!userCardOpen);
  };

  // Function to generate initials from user name
  const getInitials = (name, email) => {
    // If name is not available, fallback to email
    if (!name && email) {
      const emailName = email.split('@')[0];  // Extract the part before '@'
      name = emailName;
    }
  
    const nameArray = name.split(' ');
    const firstNameInitial = nameArray[0]?.charAt(0).toUpperCase();
    const lastNameInitial = nameArray.length > 1 ? nameArray[nameArray.length - 1]?.charAt(0).toUpperCase() : '';
    return `${firstNameInitial}${lastNameInitial}`;
  };

  // Check if session is available and get user data
  const user = session?.user || {
    name: 'Guest User',
    email: 'guest@example.com',
    image: '/images/img3.jpg',
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="w-full py-2 md:py-1 bg-black md:bg-transparent">
        <div className="flex items-center justify-between w-[95%] relative">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src='/images/logo.png'
              width={160}
              height={160}
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

          {/* User Profile Section */}
          <div className="flex items-center relative">
            {/* User Circle (Right side of Navbar) */}
            <div
              onClick={toggleUserCard}
              className="cursor-pointer w-12 h-12 rounded-full border-2 border-gray-400 overflow-hidden flex justify-center items-center bg-black"
            >
              {/* If user has an image, show it, else show initials */}
              {user.image ? (
    <img
      className="w-full h-full object-cover"
      src={user.image}
      alt="user"
    />
  ) : (
    <span className="text-white text-lg font-semibold">
      {getInitials(user.name, user.email)} {/* Pass both name and email */}
    </span>
  )}
            </div>

            {/* User Card Popup (Position it correctly) */}
            {userCardOpen && (
              <div className="absolute top-14 right-0 p-4 w-56 z-50 transition-all duration-300">
                <UserCard user={user} isOpen={userCardOpen} />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown on Mobile) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-200 text-black p-4 w-full transition-all duration-300 flex items-center justify-center">
          <div className="flex flex-col py-2 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={toggleMenu}>
                <span className="hover:text-yellow-500 transition duration-300">{link.label}</span>
              </Link>
            ))}
            <div onClick={toggleUserCard} className="cursor-pointer flex items-center justify-center w-full">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 border-2 border-gray-400">
                {user.image ? (
                  <img className="w-full h-full object-cover" src={user.image} alt="user" />
                ) : (
                  <span className="text-white text-lg font-semibold">
                    {getInitials(user.name)}
                  </span>
                )}
              </div>
              {userCardOpen && <UserCard user={user} isOpen={userCardOpen} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
