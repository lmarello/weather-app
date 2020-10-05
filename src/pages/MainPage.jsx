import React from "react";
import CityList from "../components/city-list";
import { useHistory } from "react-router-dom";
import AppFrame from "../components/app-frame";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const mockCities = [
    { city: "Buenos Aires", country: "Argentina" },
    { city: "San Pablo", country: "Brasil" },
    { city: "Cartagena", country: "Colombia" },
    { city: "Madrid", country: "España" },
];

const MainPage = () => {
    const history = useHistory();
    const handleOnClick = () => {
        history.push("/city");
    };

    return (
        <Grid container xs={12}>
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
