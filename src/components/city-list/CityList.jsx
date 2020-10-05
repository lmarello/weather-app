import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../city-info";
import Weather from "../weather";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const renderCity = (onClickCity) => (cityInfo) => {
    const { city, country } = cityInfo;
    return (
        <ListItem button key={city} onClick={onClickCity}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={8} sm={9} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={4} sm={3} xs={12}>
                    <Weather temperature={11} state="sunny" />
                </Grid>
            </Grid>
        </ListItem>
    );
};

const CityList = ({ cities, onClickCity }) => {
    return (
        <List>{cities.map((cityInfo) => renderCity(onClickCity)(cityInfo))}</List>
    );
};

CityList.propTypes = {
    cities: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }),
    onClickCity: PropTypes.func.isRequired,
};

export default CityList;
