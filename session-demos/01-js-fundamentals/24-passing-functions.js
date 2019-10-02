// we can pass a function as input to another function
//  f gets g as an input

function f( x ) {
    console.log( x );
    x();
}

function g() {
    console.log( 'hey, i am g' );
}

f( 1 ); // x = 1
f( "hello" ); // x = "hello"
f( g ); // x = g