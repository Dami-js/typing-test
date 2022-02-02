import React from "react";
import { render, screen } from "@testing-library/react";
import StartScreen from ".";
import AppProvider from "../../providers/AppProvider";

test("renders learn react link", () => {
  render(
    <AppProvider>
      <StartScreen />
    </AppProvider>
  );
  const startButton = screen.getByText(/Start/i);
  expect(startButton).toBeInTheDocument();
});
