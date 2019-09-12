// function declaration syntax
function sum( x, y ) {
    x++; // will not change a
    var result = x + y;
    return result;
}

// calling / invoking the function
var a = 10;
var res = sum( a, 20 ); // x = a, y = 20

console.log( res );
console.log( a );

function greetMe() {
    return "hello";
}

console.log( greetMe() );

function logGreeting() {
    console.log( 'Good morning' );
    // return undefined;
}

logGreeting();

function g() {
    console.log( 'g has started executing' );
    console.log( 'g has finished executing' );
    return 2;
}

function f() {
    console.log( 'f has started executing' );
    g();
    console.log( 'f has finished executing' );
    return 1;
}

// f();

console.log( f() + g() );