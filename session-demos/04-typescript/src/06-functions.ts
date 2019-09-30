const result1 = sum1( 10, 20 );

// giving types along with the function declaration
function sum1( x : number, y : number ) : number {
    return x + y;
}

const result2 = sum2( 10, 20 );

const sum2 = function( x : number, y : number ) : number {
    return x + y;
};

// AcceptsTwoNumbersAndReturnsANumber is a "type alias".
// It is an alias for the type ( x : number, y : number ) => number
// Wherever we use ( x : number, y : number ) => number, we can use AcceptsTwoNumbersAndReturnsANumber instead (and vice versa)
type AcceptsTwoNumbersAndReturnsANumber = ( x : number, y : number ) => number;

const sum3 : AcceptsTwoNumbersAndReturnsANumber = function( x, y ) {
    return x + y;
};

console.log( sum3( 10, 20 ) );