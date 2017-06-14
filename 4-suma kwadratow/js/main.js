'use strict';

console.log('elo');

//function sumaKwadratow(array) {
//
//for(var i = 0; i < array.length; i++) {
//    count = count + Math.pow(array[i], 2);
//}
//    console.log(count);
//}
//
//sumaKwadratow([1,2,3,4]);

var a =[1,2,3,4].reduce(function(prev, curr){
    return prev + Math.pow(curr, 2);
}, 0);

var b = [1,2].reduce(function(p, c){
    return p + c;
}, 10)



console.log(a);