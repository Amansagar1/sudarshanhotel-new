import React from "react";
import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ room }) => (
  <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col group relative">
    {/* Image */}
    <Image
      src={room.image || "/images/img1.jpg"}
      alt={room.title}
      width={500}
      height={300}
      className="w-full h-[200px] object-cover"
    />
    
    {/* Room details */}
    <div className="p-4">
      {/* Title and Availability Status */}
      <div className="text-xl font-semibold flex justify-between items-center">
        {room.title}
        <span
          className={`text-xs px-2 py-1 rounded-full ${room.available ? "bg-green-500" : "bg-red-500"} text-white`}
        >
          {room.available ? "Available" : "Booked"}
        </span>
      </div>

      {/* Rating */}
      <p className="text-yellow-500 mt-2">{Array(room.rating).fill("★").join("")}</p>

      {/* Always Visible Room Details */}
      <div className="text-sm flex flex-col gap-2 mt-2">
        {/* Description */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Description :</h1>
          <h1>{room.description}</h1>
        </div>

        {/* Size */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Size :</h1>
          <h1>{`${room.size} sq ft`}</h1>
        </div>

        {/* Max Occupancy */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Max Occupancy :</h1>
          <h1>{room.maxOccupancy}</h1>
        </div>

        {/* Bed Type */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Bed Type :</h1>
          <h1>{room.bedType}</h1>
        </div>

        {/* Features */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Features :</h1>
          <h1>{room.features.join(", ")}</h1>
        </div>
      </div>

      {/* Hover Reveal - Full Details */}
      <div className="absolute bottom-16 left-0 bg-black bg-opacity-80 w-full p-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="font-bold pb-5">
          Title: <h1 className="text-[14px]">{room.title}</h1>
        </div>
        <div className="font-bold pb-5">
          Description: <h1 className="text-[14px]">{room.description}</h1>
        </div>
        <h4 className="font-semibold">Room Details:</h4>
        <ul className="list-disc ml-5 text-white">
          <li>Size: {room.size} sq ft</li>
          <li>Maximum Occupancy: {room.maxOccupancy}</li>
          <li>Bed Type: {room.bedType}</li>
          <li>Features: {room.features.join(", ")}</li>
        </ul>
      </div>

      {/* View Room Button */}
      <Link
        href={`/rooms/${room._id}`}
        className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        View Room
      </Link>
    </div>
  </div>
);

export default RoomCard;
