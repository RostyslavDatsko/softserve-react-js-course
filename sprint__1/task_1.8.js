// Using the default parameter technique, overload the overloadedFunc() function, which takes 3 arguments. For the 1st argument of the 
// function set the default value [1, 2, 3], for the 2nd - the value 2, for the 3rd - the function that returns the product of the first two arguments, 
// and the function can multiply both arrays and numbers.

// The overloadedFunc() function returns the result of the default function.

// For example:

// Тест + Result
// console.log(overloadedFunc());
// [ 2, 4, 6 ]
// console.log(overloadedFunc([2,4,6,8]));
// [ 4, 8, 12, 16 ]
// console.log(overloadedFunc([2,4,6], 3));
// [ 6, 12, 18 ]
// console.log(overloadedFunc(10));
// 20
// console.log(overloadedFunc(8, 3));
// 24

function elementMultiplication(element1, element2) {
  if (!Array.isArray(element1)) {
    return element1 * element2;
  }
  return element1.map(el => el * element2);
}

function overloadedFunc(arg1 = [1, 2, 3], arg2 = 2, fun = elementMultiplication) {
  return fun(arg1, arg2);
}