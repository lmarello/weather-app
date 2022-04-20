import Image from "next/image";
import React from "react";

const WeatherIcon = ({ status, size = 24 }) => {
  const imageMapper = {
    Snow: "snow",
    Sleet: "sleet",
    Hail: "hail",
    Thunderstorm: "thunderstorm",
    "Heavy Rain": "heavy_rain",
    "Light Rain": "light_rain",
    Showers: "showers",
    "Heavy Cloud": "cloud",
    "Light Cloud": "day_cloud",
    Clear: "sunny",
  };

  // night_cloud
  // moon

  const image = imageMapper[status];

  return (
    <Image
      width={size}
      height={size}
      src={`/images/forecast/${image}.svg`}
      alt={status}
    />
  );
};

export default WeatherIcon;
