// Person is a type alias for the type { name : string; age: number; language?: string; }
// The ? after language tells that language property is optional in the object
type Person = {
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

let john : Person = {
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

john.language = 'English';
john.setAddress( 'Chicago', 43210 );

let maria : Person = {
    name: 'Maria',
    age: 28,
    address: {
        city: 'Boston',
        zipCode: 43210
    }
};

type Address = {
    city: string;
    zipCode: number;
};


fetch( 'http://whatever.com/api/persons' )
    .then(function( response ) {
        return response.json();
    })
    .then(function( persons : Person[] ) : Address[] {
        function getAddress( person ) {
            return person.address;
        }

        const addresses = persons.map( getAddress );
        return addresses;
    })