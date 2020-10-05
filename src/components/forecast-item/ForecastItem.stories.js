import React from "react";
import ForecastItem from "./ForecastItem";

export default {
    title: "ForecastItem",
    component: ForecastItem,
};

export const LunesSoleado = () => (
    <ForecastItem weekDay="Lunes" hour={12} state="sunny" temperature={27} />
);

export const MartesNublado = () => (
    <ForecastItem weekDay="Martes" hour={12} state="cloudy" temperature={21} />
);

export const MiercolesLluvioso = () => (
    <ForecastItem weekDay="Miércoles" hour={12} state="rain" temperature={20} />
);
