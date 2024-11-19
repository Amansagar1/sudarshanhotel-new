import axios from "axios";
import EndPoints from "./APIEndpoints";


export const getAllRooms = () => {
    return axios
      .get(EndPoints.GET_ROOMS()) // Make sure this endpoint URL is correct
      .then((response) => {
        console.log("API Response:", response.data); // Check what data is being returned
        return { result: response.data }; // Ensure the data returned is in the expected format
      })
      .catch((error) => {
        console.error("Error fetching rooms data:", error);
        return { result: null }; // Return null in case of an error
      });
  };

  export const getAllRoomsDetails = () => {
    return axios
      .get(EndPoints.GET_ROOMSDETAILS()) // Assuming EndPoints is correctly defined
      .then((response) => {
        console.log("API Response:", response.data); // Check response data
        return { result: response.data }; // Ensure the data structure is correct
      })
      .catch((error) => {
        console.error("Error fetching rooms data:", error);
        return { result: null };
      });
  };

  export const getRoomDetailsById = (id) => {
    return axios
      .get(`${EndPoints.GET_ROOMSDETAILS()}/${id}`) // Assuming the endpoint allows fetching by ID
      .then((response) => {
        console.log("API Response:", response.data); // Check response data
        return { result: response.data }; // Ensure the data structure is correct
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
        return { result: null };
      });
  };


// ManagementAPIController.js
// Assuming you have a Webservices/ManagementAPIController.js file

export const roomBooking = async (bookingDetails) => {
  try {
    const response = await fetch(EndPoints.BOOKING_ROOMS(), { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingDetails),
    });

    if (!response.ok) {
      throw new Error('Booking failed');
    }

    const result = await response.json(); // Assuming the backend returns JSON response
    return result;
  } catch (error) {
    console.error('Error in roomBooking:', error);
    throw error; // Rethrow error so it can be caught in handleSubmit
  }
};