import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";
import { WiLightning } from "react-icons/wi";
import { IconContext } from "react-icons";

const NotFound = () => {
    return (
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
                        <WiLightning />
                    </IconContext.Provider>
                </Grid>
                <Grid container justify="center" alignItems="center">
                    <Typography variant="h4" color="inherit">
                        Ops! La página no existe. [404]
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
                        Volver al menu
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NotFound;
