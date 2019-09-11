var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: '620', type: 'refurbished', manufacturer: 'Samsung' },
    { name : 'Apple iPhone 7 Plus', price: '450', type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: '430', type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: '910', type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: '430', type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: '610', type: 'new', manufacturer: 'Apple' },
];
// Print the name of each phone
for( var i = 0; i < phones.length; i++ ) {
    console.log( phones[i].name );
}

function f( phone ) {
    console.log( phone.name );
}

phones.forEach( f );