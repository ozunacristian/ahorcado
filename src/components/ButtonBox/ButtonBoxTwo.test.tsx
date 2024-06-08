import { describe, expect, it } from "vitest";
import ButtonBox from ".";
import { render, screen, fireEvent } from "@testing-library/react";


describe("ButtonBox", () => {
  // prueba teclado
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

    buttons.forEach(button => { //se recorre todas las teclas
      // Se intenta hacer clic
      fireEvent.click(button);

      // Nos aseguramos de que esté desactivado
      expect(button.getAttribute("disabled")).toBe("");
    });
  });
});

