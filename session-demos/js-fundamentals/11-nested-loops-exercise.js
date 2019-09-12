/**
 * Use for loops to print the following
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
var k = 1;

for( var i = 1; i <= 5; i++ ) { // i = 3
    console.log( 'hello' );

    for( var j = 1; j <= i; j++ ) {
        console.log( k );
        k++;
    }
}