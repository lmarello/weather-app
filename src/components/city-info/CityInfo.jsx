import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";

const CityInfo = ({ city, country }) => {
    return (
        <>
            <Typography
                display="inline"
                variant="h5"
                data-testid="dt-city-info-city"
            >
                {city},{" "}
            </Typography>
            <Typography
                display="inline"
                variant="h6"
                data-testid="dt-city-info-country"
            >
                {country}
            </Typography>
        </>
    );
};

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};

CityInfo.defaultProps = {
    city: "N/A",
    country: "N/A",
};

export default CityInfo;
