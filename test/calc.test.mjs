import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/calc.mjs";

describe("calc", () => {
  it("adds two numbers", () => {
    assert.equal(add(2, 3), 5);
  });
});
