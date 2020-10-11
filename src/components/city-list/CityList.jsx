import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CityInfo from "../city-info";
import Weather from "../weather";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { getWeather } from "../../services/weather-api";

const renderCity = (onClickCity) => (cityInfo, weather) => {
    const { city, country } = cityInfo;

    return (
        <ListItem button key={city} onClick={onClickCity}>
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
    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode, cityKey) => {
            try {
                const response = await getWeather(city, countryCode, cityKey);
                setWeatherInfo((weatherInfo) => ({
                    ...weatherInfo,
                    [cityKey]: response,
                }));
            } catch (error) {
                setError(error.message);
                console.log(error.message);
                setWeatherInfo((weatherInfo) => ({
                    ...weatherInfo,
                    [cityKey]: { temperature: null, state: ''},
                }));
            }
        };

        const weatherInfoKeys = Object.keys(weatherInfo);

        cities.forEach(({ city, countryCode }) => {
            const cityKey = `${city}_${countryCode}`;
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
