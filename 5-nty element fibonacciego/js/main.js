'use strict';

function elementOfFibonacci(index){
    var table = [0,1];
    
    for(var i =2; i < index; i++){
        table[i] = table[i -2] + table[i -1];
        
    }
    return IntStream.of(table[i]).sum();
}

console.log(elementOfFibonacci(7));