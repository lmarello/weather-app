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

    useEffect(() => {
        const keys = Object.keys(weatherInfo);

        if (keys.length === 0 || cities.length !== keys.length)
            getWeather(cities).then((data) => {
                const results = {};

                data.forEach((x) => {
                    results[x.cityKey] = { ...x };
                });                

                setWeatherInfo((weatherInfo) => ({
                    ...weatherInfo,
                    ...results,
                }));
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
