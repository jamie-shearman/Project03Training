// we can pass a function as input to another function
//  f gets g as an input

function f( x ) {
    console.log( x );
    x();
}

function g() {
    console.log( 'hey, i am g' );
}

f( g ); // x = g