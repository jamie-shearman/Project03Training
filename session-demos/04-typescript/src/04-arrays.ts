let days = [
    'Monday',
    'Tuesday',
    'Wednesday'
];

days.push( 'Thursday' ); // ok
days.push( 5 ); // not ok

// let primes : number[] = [];
let primes : Array<number> = [];
primes.push( 2 );
primes.push( 3 );
primes.push( 5 );
primes.push( "hello" ); // not ok - the array can have only numbers