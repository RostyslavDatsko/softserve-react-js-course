/* 
Please, implement a function combineFunctions that takes any number of functions as an argument 
and returns a function that is a composition of the arguments.

For example:
negate = function(x){ return -x; };
halve = function(x){ return x / 2; };
square = function(x){ return x * x; };
double = function(x){ return 2 * x; };

combineFunctions(negate, halve, square) should return a function
square(halve(negate(x)))

combineFunctions(negate, double) should return a function
double(negate(x))
*/


negate = function(x){ return -x; };
halve = function(x){ return x / 2; };
square = function(x){ return x * x; };
double = function(x){ return 2 * x; };

const combineFunctions = function(...functions){
    return function(x){
        return functions.reduce((result, fn) => fn(result), x);
    };
};    