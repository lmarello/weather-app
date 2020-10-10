import React from "react";
import CityList from "../components/city-list";
import { useHistory } from "react-router-dom";
import AppFrame from "../components/app-frame";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const mockCities = [
    { city: "Buenos Aires", country: "Argentina", countryCode:'AR' },
    { city: "Cartagena", country: "Colombia", countryCode:'CO' },
    { city: "Madrid", country: "España", countryCode:'ES' },
    { city: "Tokio", country: "Japón", countryCode:'JP' },
    { city: "Nunavut", country: "Canadá", countryCode:'CA' },
];

const MainPage = () => {
    const history = useHistory();
    const handleOnClick = () => {
        history.push("/city");
    };

    return (
        <Grid container>
            <AppFrame>
                <h2>Ciudades</h2>
                <Paper elevation={3}>
                    <CityList cities={mockCities} onClickCity={handleOnClick} />
                </Paper>
            </AppFrame>
        </Grid>
    );
};

export default MainPage;
