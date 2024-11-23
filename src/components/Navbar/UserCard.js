import React from "react";
import Link from "next/link";
import { useSession } from 'next-auth/react'; // Importing useSession to check session status

const UserCard = ({ user, isOpen }) => {
  // Function to generate initials from user name
  const getInitials = (name) => {
    const nameArray = name.split(' ');
    const firstNameInitial = nameArray[0]?.charAt(0).toUpperCase();
    const lastNameInitial = nameArray.length > 1 ? nameArray[nameArray.length - 1]?.charAt(0).toUpperCase() : '';
    return `${firstNameInitial}${lastNameInitial}`;
  };

  // Get session data to check if user is logged in
  const { data: session } = useSession();

  return (
    <div className={`bg-white shadow-lg absolute z-10 rounded-lg p-4 w-[280px] transition-all duration-300 ${isOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="flex justify-center items-center mb-4">
        {/* Profile Image Section */}
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 shadow-lg"
          />
        ) : (
          <div className="w-24 h-24 flex justify-center items-center rounded-full bg-gray-300 border-4 border-gray-300">
            <span className="text-white text-lg font-semibold">{getInitials(user.name || 'Unknown User')}</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-center text-gray-800">{user.name || 'Unknown User'}</h3>
      <p className="text-sm text-center text-gray-600">{user.email || 'No email provided'}</p>
      
      {/* Additional Information */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {user.jobTitle && <p>{user.jobTitle}</p>}
        {user.phone && <p>{user.phone}</p>}
      </div>

      {/* Conditional Button Section */}
      <div className="mt-4 flex justify-center">
        {session ? (
          // Show Book Now button if user is logged in
          <Link href="/rooms" passHref>
            <button className="px-6 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition duration-200">
              Book Now
            </button>
          </Link>
        ) : (
          // Show Login button if user is not logged in
          <Link href="/login" passHref>
            <button className="px-6 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition duration-200">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserCard;
