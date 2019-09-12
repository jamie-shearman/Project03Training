var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung' },
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
];

// Print the name of each phone
for( var i = 0; i < phones.length; i++ ) {
    console.log( phones[i].name );
}

function f( phone ) {
    console.log( phone.name );
}

phones.forEach( f );

// filter()
// the function passed to filter must return true / false
function getNewPhones( phone ) {
    return phone.type === 'new';
}

var newPhones = phones.filter( getNewPhones );
console.log( newPhones );

// find() - find the first item in the array that matches some criteria
function getCheapPhone( phone ) {
    return phone.price < 450;
}

console.log( '***' );
var firstCheapPhone = phones.find( getCheapPhone );
console.log( firstCheapPhone );
console.log( '***' );

// map() - we want the array in a modified form

// [
//     'Samsung Galaxy S10+ Plus',
//     'Apple iPhone 7 Plus',
//     ...
// ]
// or something like this...
// [
//     { name: 'Samsung Galaxy S10+ Plus', priceAfterTax: 682 },
//     { name: 'Apple iPhone 7 Plus', priceAfterTax: 495 },
//     ...
// ]
function getName( phone ) {
    return phone.name;
}

var phoneNames = phones.map( getName );
console.log( phoneNames );

function getPriceAfterTax( phone ) {
    return {
        name: phone.name,
        priceAfterTax: phone.price + ( 0.1 * phone.price )
    };
}

var phonePricesAfterTax = phones.map( getPriceAfterTax );
console.log( phonePricesAfterTax );
