class Person {
    // we are using shorter syntax
    // in the shorter syntax we do not declare data members on top
    // instead we set them using the arguments of the constructor
    // in this syntax the assignments like this.name = name etc. are done automatically
    constructor( public name : string, private age : number, protected status : string ) {
    }

    public celebrateBirthday() {
        this.age++;
        // return undefined;
    };

    getAge() {
        return this.age;
    }
}

const jane = new Person( 'Jane', 42, 'single' );
const mark = new Person( 'Mark', 52, 'married' );

console.log( jane.celebrateBirthday() ); 

console.log( jane.getAge() );

export {}