function sum1( x, y ) {
    return x + y;
}

const sum2 = function( x, y ) {
    return x + y;
};

// arrow function syntax for defining function
// "fat arrow operator" (=>)
const sum3 = ( x, y ) => {
    return x + y;
};

// for a function with a single line (which is a return statement), we can write like so
const sum4 = ( x, y ) => x + y;

console.log( sum4( 12, 13 ) );

// if the function has exaclty ONE argument, then you can (optionally) omit the parentheses around the function argument
const square = x => x * x;

console.log( square( 5 ) );