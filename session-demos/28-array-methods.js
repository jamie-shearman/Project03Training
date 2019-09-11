var numbers = [ 2, 3, 21, 5, 31, 7, 11, 100 ];

// numbers["sort"]()

function f( x, y ) { // function that teaches sort how to compare numbers
    // return +ve number y < x
    // return -ve number x < y
    // return 0 if x and y are equal
    console.log( 'f is called with x and y = ', x, y );
    return x - y;
}

// result = f(2, 21) // x = 2, y = 21, returning 19
// result = f(2, 3) // x = 2, y = 3, returning 1

numbers.sort( f );

console.log( numbers );

numbers.reverse();
console.log( numbers );

numbers[ numbers.length ] = 101;
console.log( numbers );

numbers.push();

// function peek( array ) {
//     return array[ array.length - 1 ];
// }

// peek( numbers ); // array = numbers

var numbers = [ 2, 3, 21, 5, 31, 21, 7, 11, 100 ];

/* index to begin */
/* how many to remove */
/* add 45, 67, 78, 89 at index 2 */
numbers.splice( 3, 2, "Added to array", 67, 78, 89, 70, 32, 1000 );

console.log( numbers );

console.log( numbers.indexOf( 21 ) );
console.log( numbers.lastIndexOf( 21 ) );
console.log( numbers.indexOf( 13 ) ); // -1 (did not find)
console.log( numbers.indexOf( 15 ) ); // -1 (did not find)