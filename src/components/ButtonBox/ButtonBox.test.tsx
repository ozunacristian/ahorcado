import { describe, expect, it } from "vitest";
import ButtonBox from ".";
import { render, screen } from "@testing-library/react";

describe("ButtonBox", () => {
  it("ButtonBox should be disabled once being selected", () => {
    render(
      <ButtonBox
        setPlayerInput={(input) => {
          console.log(input);
        }}
        tries={1}
      />
    );

    const buttonJ = screen.getByTestId("keyboardButton-J");

    buttonJ.click();

    screen.debug();

    // should have disabled after click
    expect(buttonJ.getAttribute("disabled")).toBe("");
  });
});
