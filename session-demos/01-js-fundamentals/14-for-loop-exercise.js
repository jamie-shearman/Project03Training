/**
 * Write a for loop that calculates sum of items in an array of numbers.
 * Example: For array [ 1, 2, 3, 4 ] it calculates the sum as 10
 */
var array = [ 1, 2, 3, 4 ];

var arraySum;

arraySum = 0;
// arraySum = arraySum + array[0];
// arraySum = arraySum + array[1];
// arraySum = arraySum + array[2];
// ...
// arraySum = arraySum + array[array.length - 1];

// var i = 0;
// while( i < 4 ) {
//     arraySum = arraySum + array[i]; // arraySum = 10
//     i = i + 1; // i = 4
// }

// var i : initializer (before execution of first iteration)
// i < 4 : condition that is checked before start of every iteration
// i++ : statement executed after the end of every iteration
for( var i = 0; i < 4; i++ ) {
    arraySum = arraySum + array[i];
}

console.log( arraySum );