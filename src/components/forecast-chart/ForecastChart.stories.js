import React from 'react'
import ForecastChart from './ForecastChart'

export default {
    title: "ForecastChart",
    component: ForecastChart,
};

const mock = [
    {dayHour: 'Lun 12', min: 11, max: 24},
    {dayHour: 'Mar 12', min: 14, max: 21},
    {dayHour: 'Mie 12', min: 8, max: 19},
    {dayHour: 'Jue 12', min: 10, max: 21},
    {dayHour: 'Vie 12', min: 20, max: 29},
    {dayHour: 'Sab 12', min: 25, max: 39},
]


export const ForecastChartExample = () => <ForecastChart data={mock} />;
