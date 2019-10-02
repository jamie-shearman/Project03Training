class Person {
    public name : string;
    // "private" means the age property can be accessed only by the Person class methods
    private age : number;

    // "protected" means classes derived from the Person class can access this property
    protected status : string;

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    };

    getAge() {
        return this.age;
    }
}

class Employee extends Person {
    setStatus() {
        this.status = 'single'; // 
    }
}

const jane = new Person( 'Jane', 42 ); // generates an empty object - { } and calls the constructor()
const mark = new Person( 'Mark', 52 ); // generates an empty object - { } and calls the constructor()

jane.celebrateBirthday();
mark.celebrateBirthday();

console.log( jane ); // the entire object can be printed
console.log( mark );

console.log( jane.age ); // age is private - cannot be accessed outside of the class
console.log( jane.getAge() );

console.log( jane.status ); // status is protected - cannot be accessed outside of the class / derived classes

export {}
