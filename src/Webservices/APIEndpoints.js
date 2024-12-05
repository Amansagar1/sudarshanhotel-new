
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;



const EndPoints = {


    GET_ROOMSDETAILS: () => BASE_URL + `/roomdetails`,

    BOOKING_ROOMS: () => BASE_URL + `/book`,

    POST_ROOMS: () => BASE_URL + `/rooms`,

    GET_ROOMID: (_id) => BASE_URL + `/rooms/:${_id} `,

};

Object.freeze(EndPoints);

export default EndPoints;
