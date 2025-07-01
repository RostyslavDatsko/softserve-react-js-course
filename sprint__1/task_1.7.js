// Implement the processArray(arr, factorial) function, which takes the first parameter of the array arr, and the second parameter the function factorial and processes each element of the array arr with the function factorial, returning a new array (the source array arr does not change)

// The function factorial(n) calculates and returns the factorial of the number n. For example factorial(4) returns 24.

// Example
// // determines the factorial of the number n
// function factorial(n) { // your code}; 
// processArray([1, 2, 3, 4, 5], factorial); // [1, 2, 6, 24, 120]
// * For correct passing of all tests don't use console.log() method in your code.


function factorial(num) {
    if (num < 0) 
        return -1;
    else if (num === 0) 
        return 1;
    else {
        return num * factorial(num - 1);
    }
}

function processArray(arr, factorial) {
    return arr.map(element => factorial(element));
}