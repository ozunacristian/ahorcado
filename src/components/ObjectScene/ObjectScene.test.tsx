import { describe, it, expect } from "vitest";
import ObjectScene from ".";
import { render, screen } from "@testing-library/react";

describe("ObjectScene", () => {
  it("should render the ObjectScene 'head' component", () => {
    render(<ObjectScene tries={1} part="head" numberConditionToShow={1} />);

    expect(Array.from(screen.getByTestId("head").classList)).toContain("head");
  });

  it("should get the correct color the ObjectScene 'leftLeg' component", () => {
    render(<ObjectScene tries={8} part="leftLeg" numberConditionToShow={8} />);

    expect(screen.getByTestId("leftLeg").getAttribute("style")).toBe(
      "background-color: #000000;"
    );
  });
});
