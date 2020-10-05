import React from "react";
import IconState from "./IconState";
import { render, screen } from "@testing-library/react";

test("IconState rendering", async () => {
  const mockState = 'cloudy';

  render(<IconState state={mockState} />);

  const icon = screen.getByTestId("dt-icon-state");

  expect(icon.getAttribute('name')).toBe(`${mockState}-icon`);
});
 