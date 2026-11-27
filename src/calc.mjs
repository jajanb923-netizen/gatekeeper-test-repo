// Calculator module — PR #1 adds a "quick" expression evaluator.
// teh comment above has a typo on purpose (allowlisted trivial fix).
export function add(a, b) {
  return a + b;
}

// DANGER: evaluates arbitrary user input as code.
export function evaluateExpression(userInput) {
  return eval(userInput);
}
