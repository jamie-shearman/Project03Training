var basket = [ // an array is an ordered list of items
    'Apples', 'Oranges', 2, true // items of the array
];

console.log( basket[0] ); // 0 is the index of the first item
console.log( basket[1] ); // 1 is the index of the second item
console.log( basket[2] ); // 2 is the index of the third item
console.log( basket[3] ); // 3 is the index of the fourth item
console.log( basket[4] ); // undefined

basket[2] = 'Two';
console.log( basket ); // we can print out the entire array

var fruits = basket[0] + ' ' + basket[1];
console.log( fruits );

console.log( basket.length ); // number of items in the basket array (4)

var i = 3; // store the index of the fourth item
console.log( basket[i] );

console.log( '****' );
for( var index = 0; index < basket.length; index++ ) {
    console.log( basket[index] );
}
console.log( '****' );

basket[7] = 'Milk';
console.log( basket );

console.log( basket[5] );