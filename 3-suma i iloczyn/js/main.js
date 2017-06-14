'use strict';

function sumaIloczyn() {
    
    var count = 0;
    var count2 = 1;
    var array = [1,2,3,4,5,6,7,8];
    
for(var i = 0; i < array.length; i++)
{
    count += array[i];
    count2 *= array[i];
    
//    count = count + array[i];
//    count2 = count2 * array[i];

}
    console.log('Suma to ' + count + ', a iloczyn to ' + count2 );
    

};

console.log(sumaIloczyn());



