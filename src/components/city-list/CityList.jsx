import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CityInfo from "../city-info";
import Weather from "../weather";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { weatherApi } from "../../services/weather-api";

const getCityKey = (city, countryCode) => `${city}_${countryCode}`;

const renderCity = (onClickCity) => (cityInfo, weather) => {
    const { city, country, countryCode } = cityInfo;

    return (
        <ListItem button key={city} onClick={()=> onClickCity(city, countryCode)}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={8} sm={9} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={4} sm={3} xs={12}>
                    {weather && (
                        <Weather
                            temperature={weather.temperature}
                            state={weather.state}
                        />
                    )}
                </Grid>
            </Grid>
        </ListItem>
    );
};

const CityList = ({ cities, onClickCity }) => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [error, setError] = useState(null); // eslint-disable-line

    useEffect(() => {
        const setWeather = async (city, countryCode, cityKey) => {
            try {
                const response = await weatherApi.getWeather(city, countryCode, cityKey);
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
    }, [cities, weatherInfo]);

    return (
        <List>
            {cities.map((cityInfo) =>
                renderCity(onClickCity)(
                    cityInfo,
                    weatherInfo[`${cityInfo.city}_${cityInfo.countryCode}`]
                )
            )}
        </List>
    );
};

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
};

export default CityList;
