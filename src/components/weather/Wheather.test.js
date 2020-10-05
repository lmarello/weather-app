import React from "react";
import Weather from "./Weather";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test("Weather rendering", async () => {
  const mockTemperature = 10;
  render(<Weather temperature={mockTemperature} state='cloud' />);

  const temperature = screen.getByTestId("dt-weather-tempertature");

  expect(temperature.innerHTML).toBe(`${mockTemperature} °C`);
});
 