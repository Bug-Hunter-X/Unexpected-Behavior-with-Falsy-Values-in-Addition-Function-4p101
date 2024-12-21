# JavaScript Bug: Handling Falsy Values in Addition

This repository demonstrates a common JavaScript bug related to handling falsy values in a simple addition function.  The initial function correctly handles `null` values, but it doesn't account for other falsy values like `0`, `false`, `''`, or `undefined` which might lead to unexpected results. The solution demonstrates a more robust approach.

## Bug

The `bug.js` file contains the buggy code.  The function `foo` adds two numbers; however, it only explicitly checks for `null` inputs.  If any other falsy values are passed, the results might be incorrect based on JavaScript's loose type system.

## Solution

The `bugSolution.js` file provides a corrected version of the function.  This version performs a more thorough check for valid numeric inputs before performing the addition, preventing unexpected results from falsy values.