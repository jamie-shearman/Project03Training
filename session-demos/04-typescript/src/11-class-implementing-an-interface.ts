interface IPerson {
    name : string;
    age: number;
    language?: string;
    address: {
        city: string;
        zipCode?: number
    },
    celebrateBirthday: () => void,
    setAddress?: ( city : string, zipCode : number ) => void
};

// "implements" sets up an agreement
// The agreement is that the class Person will have all properties and methods of the interface
class Person implements IPerson {
    name: string;
    age: number;
    language?: string;
    address: {
        city: string;
    }

    constructor( name, age, language, address ) {
        this.name = name;
        this.age = age;
        this.language = language;
        this.address = address;
    }

    celebrateBirthday() {
        this.age++;
    }

    setAddress( city: string ) {
        this.address.city = city;
    }
}

const jane = new Person( 'Jane', 42, 'English', { city : 'New York' } );
const mark = new Person( 'Mark', 52, 'Spanish', { city : 'Barcelona' } );

console.log( jane );

interface IEmployee extends IPerson {
    role ? : string;
    department ? : string;
    promote : () => void;
}

export {}