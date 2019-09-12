'use strict'; // use strict mode of execution for all code

var x = 10; // global variable (declared in the global scope)
var y = 30;

console.log( 'x (globally) = ', x );

function f() {
    // 'use strict'; // strict mode of execution only for code within the function
    var y = 20; // function-scope variable (y is scoped to the function f)
    var z = 100;
    console.log( 'x within function f = ', x );
    console.log( 'y within function f = ', y );

    function g() { // g is scoped to the function f (g can be called only within f)
        var y = 40, w = 1001;
        console.log( 'x within function g = ', x );
        console.log( 'y within function g = ', y );
        console.log( 'z within function g = ', z );
        console.log( 'w within function g = ', w );
    }

    g(); // y, w are created, used and destroyed
    g(); // y, w are created, used and destroyed
    g(); // y, w are created, used and destroyed
    g(); // y, w are created, used and destroyed
}

// console.log( 'y (globally) = ', y ); // y would not have been created
f();
console.log( 'y (globally) = ', y ); // y would have been created
