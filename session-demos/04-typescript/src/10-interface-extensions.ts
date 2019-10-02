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

interface IEmployee extends IPerson {
    role ? : string;
    department ? : string;
    promote : () => void;
}

let john : IEmployee = {
    name: 'Jonathan',
    age: 32,
    address: {
        city: 'New York',
        zipCode: 54321
    },
    // role: 'Accountant',
    // department: 'Finance',
    celebrateBirthday: function() {
        this.age++;
        // return undefined;
    },
    setAddress: function( city, zipCode ) {
        this.address.city = city;
        this.address.zipCode = zipCode;
    },
    promote: function() {
        this.role = `Senior ${this.role}`;
    }
};

export {}