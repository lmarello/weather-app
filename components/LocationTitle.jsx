import React from "react";
import { motion } from "framer-motion";

const LocationTitle = ({ date, city, country }) => {
  return (
    <>
      <span>{date}</span>
      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-semibold"
      >{`${city}, ${country}`}</motion.h1>
    </>
  );
};

export default LocationTitle;
