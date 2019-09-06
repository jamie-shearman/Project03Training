function sumArray( numbers ) {
    numbers[0]++;

    for( var i = 0, result = 0; i < numbers.length; i++ ) {
        result = result + numbers[i];
    }

    return result;
}

var numbers = [ 1, 3, 5, 7 ];
var res = sumArray( numbers ); // numbers (within sumArray function) = numbers (the global variable)

console.log( numbers );
console.log( 'res = ', res );

console.log( sumArray );

// res(); // cannot call res - res is a number, not a function