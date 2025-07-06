/* 
The function takes any number of strings and returns the sum of their lengths.

Example:

sumOfLen('hello', 'hi'); // 7
sumOfLen('hi'); // 2
sumOfLen(); // 0
sumOfLen('hello', 'hi', 'my name', 'is'); // 16

* For correct passing of all tests don't use console.log() method in your code.
*/


const sumOfLen = (...strings) => {
  return strings.reduce((totalLength, element) => {
    return totalLength + element.length;
  }, 0);
};