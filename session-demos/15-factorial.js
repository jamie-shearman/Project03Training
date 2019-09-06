// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 4! = 1 * 2 * 3 * 4 = 24

// 5! = 4! * 5

// 3! = 2! * 3

var n = 5;

var result = 1; // 1!


// result = result * 2; // 2!
// result = result * 3; // 3!
// result = result * 4; // 4!
// result = result * 5;

for( var i = 2; i <= 5; i++ ) {
    result = result * i;
}

console.log( result );