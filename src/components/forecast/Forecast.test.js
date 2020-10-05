import React from "react";
import Forecast from "./Forecast";
import { render, screen } from "@testing-library/react";

test("Forecast rendering", async () => {
    const mock = [
        { weekDay: "Lunes", hour: 12, state: "cloud", temperature: 24 },
        { weekDay: "Martes", hour: 12, state: "cloudy", temperature: 20 },
    ];

    render(
        <Forecast forecastItems={mock}/>
    );

    const weekDays = screen.getAllByTestId("dt-forecast-item-week-day");
    const hours = screen.getAllByTestId("dt-forecast-item-hour");
    const iconStates = screen.getAllByTestId("dt-icon-state");
    const temperatures = screen.getAllByTestId("dt-forecast-item-temperature");

    expect(weekDays[0].innerHTML).toBe(mock[0].weekDay);
    expect(hours[0].innerHTML).toBe(`${mock[0].hour} hs.`);
    expect(iconStates[0].getAttribute("name")).toBe(`${mock[0].state}-icon`);
    expect(temperatures[0].innerHTML).toBe(`${mock[0].temperature} °C`);
    
    expect(weekDays[1].innerHTML).toBe(mock[1].weekDay);
    expect(hours[1].innerHTML).toBe(`${mock[1].hour} hs.`);
    expect(iconStates[1].getAttribute("name")).toBe(`${mock[1].state}-icon`);
    expect(temperatures[1].innerHTML).toBe(`${mock[1].temperature} °C`);
});
