let x = 1;
//
//
//
//
//

// var x = 2; // error - you cannot redeclare variables declared with let

x = 2; // reassigning the value is ok
console.log( 'x = ', x );

for( let i = 0; i < 10; i++ ) { // i is local (let variable)
    console.log( i );
}

// console.log( 'i after for loop finished is ', i ); // error 