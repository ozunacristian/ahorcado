import { describe, expect, it } from "vitest";

import { sum } from "./sum";

describe("Sum function", () => {
  it("should be a function", () => {
    expect(typeof sum).toBe("function");
  });

  it("should return the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
