/**
 * Interfaces are like type aliases for defining object types
 * BUT interfaces have more powerful features
 */
interface IPerson {
    name : string;
    age: number;
    language?: string;
    address: {
        city: string;
        zipCode: number
    },
    celebrateBirthday?: () => void,
    setAddress?: ( city : string, zipCode : number ) => void
};

let john : IPerson = {
    name: 'Jonathan',
    age: 32,
    address: {
        city: 'New York',
        zipCode: 54321
    },
    celebrateBirthday: function() {
        this.age++;
        // return undefined;
    },
    setAddress: function( city, zipCode ) {
        this.address.city = city;
        this.address.zipCode = zipCode;
    }
};

export {}