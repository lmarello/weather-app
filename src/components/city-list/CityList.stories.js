import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";

export default {
    title: "CityList",
    component: CityList,
};

const mockCities = [
    { city: "Buenos Aires", country: "Argentina" },
    { city: "San Pablo", country: "Brasil" },
    { city: "Cartagena", country: "Colombia" },
    { city: "Madrid", country: "España" },
];

export const CityListExample = () => <CityList cities={mockCities} onClickCity={action("Click on City")} />;
