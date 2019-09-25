const john = {
    name: 'Jonathan',
    age: 32,
    address: {
        city: 'New York',
        zipCode: 54321
    },
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ]
};

// const name = john.name, age = john.age, location = john.address.city, secondaryEmailId = john.emailids[1];

// no variable called name is created - instead firstName = john.name
const { name : firstName, age, address : { city : location }, emailids : [ , secondaryEmailId ] } = john;

console.log( firstName, age, location, secondaryEmailId );