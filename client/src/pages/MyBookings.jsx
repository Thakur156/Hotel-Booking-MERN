import React, { useState } from "react";
import Title from "../components/Title";

import { assets, userBookingsDummyData } from "../assets/assets.js";
const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current,and upcoming 
      hotel reservation in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />
      <div className="max-w-6xl mt-8 w-ful text-gray-800">
        <div
          className="hodden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b 
        border-gray-300 font-medium text-base py-3"
        >
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/* Hotel Details */}
            <div className="flex flex-col md:flex-row">
              <img
                className="min-md:w-44 rounded shadow object-cover"
                src={booking.room.images[0]}
                alt="hotel-image"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.hotel.name}
                  <span className="font-inter ml-2 text-sm">
                    ({booking.room.roomType})
                  </span>
                </p>

                <div className="flex items-center gap-1 text-sm textgray-500 ">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{booking.hotel.address}</span>
                </div>

                <div className="flex items-center gap-1 text-sm textgray-500 ">
                  <img src={assets.guestsIcon} alt="guest-icon" />
                  <span>Guests:{booking.guests}</span>
                </div>
                <p className="text-base">Total: ${booking.totalPrice}</p>
              </div>
            </div>
            {/* Date and Timings */}
            <div></div>
            {/* payment Status */}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
