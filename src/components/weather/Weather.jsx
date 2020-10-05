import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid'
import IconState, { validStates } from "../icon-state";

function Weather({ temperature, state }) {
    return (
        <Grid container item justify='center' alignItems='center' spacing={1}>
            <IconState state={state} size='3em' />
            <Typography
                display="inline"
                variant="h5"
                data-testid="dt-weather-tempertature"
            >
                {temperature} °C
            </Typography>
        </Grid>
    );
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validStates).isRequired,
};

export default Weather;
