import React from "react";
import ForecastItem from "./ForecastItem";
import { render, screen } from "@testing-library/react";

test("ForecastItem rendering", async () => {
    const mock = {
        weekDay: "Lunes",
        hour: 16,
        state: 'rain',
        temperature: 28
    }

    render(
        <ForecastItem
            weekDay={mock.weekDay}
            hour={mock.hour}
            state={mock.state}
            temperature={mock.temperature}
        />
    );

    const weekDay = screen.getByTestId("dt-forecast-item-week-day");
    const hour = screen.getByTestId("dt-forecast-item-hour");
    const iconState = screen.getByTestId("dt-icon-state");
    const temperature = screen.getByTestId("dt-forecast-item-temperature");

    expect(weekDay.innerHTML).toBe(mock.weekDay);
    expect(hour.innerHTML).toBe(`${mock.hour} hs.`);
    expect(iconState.getAttribute("name")).toBe(`${mock.state}-icon`);
    expect(temperature.innerHTML).toBe(`${mock.temperature} °C`);
});
