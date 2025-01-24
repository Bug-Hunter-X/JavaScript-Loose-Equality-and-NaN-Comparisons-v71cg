# JavaScript Loose Equality and NaN Comparisons

This repository demonstrates a common pitfall in JavaScript: the unexpected behavior of loose equality (==) when comparing special values like NaN, 0, -0, undefined, and null.  Strict equality (===) is generally recommended to avoid these issues, but even with strict equality, NaN comparisons require careful consideration.

## The Problem

JavaScript's loose equality operator (==) performs type coercion before comparison, leading to non-intuitive results. For example, `NaN == NaN` evaluates to `false`, even though both are NaN (Not-a-Number). Similarly, 0 and -0 are considered equal by loose equality, although they are mathematically distinct.

Strict equality (===) does not perform type coercion and avoids some of the unexpected behaviors of loose equality, however, `NaN === NaN` still evaluates to `false`.

## Solution

To reliably compare values, it is essential to use strict equality (===). However, special handling is required for `NaN`. The `isNaN()` function can be used to check if a value is NaN. This function is also essential when handling user input that may inadvertently produce `NaN`. 

The provided `bugSolution.js` file demonstrates a more robust solution.