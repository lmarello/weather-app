import React from "react";
import WeatherDetails from "./WeatherDetails";

export default {
    title: 'WeatherDetails',
    component: WeatherDetails
}

export const WeatherDetailsExample = () => <WeatherDetails humidity={75} wind={34} />;

