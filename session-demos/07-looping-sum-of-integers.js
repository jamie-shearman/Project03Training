// 1 + 2 + 3 + ... + 100

var result = 0;
var cur_integer = 1;

while( cur_integer <= 100 ) {
    result = result + cur_integer;
    cur_integer++;
}

console.log( 'result = ', result );
console.log( 'cur_integer = ', cur_integer );