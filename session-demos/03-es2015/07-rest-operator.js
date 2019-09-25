// rest operator - ...
// Context #1: used with the last argument of a function
function foo( x, y, ...z ) {
    console.log( 'x = ', x );
    console.log( 'y = ', y );
    console.log( 'z = ', z );
}

foo( 1, 2, 3, 4, 5 ); // x is 1, y is 2 and z is [ 3, 4, 5 ]
foo( 10 ); // y is undefined, z is []

// Context #2: During array destructuring (only along with last variable)
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const [ first, second, ...otherDays/*, someDay */ ] = days;
console.log( otherDays ); // [ 'Wednesday', 'Thursday', 'Friday' ]

// Context #3: You can also use it while object destructuring
// Not too popular - it is proposed for a future version of JavaScript