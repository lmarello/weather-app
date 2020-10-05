import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconState, { validStates } from "../icon-state";

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
    return (
        <>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography data-testid="dt-forecast-item-week-day">{weekDay}</Typography>
                </Grid>
                <Grid item>
                    <Typography data-testid="dt-forecast-item-hour">{hour} hs.</Typography>
                </Grid>
                <Grid item>
                    <IconState state={state}/>
                </Grid>
                <Grid item>
                    <Typography data-testid="dt-forecast-item-temperature">{temperature} °C</Typography>
                </Grid>
            </Grid>
        </>
    );
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validStates).isRequired,
    temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
