'use strict';

function fibonacci(n){
  var a = 1, b = 0, temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
    
};

console.log(fibonacci(6));