import React from "react";
import { render, screen } from "@testing-library/react";
import CityInfo from "./CityInfo"; // SUT: Subject under testing (objeto del testeo)

test("CityInfo rendering", async () => {
    const mock = {
        city: "Buenos Aires",
        country: "Argentina",
    };

    render(<CityInfo city={mock.city} country={mock.country} />);
    const city = screen.getByTestId("dt-city-info-city");
    const country = screen.getByTestId("dt-city-info-country");

    expect(city.innerHTML).toBe(`${mock.city}, `);
    expect(country.innerHTML).toBe(mock.country);
});
