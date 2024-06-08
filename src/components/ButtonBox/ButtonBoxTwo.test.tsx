import { describe, expect, it } from "vitest";
import ButtonBox from ".";
import { render, screen, fireEvent } from "@testing-library/react";


describe("ButtonBox", () => {
  // keyboardtest
  it("All buttons should be disabled when game over", () => {
    render(
      <ButtonBox
        setPlayerInput={(input) => {
          console.log(input);
        }}
        tries={0}
      />
    );
    screen.debug();
    const buttons = screen.getAllByRole("button");

    buttons.forEach(button => {
      // we clic
      fireEvent.click(button);

      // We make sure that the button is deactivated.
      expect(button.getAttribute("disabled")).toBe("");
    });
  });
});

