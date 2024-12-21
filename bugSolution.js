function foo(a, b) {
  // Check if both inputs are numbers or can be coerced to numbers
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return null; // Handle non-numeric values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(0, 2)); // Output: 2
console.log(foo('', 2)); // Output: null
console.log(foo(undefined, 2)); //Output: null