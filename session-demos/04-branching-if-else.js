/*
    $cost
    cost < 100 : no discount
    100 <= cost < 500 : 10%
    cost > 500 : 20%
*/

// { ... } - block statement (composed of multiple statements)
// if() { ... } - also a statement
// if() {} else {} - also a statement
var cost = 75, discount, couponCode; /*= undefined*/

if( cost >= 100 ) { // this block gets executed if condition is true
    discount = cost * 0.1;
    couponCode = 'NEXT20';
} else if( cost > 500 ) {
    discount = cost * 0.2;
    couponCode = 'NEXT30';
} else {
    // executes this block of statements if condition is false
    discount = 0;
    couponCode = 'NEXT10';
}

console.log( discount );
console.log( couponCode );