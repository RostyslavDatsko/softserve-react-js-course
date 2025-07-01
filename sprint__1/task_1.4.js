// The function takes any number of strings and returns the sum of their lengths.

// Example:


// console.log(sumOfLen('hello', 'hi')); //7
// console.log(sumOfLen('hi')); //2
// console.log(sumOfLen()); //0
// console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16

// * For correct passing of all tests don't use console.log() method in your code.



const sumOfLen = (...strings) => {
  return strings.reduce((totalLength, element) => {
    return totalLength + element.length;
  }, 0);
};