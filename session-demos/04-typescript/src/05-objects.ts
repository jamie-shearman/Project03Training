// Person is a type alias for the type { name : string; age: number; language?: string; }
// The ? after language tells that language property is optional in the object
type Person = {
    name : string;
    age: number;
    language?: string;
    address: {
        city: string;
        zipCode: number
    }
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
    }
};

john.language = 'English';

let maria : Person = {
    name: 'Maria',
    age: 28,
    address: {
        city: 'Boston',
        zipCode: 43210
    }
};

export {}