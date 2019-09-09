function f() {
    console.log( 'f was called' );

    function g() {
        console.log( 'g was called' );
    }

    return g;
}

var x = f();

x(); // same as saying g()