var arr = [ 1, 2, 3, 4 ]; // 1 * 1 + 2 * 2 + 3 * 3 + 4 * 4
var result = 0;

for( var i = 0; i < arr.length; i++ ) {
    sum = arr[i] * arr[i];
    
    result = result + sum; // result = 30
}

console.log( "result = " + result );