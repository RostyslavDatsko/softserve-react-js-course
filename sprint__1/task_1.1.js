// Implement the getModifiedArray(array) function, which takes an arbitrary array, and returns an array with the value of the first element of the array equal to “Start”, the last element of the array equal to “End” and the rest of elements should be the same as in an initial array. The initial array should stay unchanged.

// * For correct passing of all tests don't use console.log() method in your code.

// For example:
// Тест	 console.log(getModifiedArray([12, 6, 22, 0, -8]));
// Result [ 'Start', 6, 22, 0, 'End' ]



function getModifiedArray(array) {
  return ['Start', ...array.slice(1, -1), 'End'];
}

console.log(getModifiedArray([12, 6, 22, 0, -8]));
