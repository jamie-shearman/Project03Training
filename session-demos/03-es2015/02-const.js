// const follows the SAME rules as let
const x = 1;
// let x = 2; // error

const y = 1;
// y = 2; // error - const variables are constants

// You can still mutate an object / array (mutate => change properties)
const john = {
    name: 'Jonathan',
    age: 32
};

john.name = 'John';
john.age++;

console.log( john );

// error
// john = { // error - assignment to a new object is not allowed
//     name: 'John Sr.',
//     age: 34
// };

// cannot use const for a loop variable (since we are trying to increment it every time)
// for( const i = 0; i < 10; i++ ) {
//     console.log( i );
// }

const days = [ 'Sun', 'Mon' ];
days.push( 'Tue' ); // this is ok - not an error

console.log( days );

// days = [ 'Sun', 'Mon', 'Tue', 'Wed' ]; // error - cannot assign
// console.log( days );