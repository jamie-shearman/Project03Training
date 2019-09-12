// navigator object is used to query the browser features, browser version etc.
console.log( navigator );
console.log( navigator.userAgent );

function doSomethingWithTheLocation( position ) {
    console.log( position );
}

navigator.geolocation.getCurrentPosition( doSomethingWithTheLocation );