import { expect, describe, it } from "bun:test";
import loopIndex from "./loop-index";

describe("loopIndex", () => {
  it("should return 0 when given an empty array", () => {
    expect(loopIndex([], 0)).toBe(0);
  });

  it("should return 0 when given an index of 0", () => {
    expect(loopIndex(["a", "b", "c"], 0)).toBe(0);
  });

  it("should return 1 when given an index of 3 and an array of length 2", () => {
    expect(loopIndex(["a", "b"], 3)).toBe(1);
  });

  it("should return 2 when given an index of -1 and an array of length 3", () => {
    expect(loopIndex(["a", "b", "c"], -1)).toBe(2);
  });

  it("should return 2 when given an index of -4 and an array of length 3", () => {
    expect(loopIndex(["a", "b", "c"], -4)).toBe(2);
  });
});
