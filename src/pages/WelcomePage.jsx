import React from "react";
import WelcomeScreen from "../components/welcome-screen";
import { WiSunrise } from "react-icons/wi";
import { IconContext } from "react-icons";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";

const WelcomePage = (props) => {
    return (
        <WelcomeScreen>
            <Grid
                container
                className="full"
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid>
                    <Grid container justify="center" alignItems="center">
                        <IconContext.Provider value={{ size: "4em" }}>
                            <WiSunrise />
                        </IconContext.Provider>
                        <Typography variant="h3" color="inherit">
                            Weather App
                        </Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <Link
                            component={LinkRouter}
                            to="/main"
                            color="inherit"
                            aria-label="menu"
                            underline="none"
                        >
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </WelcomeScreen>
    );
};

export default WelcomePage;
