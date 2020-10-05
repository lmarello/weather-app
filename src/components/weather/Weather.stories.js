import React from "react";
import Weather from "./Weather";

export default {
    title: "Weather",
    component: Weather,
};

export const WeatherExample = () => <Weather temperature={12} state="rain" />;
