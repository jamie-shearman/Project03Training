var bucket = [ 1, 100, 1000, 10000, 11000 ];
var box = [ ];

var bucketClone = bucket; // both arrays are one and the same
bucket[1]++;
console.log( bucketClone );

for( var i = 0; i < bucket.length; i++ ) {
    // console.log( bucket[i] );
    box[i] = bucket[i]; // box[0] = bucket[0]; // box[0] = 1
}

bucket[1]++;
console.log( 'box = ', box );
console.log( 'bucket = ', bucket );
console.log( 'bucketClone = ', bucketClone );

// console.log( box );

// box = bucket // box and bucket are one and the same array

// var x = 10, y;
// y = x;

// Many languages have 2 kinds of variables - one which holds a value, and one which holds a reference to a variable

// primitives are copied by value
// non-primitives are copied by reference
var x = 10;
var y;
y = x; // we are assigning a primitive value (number, boolean, string)
x++;
console.log( 'x = ', x );
console.log( 'y = ', y );

// bucket is a reference
// box is a reference

box = bucket; // bucket is an array (non-primitive) - copied by reference - box and bucket refer to one and the same array