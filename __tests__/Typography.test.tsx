import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Typography } from "../src";

describe("Typography Test", () => {
  test("렌더링 되나요?", () => {
    render(<Typography>안녕</Typography>);
    expect(screen.getByText("안녕")).toBeTruthy();
  });

  test("색상이 잘 바뀌나요?", () => {
    render(<Typography color="#fff">안녕</Typography>);
    expect(screen.getByText("안녕")).toHaveStyle({ color: "#fff" });
  });
});
