import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { weatherApi } from "../services/weather-api";

export const useCityPage = () => {
    const [chartData, setChartData] = useState([]);
    const [forecastItems, setForecastItems] = useState([]);
    const { city, countryCode } = useParams();

    useEffect(() => {
        const getForecast = async () => {
            try {
                const response = await weatherApi.getForecast(
                    city,
                    countryCode
                );

                debugger;

                setChartData(response.data);
                setForecastItems(response.forecast);
            } catch (error) {
                console.log(error);
            }
        };

        getForecast();
    }, [city, countryCode]);

    return [city, chartData, forecastItems];
};
