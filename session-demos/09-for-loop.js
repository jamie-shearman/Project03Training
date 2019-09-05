// 1, 2, 4, 7, 11, 16, 22, 29

// var i = 1, j = 1;

// while( i < 100 ) {
//     console.log( i ); // 1
//     i = i + j; // 2
//     j++; // 2
// }

// do { // very rare - executes block statement once before checking the condition

// } while( condition );

for( var i = 1, j = 1; i < 100; i = i + j, j++ ) {
    console.log( i );
}