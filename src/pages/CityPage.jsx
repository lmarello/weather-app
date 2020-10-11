import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { weatherApi } from "../services/weather-api";
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

    const [data, setData] = useState([]);
    const [forecastItems, setForecastItems] = useState([]);
    const { city, countryCode } = useParams();

    useEffect(() => {
        const getForecast = async () => {
            try {
                const response = await weatherApi.getForecast(
                    city,
                    countryCode
                );

                debugger
                
                setData(response.data);
                setForecastItems(response.forecast);
                
            } catch (error) {
                console.log(error);
            }
        };

        getForecast();


    }, [city, countryCode]);

    const country = "Argentina";
    const state = "rain";
    const temperature = 18;
    const humidity = 75;
    const wind = 25;

    return (
        <Grid container>
            <AppFrame>
                <Grid
                    container
                    item
                    justify="center"
                    ditection="column"
                    spacing={4}
                >
                    <Grid container item xs={12} justify="center" spacing={1}>
                        <CityInfo city={city} country={country} />
                        <Weather state={state} temperature={temperature} />
                        <WeatherDetails humidity={humidity} wind={wind} />
                    </Grid>
                    <Grid item xs={12}>
                        <ForecastChart data={data} />
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Forecast forecastItems={forecastItems} />
                    </Grid>
                    <Grid
                        container
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
