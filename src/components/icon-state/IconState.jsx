import React from "react";
import PropTypes from "prop-types";
import {
    WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain,
    WiNa,
} from "react-icons/wi";
import { IconContext } from "react-icons";

export const states = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
};

const renderState = (state) => {
    const Icon = states[state];
    if (Icon) return <Icon data-testid='dt-icon-state' name={`${state}-icon`}/>;
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
