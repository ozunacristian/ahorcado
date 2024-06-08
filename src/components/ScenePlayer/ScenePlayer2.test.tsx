import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ScenePlayer from ".";

describe("ScenePlayer", () => {
    it("should show a part of the scene for each attempt", () => {
        render(
            <ScenePlayer
                tries={8}
            />
        );

        expect(screen.getByTestId("stickVertical").style.backgroundColor).toBe("#000000"); 

        
    });
});

