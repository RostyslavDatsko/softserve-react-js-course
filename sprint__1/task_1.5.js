// Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.

// Function example:
// combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]
// * For correct passing of all tests don't use console.log() method in your code.


function combineArray(arr1, arr2) {
    return [...arr1, ...arr2].filter(item => typeof item === 'number');
}