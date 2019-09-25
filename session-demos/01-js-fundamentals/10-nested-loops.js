/**
 * Use for loops to print the following
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 .... i
1 2 3 4 5 ............ 10
*/
for( var i = 1; i <= 5; i++ ) {
    // console.log( 1 ); // j = 1
    // console.log( 2 ); // j = 2
    // console.log( 3 ); // j = 3
    // console.log( i ); // j = i

    for( var j = 1; j <= i; j++ ) {
        console.log( j );
    }
}