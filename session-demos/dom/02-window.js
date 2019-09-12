// 1. open dialog (alert dialog)
// 2. a place for all other objects
// 3. a place for all global variables and functions
// 4. resize windows
// 5. move window

var x = 100; // global variables are created as properties of the window object
console.log( window.x );

function foo() { // a global function
    console.log( 'i am foo' );
}
window.foo();

alert( 'Hello, I am part of window' );

var john = {
    name: 'John'
};
alert( JSON.stringify( john ) );
alert( john["name"] );