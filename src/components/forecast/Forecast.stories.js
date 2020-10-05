import React from 'react';
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast,
};

const mockForecast = [
    { weekDay: "Lunes", hour: 12, state: "cloud", temperature: 24 },
    { weekDay: "Martes", hour: 12, state: "cloudy", temperature: 20 },
    { weekDay: "Miércoles", hour: 12, state: "fog", temperature: 19 },
    { weekDay: "Jueves", hour: 12, state: "sunny", temperature: 27 },
    { weekDay: "Viernes", hour: 12, state: "rain", temperature: 21 },
];

export const ForecastExample = () => <Forecast forecastItems={mockForecast} />;
