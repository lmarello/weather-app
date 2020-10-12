import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../city-info";
import Weather from "../weather";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useCityList from "../../hooks/use-city-list";
import { getCityKey } from "../../utils";

const renderCity = (onClickCity) => (cityInfo, weather) => {
    const { city, country, countryCode } = cityInfo;

    return (
        <ListItem
            button
            key={city}
            onClick={() => onClickCity(city, countryCode)}
        >
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
    const [weatherInfo] = useCityList(cities);

    return (
        <List>
            {cities.map((cityInfo) => {
                const { city, countryCode } = cityInfo;
                const cityKey = getCityKey(city, countryCode);
                return renderCity(onClickCity)(cityInfo, weatherInfo[cityKey]);
            })}
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
