import { expect, describe, it } from "vitest";
import loopIndex from "./loop-index";

describe("loopIndex", () => {
  it("should return 0 when given an empty array", () => {
    expect(loopIndex([], 0)).toBe({
      index: 0,
      dir: null,
    });
  });

  it("should return 0 when given an index of 0", () => {
    expect(loopIndex(["a", "b", "c"], 0)).toBe({
      index: 0,
      dir: null,
    });
  });

  it("should return 1 when given an index of 3 and an array of length 2", () => {
    expect(loopIndex(["a", "b"], 3)).toBe({
      index: 1,
      dir: "right",
    });
  });

  it("should return 2 when given an index of -1 and an array of length 3", () => {
    expect(loopIndex(["a", "b", "c"], -1)).toBe({
      index: 2,
      dir: "left",
    });
  });

  it("should return 2 when given an index of -4 and an array of length 3", () => {
    expect(loopIndex(["a", "b", "c"], -4)).toBe(2);
  });
});
