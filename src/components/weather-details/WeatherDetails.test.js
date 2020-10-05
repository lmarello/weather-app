import React from "react";
import WeatherDetails from "./WeatherDetails";
import { render, screen } from "@testing-library/react";

test("WeatherDetails rendering", async () => {
    const mock = {
        humidity: 70,
        wind: 20,
    };

    render(<WeatherDetails humidity={mock.humidity} wind={mock.wind} />);
    const humidity = screen.getByTestId("dt-weather-details-humidity");
    const wind = screen.getByTestId("dt-weather-details-wind");

    expect(humidity.innerHTML).toBe(`${mock.humidity} %`);
    expect(wind.innerHTML).toBe(`${mock.wind} km/h`);
});
