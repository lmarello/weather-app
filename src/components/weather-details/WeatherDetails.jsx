import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { IconContext } from "react-icons";

const WeatherDetails = ({ humidity, wind }) => {
    return (
        <Grid>
            <Grid container>
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <WiHumidity />
                </IconContext.Provider>
                <Typography
                    display="inline"
                    data-testid="dt-weather-details-humidity"
                >
                    {humidity} %
                </Typography>
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <WiStrongWind />
                </IconContext.Provider>
                <Typography display="inline" data-testid="dt-weather-details-wind">
                    {wind} km/h
                </Typography>
            </Grid>
        </Grid>
    );
};

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
