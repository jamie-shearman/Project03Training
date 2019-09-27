class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    };
}

// Person is called the "base class", "super class", "parent class"
// Employee is called the "derived class", "child class"
class Employee extends Person {
    // default constructor
    // constructor( ) {
    //     super( ...arguments ); // within Employee constructor "super" refers to the Person constructor
    // }

    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    // this "overrides" the Person class celebrateBirthday()
    celebrateBirthday() {
        super.celebrateBirthday(); // calls the super class celebrateBirthday (i.e. Person's celebrateBirthday)
        console.log( 'Hurray! It is your bday. Here is a voucher from us you can use to dine out at your favorite restaurant' );
    }
}

const john = new Employee( 'John', 32, 'Senior Accountant', 'Finance' );
john.celebrateBirthday();
john.promote();

console.log( john );

