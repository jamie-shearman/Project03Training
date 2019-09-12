function f() {
    console.log( 'f was called' );

    function g() {
        console.log( 'g was called' );
    }

    return g;
}

var x = f();
console.log( x );
x(); // same as saying g()