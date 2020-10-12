import { useState, useEffect } from "react";
import { weatherApi } from "../services/weather-api";
import { getCityKey } from "../utils";

export const useCityList = (cities) => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode, cityKey) => {
            try {
                const response = await weatherApi.getWeather(
                    city,
                    countryCode,
                    cityKey
                );
                setWeatherInfo((weatherInfo) => ({
                    ...weatherInfo,
                    [cityKey]: response,
                }));
            } catch (error) {
                setError(error.message);
                setWeatherInfo((weatherInfo) => ({
                    ...weatherInfo,
                    [cityKey]: { temperature: null, state: "na" },
                }));
            }
        };

        const weatherInfoKeys = Object.keys(weatherInfo);

        cities.forEach(({ city, countryCode }) => {
            const cityKey = getCityKey(city, countryCode);
            if (
                weatherInfoKeys.length === 0 ||
                !weatherInfo.hasOwnProperty(cityKey)
            ) {
                setWeather(city, countryCode, cityKey);
            }
        });
    }, [error, cities, weatherInfo]);

    return [weatherInfo];
};
