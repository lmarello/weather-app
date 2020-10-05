import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList";

const mockCities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "San Pablo", country: "Brasil" },
    { city: "Cartagena", country: "Colombia" },
    { city: "Madrid", country: "España" },
];

test("CityList rendering", async () => {
    const mockFn = () => {};
    const { findAllByRole } = render(
        <CityList cities={mockCities} onClickCity={mockFn} />
    );
    const items = await findAllByRole("button");

    expect(items).toHaveLength(mockCities.length);
});

test("CityList click on item", async () => {
    const handleOnClick = jest.fn();

    const { findAllByRole } = render(
        <CityList cities={mockCities} onClickCity={handleOnClick} />
    );

    const items = await findAllByRole("button");

    fireEvent.click(items[0]);

    expect(handleOnClick).toHaveBeenCalledTimes(1);
});
