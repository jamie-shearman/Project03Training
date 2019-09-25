// info about the currently loaded page's address (URL)
console.log( location );

location.href = 'https://en.wikipedia.org';

location.reload(); // reloads current page

// these all loads the new page / current page in diferent ways
// location.assign(), location.replace(), location.reload()