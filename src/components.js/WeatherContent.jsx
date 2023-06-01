import React from "react";
import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";

const WeatherContent = () => {
  const [location, setLocation] = useState("");
  const [weatherData,setWeatherData] = useState(null)

  // api key
  const API_KEY = "3d8a1806ddbf90f379003774c12378a9"; 

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      );
    console.log(response);
    setWeatherData(response.data)
      
    } catch (error) {
      console.log(error);
    }
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

   const getWeatherIcon = (icon) => {
     return `http://openweathermap.org/img/w/${icon}.png`;
   };

  return (
    <section>
      {/* search content */}
      <div className="w-[90%] mx-auto md:w-[70%] lg:w-[50%]">
        <h1 className="text-3xl mt-6 text-white font-semi-bold leading-[1.3] md:text-5xl">
          Let's check the weather now in{" "}
          <span className="font-bold underline underline-offset-4 inline-block">
            {location ? location : <p>...</p>}
          </span>
        </h1>
        {/* search container*/}
        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className="mt-12 flex flex-col md:flex-row justify-between md:space-x-12">
            <div className="flex bg-white items-center p-4 rounded-sm flex-grow">
              <GoLocation size={22} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-4 focus:outline-none text-black text-sm font-semibold tracking-wide"
                placeholder="Send me the location"
              />
              {/* close button */}
              <div onClick={() => setLocation("")} className="p-2 transition-all duration-100 ease-in-out cursor-pointer hover:p-2 rounded-full hover:bg-yellow-300">
                <MdOutlineClose className="text-black hover:text-white"/>
              </div>
            </div>
            <button
              className="mt-8 border-2 border-gray shadow-lg rounded-lg text-center text-white py-4 font-bold hover:scale-105 transition-all ease-in-out duration-100 cursor-pointer"
              type="submit"
            >
              <p className="text-lg uppercase tracking-wide font-semibold md:px-5">
                get weather
              </p>
            </button>
          </div>
        </form>
      </div>

      {/* weather content */}
      <div className="w-[90%] mx-auto">
        {weatherData && (
          <div className="mt-12 pl-16 border border-transparent rounded-lg shadow-xl text-white flex flex-col p-10 md:flex-row justify-between md:items-center mb-6">
            <img
              src={getWeatherIcon(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
              className="w-28 h-28 animate-bounce"
            />
            <h2 className="py-2 font-semibold text-sm tracking-wide md:text-sm">Location : {weatherData.name}</h2>
            <p className="py-2 font-semibold text-sm tracking-wide">Temperature: {weatherData.main.temp} K</p>
            <p className="py-2 font-semibold text-sm tracking-wide">Humidity: {weatherData.main.humidity} %</p>
            <p className="py-2 font-semibold text-sm tracking-wide">Weather: {weatherData.weather[0].main}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeatherContent;
