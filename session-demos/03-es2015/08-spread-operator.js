// spread operator - ...
// Context #1: Prefixed to an array
const numbers = [ 10, 50, 30, 80, 65, 45 ];
console.log( ...numbers ); // console.log( 10, 50, 30, 80, 65, 45 );

console.log( Math.max( 10, 50, 30, 80, 65, 45 ) );
console.log( Math.max( ...numbers ) );

const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 = [ ...arr1, ...arr2 ];
console.log( arr3 );

// Context #2: Prefixed to an object
const john = {
    name: 'Jonathan',
    age: 32
};

// object copying using ...
const johnClone = { // { name: 'Jonathan', age: 32 }
    ...john
};
// there is more to object copying using ... (primitives are copied by value; non-primitives will be copied by reference)

john.age++;

console.log( john ); // age is 33
console.log( johnClone ); // age is 32 (unaffected)