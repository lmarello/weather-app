import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CityInfo from "../components/city-info";
import Weather from "../components/weather";
import WeatherDetails from "../components/weather-details";
import ForecastChart from "../components/forecast-chart";
import Forecast from "../components/forecast";
import AppFrame from "../components/app-frame";

const CityPage = () => {
    const history = useHistory();
    const handleOnClick = () => {
        history.push("/main");
    };

    const city = "Buenos Aires";
    const country = "Argentina";
    const state = "rain";
    const temperature = 18;
    const humidity = 75;
    const wind = 25;
    const data = [
        { dayHour: "Lun 12", min: 11, max: 24 },
        { dayHour: "Mar 12", min: 14, max: 21 },
        { dayHour: "Mie 12", min: 8, max: 19 },
        { dayHour: "Jue 12", min: 10, max: 21 },
        { dayHour: "Vie 12", min: 20, max: 29 },
        { dayHour: "Sab 12", min: 25, max: 39 },
    ];
    const forecastItems = [
        { weekDay: "Lunes", hour: 12, state: "cloud", temperature: 24 },
        { weekDay: "Martes", hour: 12, state: "cloudy", temperature: 20 },
        { weekDay: "Miércoles", hour: 12, state: "fog", temperature: 19 },
        { weekDay: "Jueves", hour: 12, state: "sunny", temperature: 27 },
        { weekDay: "Viernes", hour: 12, state: "rain", temperature: 21 },
    ];

    return (
        <Grid container xs={12}>
            <AppFrame>
                <Grid container justify="center" ditection="column" spacing={2}>
                    <Grid item container alignItems="flex-end" xs={12}>
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid container item xs={12} justify="center" spacing={2}>
                        <Weather state={state} temperature={temperature} />
                        <WeatherDetails humidity={humidity} wind={wind} />
                    </Grid>
                    <Grid item xs={12}>
                        <ForecastChart data={data} />
                    </Grid>
                    <Grid item xs={12} spacing={2}>
                        <Forecast forecastItems={forecastItems} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        justify="center"
                        alignItems="center"
                        alignContent="center"
                    >
                        <button onClick={handleOnClick}>Volver</button>
                    </Grid>
                </Grid>
            </AppFrame>
        </Grid>
    );
};

export default CityPage;
