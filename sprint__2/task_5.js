/* 
We have the product() function, you can see it on the snapshot below. 
This product() function finds the product of its arguments and also uses this object for the initial value of the product.

Please, create a new function getProduct()
  that, no matter how it is called, will be always bound to a particular this value. getProduct() should be created from the original product() function 
  and work with the same logic, but should pass two additional arguments – 2 and 3 – to the original function, every time getProduct() is called.

Object this for getProduct() function you should also define by yourself. Look at snapshot for clues what it should be.
*/


const product = function() {
    return [].reduce.call(arguments, function(res, elem) {
      return res * elem;
    }, this.product);
};

const contextObj = { product: 10 }; 
const boundProduct = product.bind(contextObj);

const getProduct = function(...args) {
    return boundProduct(...args, 2, 3); 
};
