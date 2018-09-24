// SUM METHODS

function sum(arguments) {
  let sum = 0;
  arguments.forEach( (el) => sum += el );
  
  return sum;
}

function sum(...nums) {
  let sum = 0;
  nums.forEach( (el) => sum += el );
  
  return sum;
}

 // BIND METHODS 
 
 
Function.prototype.myBind = function (context) { // bindArgs here 
  let that = this;
  let bindArgs = Array.from(arguments).slice(1);
  return function() { // callArgs here 
    let callArgs = Array.from(arguments);
    return that.apply(context, callArgs.concat(bindArgs));
  };
}; 

Function.prototype.myBind = function (context, ...bindArgs) { // bindArgs here 
  let that = this;
  // let bindArgs = Array.from();
  return function(...callArgs) { // callArgs here 
    // let callArgs = Array.from(arguments);
    return that.apply(context, callArgs.concat(bindArgs));
  };
}; 



const curry = function(num_args) {
  let numbers = [];

  return function _curriedSum(n) {
    numbers.push(n);
    let summed = 0;

    if (numbers.length === num_args) {
      for (var i = 0; i < numbers.length; i++) {
        summed += numbers[i];
      }
      return summed;
    } else {
      return _curriedSum;
    }
  };
};


Function.prototype.curry = function(num_args) {
  const nums = [];
  let that = this;
  
  const otherFunc = function(num) {
    nums.push(num);
    if (nums.length === num_args) return that.apply(null, nums);
    return otherFunc;
  };
  return otherFunc;
};

Function.prototype.curryB = function (num_args) {
  // const nums = [];
  let that = this;
  
  const otherFunc = function(...nums) { // rest opterator
    if (nums.length === num_args) {
      return that.call(num, ...nums);
    } else {
      return _curry;
    }
  };
  return _curry;
};

function sum() {
  args = Array.from(arguments);
  let sum = 0;
  args.forEach( (el) => sum += el);
  return sum;
}







// 

