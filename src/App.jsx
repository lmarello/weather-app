import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={WelcomePage} />
                <Route path="/main" exact component={MainPage} />
                <Route path="/city" component={CityPage} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
