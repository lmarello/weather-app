import React from 'react'
import ForecastChart from './ForecastChart'

export default {
    title: "ForecastChart",
    component: ForecastChart,
};

const mock = [
    {weekday: 'Lun', min: 11, max: 24},
    {weekday: 'Mar', min: 14, max: 21},
    {weekday: 'Mie', min: 8, max: 19},
    {weekday: 'Jue', min: 10, max: 21},
    {weekday: 'Vie', min: 20, max: 29},
    {weekday: 'Sab', min: 25, max: 39},
]


export const ForecastChartExample = () => <ForecastChart data={mock} />;
