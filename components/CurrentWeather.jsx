import React from "react";
import LocationTitle from "./LocationTitle";
import WeatherIcon from "./WeatherIcon";
import { motion } from "framer-motion";

const CurrentWeather = ({
  city,
  country,
  status,
  date,
  currentTemp,
  minTemp,
  maxTemp,
}) => {
  return (
    <>
      <LocationTitle date={date} city={city} country={country} />

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="my-8 opacity-[0.8]"
      >
        <WeatherIcon size={90} status={status} />
        <h1 className="text-2xl">{status}</h1>
        <h1 className="text-6xl">{currentTemp}°C</h1>
        <h1 className="text-sm mt-2">{`H: ${maxTemp}°C - L: ${minTemp}°C`}</h1>
      </motion.div>
    </>
  );
};

export default CurrentWeather;
