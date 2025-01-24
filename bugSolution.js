function foo(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return true; // Handle NaN case
  } else if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // true
console.log(foo(0, -0)); // false
console.log(foo(undefined, undefined)); // true
console.log(foo(null, null)); // true