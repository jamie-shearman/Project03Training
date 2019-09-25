function greet( message = 'Hello', name = 'World' ) {
    console.log( `${message} ${name}!` );
}

greet( 'Good morning', 'John' );
greet( 'Good morning' );
greet();
greet( undefined, 'Rita' );