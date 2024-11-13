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

  