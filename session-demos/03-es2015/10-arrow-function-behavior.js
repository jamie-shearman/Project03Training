function foo() {
    console.log( 'foo this = ', this );

    // boo1 maintains its own context (independent of foo call's context)
    function boo1() {
        console.log( 'boo1 this = ', this );
    }

    boo1();

    // boo2 being an arrow function, gets its call context from the enclosing foo function's call context
    const boo2 = () => {
        console.log( 'boo2 this = ', this ); // same as foo's this
    }

    boo2();
}

foo(); // "this" is window

// changes the "this" (function call context) within foo to 'hello'
foo.call( 'hello' );