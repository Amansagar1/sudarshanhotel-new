import React from 'react';
import Link from "next/link";
import { FaWifi, FaParking, FaSpa, FaSwimmer, FaDumbbell, FaRegHandSpock, FaRegBuilding } from 'react-icons/fa';
import amenitiesData from './amenitiesData.json';  // Importing the JSON data

const Amenities = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white" style={{ backgroundImage: `url('${amenitiesData.heroSection.backgroundImage}')` }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col text-white">
          <h1 className="text-4xl font-bold">{amenitiesData.heroSection.title}</h1>
          <div className="text-lg mt-2">
            {amenitiesData.heroSection.breadcrumbs.map((breadcrumb, index) => (
              <span key={index}>
                <Link href={breadcrumb.url} passHref>
                  <span className="hover:underline">{breadcrumb.label}</span>
                </Link>
                {index < amenitiesData.heroSection.breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dining Options Section */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">{amenitiesData.diningOptionsSection.title}</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {amenitiesData.diningOptionsSection.diningOptions.map(option => (
            <div key={option.id} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
              <div className="text-sm text-gray-500 mt-4">
                <p>Timing: {option.timing}</p>
                <p>Location: {option.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurants Section */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">{amenitiesData.restaurantsSection.title}</h2>
          {amenitiesData.restaurantsSection.restaurants.map(restaurant => (
            <div key={restaurant.id} className="bg-white p-6 mb-6 shadow-lg rounded-lg flex justify-between items-center border hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{restaurant.name}</h3>
                <p className="text-gray-600">{restaurant.description}</p>
                <p className="text-sm text-gray-500 mt-2">Timing: {restaurant.timing}</p>
                <p className="text-sm text-gray-500">Open Days: {restaurant.openDays}</p>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">Find a Table</button>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">{amenitiesData.amenitiesSection.title}</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {amenitiesData.amenitiesSection.amenities.map(amenity => (
            <div key={amenity.id} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex items-center">
              <div className="mr-4">
                {/* Dynamic icon based on the 'icon' field */}
                {amenity.icon === 'wifi' && <FaWifi className="text-blue-500 text-3xl" />}
                {amenity.icon === 'parking' && <FaParking className="text-gray-500 text-3xl" />}
                {amenity.icon === 'ac_unit' && <FaRegHandSpock className="text-red-500 text-3xl" />}
                {amenity.icon === 'local_laundry_service' && <FaSpa className="text-green-500 text-3xl" />}
                {amenity.icon === 'room_service' && <FaRegBuilding className="text-yellow-500 text-3xl" />}
                {amenity.icon === 'restaurant' && <FaDumbbell className="text-orange-500 text-3xl" />}
                {amenity.icon === 'spa' && <FaSpa className="text-purple-500 text-3xl" />}
                {amenity.icon === 'pool' && <FaSwimmer className="text-teal-500 text-3xl" />}
                {amenity.icon === 'fitness_center' && <FaDumbbell className="text-red-500 text-3xl" />}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
