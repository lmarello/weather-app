import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ForecastItem from "../forecast-item";
import { validStates } from "../icon-state";

const renderForecast = (forecast) => {
    const { weekDay, hour, state, temperature } = forecast;
    return (
        <Grid item key={`${weekDay}-${hour}`}>
            <ForecastItem
                weekDay={weekDay}
                hour={hour}
                state={state}
                temperature={temperature}
            />
        </Grid>
    );
};

const Forecast = ({ forecastItems }) => {
    return (
        <Grid container justify="space-around" alignItems="center" xs={12}>
            {forecastItems.map((forecast) => renderForecast(forecast))}
        </Grid>
    );
};

Forecast.propTypes = {
    forecastItems: PropTypes.arrayOf(
        PropTypes.shape({
            weekDay: PropTypes.string.isRequired,
            hour: PropTypes.number.isRequired,
            state: PropTypes.oneOf(validStates).isRequired,
            temperature: PropTypes.number.isRequired,
        })
    ),
};

export default Forecast;
