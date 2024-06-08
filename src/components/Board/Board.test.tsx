import { describe, it, expect } from "vitest";
import Board from ".";
import { render, screen } from "@testing-library/react";

describe("Board Component Test", () => {
  it("should be a correct character in an specific position placed in the text", () => {
    render(<Board />);

    const keyboardButtonH = screen.getByTestId("keyboardButton-H");
    keyboardButtonH.click();

    const textGuessed = screen.getByTestId("text-guessed");
    if (textGuessed.textContent) {
      expect(textGuessed.textContent[0]).toBe("H");
    }

    screen.debug();
  });
});
