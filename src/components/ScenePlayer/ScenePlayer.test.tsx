import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ScenePlayer from ".";

describe("ScenePlayer", () => {
    it("ScenePlayer should show a message when the tries reach 0", () => {
        render(
            <ScenePlayer
                tries={0}
            />
        );

        const msg_h2 = screen.getByTestId("h2-ScenePlayer");

        // no se si necesito esto
        screen.debug();

        expect(msg_h2.textContent).toBe("You are dead");
    });
});

