import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { add, evaluateExpression } from "../src/calc.mjs";

describe("calc", () => {
  it("adds two numbers", () => {
    assert.equal(add(2, 3), 5);
  });
  it("evaluator must NOT run arbitrary code", () => {
    // This test fails on purpose: eval("2+2") returns 4, so the
    // "safe" behaviour we want (throw) is not what the code does.
    assert.throws(() => evaluateExpression("2+2"), /not allowed/);
  });
});
