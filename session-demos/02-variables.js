/* 
    Primitive types in JavaScript
    1. number
    2. string
    3. boolean

    To execute this via Node.js (assuming you are in repo folder)
    ```
    node session-demos/02-variables.js 
    ```
*/
var priceOfProduct = 125.25; // number can have decimal point 
var quantity = 3; // number can be an integer
var temperature = -10.5;

// new feature (ES2015 feature - ECMAScript)
var destination = `New


York`; // ' and " are equivalent. backtick-quoted strings can spillover to next line

var chicago = 'O\' Hare'; // \' is the escape sequence for a single quote, \" is double quote escape sequence, \\ is escape sequence for \
var doubleQuotedCityName = "\"New York\"\n"; // \n is escape sequence for newline character

var nickname = 'The Big Apple';
var fullName = destination + ' ' + nickname; // string literal and variables have been used here

console.log( fullName );

console.log( fullName[0] ); // N
console.log( fullName[1] ); // e
console.log( fullName[2] ); // w
console.log( fullName[3] ); // \n

console.log( fullName.length ); // number of characters in the string fullName
console.log( fullName.substr( 0, 4 ) );

var isRaining = false;
var isSunny = true;
var doINeedUmbrella = true;

console.log( isRaining );

console.log( typeof isRaining ); // typeof evaluates to a string type - "boolean"
console.log( typeof "hello" ); // "string"

var dataTypeOfDestination = typeof destination; // "string"
console.log( dataTypeOfDestination );

console.log( typeof 123 ); // "number"