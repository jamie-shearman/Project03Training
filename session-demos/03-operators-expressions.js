// arithmetic operators
// +, -, * (multiplication), / (divide), % (remainder)
var x = 12, y = 7, city = 'New York';

console.log( x + y );
console.log( x - y );
console.log( 20 * y );
console.log( x / y ); // full divison
console.log( x % y ); // 5
console.log( 37 % 23 ); // 14

// assignment along with arithmetic / increment/decrement
console.log( x = x + 10 ); // in the RHS of the assignment, we substitute variables with their values; in the LHS of the = operator, we treat them as space to hold a value
console.log( x += 10 ); // means the same as above (short form syntax)
console.log( ++x, x + 1 ); // x += 1 (prefer using preincrement and predecrement)
console.log( --x ); // x -= 1

// relational operators (boolean value is always the result)
console.log( x < y );
console.log( x > y );
console.log( x <= 13 ); // true
console.log( x <= 12 ); // true (less than or equal to)
console.log( 'Apple' < 'Banana' ); // alphabetical order comparison (allowed in JavaScript)
console.log( x == y ); // equality comparison operator
console.log( x == 12 ); // true
console.log( 'x == 13', x, x == 13 ); // false
console.log( 'x === 12', x === 12 ); // true

console.log( 'x === \"12\"', x === "12" ); // false (data type mismatch - hence false)
console.log( 'x == \"12\"', x == "12" ); // true (does not check data type match)

// logical operators (booleans are operands)
var price = 35, quantity = 15;
// not - ! (unary - one operand - operand is always a boolean variable)
var isOpen = true;

isOpen = !isOpen;
console.log( 'isOpen is now ', isOpen ); // false

isOpen = !isOpen;
console.log( 'isOpen is now ', isOpen ); // back to true

// and - &&
// combines 2 boolean value
console.log( 'true && true is ', true && true ); // true
console.log( 'true && false is ', true && false ); // false
console.log( 'false && true is ', false && true ); // false 
console.log( 'false && false is ', false && false ); // false

// or - ||
// combines 2 boolean value
console.log( 'true || true is ', true || true ); // true
console.log( 'true || false is ', true || false ); // true
console.log( 'false || true is ', false || true ); // true
console.log( 'false || false is ', false || false ); // false


// https://www.ibm.com/support/knowledgecenter/en/SSVRGU_9.0.1/reference/r_wpdr_elements_operators_r.html

// * has greater precedence than +
var total = price * quantity + 500 // same as ( price * quantity ) + 500
var isLoyal = false;

// we offer a discount is purchase totals more than 500 "or" customer is loyal
var doWeGiveDiscount = ( total > 500 ) || isLoyal;
console.log( 'doWeGiveDiscount ? ', doWeGiveDiscount );

// associativity
console.log( 2 * 3 / 4 ); // * and / have same precedence - we go left to right as these are l->r associative
