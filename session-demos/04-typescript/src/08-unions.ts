type NumberOrStringOrEmptyArgsFunction = number | string | ( () => void );

let x : NumberOrStringOrEmptyArgsFunction = 1;
x = "hello";

console.log( x ); // prints "hello"

x = function( y ) { // error - the functions cannot take any arguments
};

export {}