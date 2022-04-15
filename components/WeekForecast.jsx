import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeekForecast = ({ weekForecast }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay,
      },
    }),
  };

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-glass-card text-white h-[150px] w-[300px] text-left mx-auto mt-10 p-4"
    >
      <AnimatePresence>
        {weekForecast.map((forecast, index) => {
          const { status, minTemp, maxTemp, weekDay } = forecast;

          return (
            <motion.div
              custom={{ delay: (index + 1) * 0.1 }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              layoutId={weekDay}
              key={index}
              className="flex justify-between text-sm py-[2px] text-gray-500"
            >
              <div className="w-[10px]">{weekDay}</div>
              <div className="w-[20px] text-center">
                <WeatherIcon size={12} status={status} />
              </div>
              <div>{`H:${maxTemp}°C - L:${minTemp}°C`}</div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default WeekForecast;
