import React from "react";
import PropTypes from "prop-types";
import {
    WiThunderstorm,
    WiShowers,
    WiRain,
    WiSnow,
    WiFog,
    WiDaySunny,
    WiCloudy,
    WiNa,
} from "react-icons/wi";
import { IconContext } from "react-icons";

export const states = {
    thunderstorm: WiThunderstorm,
    drizzle: WiShowers,
    rain: WiRain,
    snow: WiSnow,
    atmosphere: WiFog,
    clear: WiDaySunny,
    cloud: WiCloudy,
    clouds: WiCloudy,
    na: WiNa
};

const renderState = (state) => {
    const Icon = states[state];
    if (Icon)
        return <Icon data-testid="dt-icon-state" name={`${state}-icon`} />;
    return <WiNa />;
};

export const validStates = Object.keys(states);

const IconState = ({ state, size }) => {
    return (
        <IconContext.Provider value={{ size }}>
            {renderState(state)}
        </IconContext.Provider>
    );
};

IconState.propTypes = {
    size: PropTypes.string,
    state: PropTypes.oneOf(validStates).isRequired,
};

IconState.defaultProps = {
    size: "3em",
};

export default IconState;
