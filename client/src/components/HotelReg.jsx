import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2 w-full">
        {/* Left Image */}
        <img
          className="w-1/2 rounded-l-xl hidden md:block object-cover"
          src={assets.regImage}
          alt="reg-img"
        />

        {/* Form Section */}
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10 w-full">
          {/* Close Icon */}
          <img
            className="absolute top-4 right-4 w-4 h-4 cursor-pointer"
            src={assets.closeIcon}
            alt="close-icon"
          />

          <p className="text-2xl font-semibold mt-6 mb-4">
            Register Your Hotel
          </p>

          {/* Hotel Name */}
          <div className="w-full mt-2">
            <label className="font-medium text-gray-500" htmlFor="name">
              Hotel Name
            </label>
            <input
              id="name"
              required
              className="w-full border border-gray-200 rounded-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              type="text"
              placeholder="Type Here"
            />
          </div>

          {/* Phone */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500" htmlFor="contact">
              Phone
            </label>
            <input
              id="contact"
              required
              className="w-full border border-gray-200 rounded-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              type="text"
              placeholder="Type Here"
            />
          </div>

          {/* Address */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              required
              className="w-full border border-gray-200 rounded-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              type="text"
              placeholder="Type Here"
            />
          </div>

          {/* City Dropdown */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500" htmlFor="city">
              City
            </label>
            <select
              required
              id="city"
              className="w-full border border-gray-200 rounded-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mt-6 px-6 py-2 rounded-full w-full"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
