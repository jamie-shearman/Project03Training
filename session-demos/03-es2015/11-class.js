// We have objects of "similar" structure (same properties but different values, and same methods)
const john = {
    name: 'Jonathan',
    age: 32,
    // IMPORTANT: Never use arrow function syntax for object method's ("this" will change to window which is undesirable)
    celebrateBirthday: function() {
        this.age++;
    }
};

const mary = {
    name: 'Mary',
    age: 28,
    celebrateBirthday: function() {
        this.age++;
    }
};

john.celebrateBirthday();
console.log( john );

// Classes help create objects that are "similar"
class Person {
    // the constructor gets called automatically 
    // "this" is the newly created object
    // the constructor automatically returns the newly created object
    constructor( name, age ) {
        this.name = name;
        this.age = age;

        // each object gets its own celebrateBirthday() method
        // this.celebrateBirthday = function() {
        //     this.age++;
        // };
    }

    // every object shares a common celebrateBirthday() method
    celebrateBirthday() {
        this.age++;
    };
}

// we can prefix any function call with new
// We will however do this ONLY for classes (classes are special type of functions)
// Calling a function with new operator will...
// 1. Generate a new empty object
const jane = new Person( 'Jane', 42 ); // generates an empty object - { } and calls the constructor()
const mark = new Person( 'Mark', 52 ); // generates an empty object - { } and calls the constructor()

jane.celebrateBirthday();
mark.celebrateBirthday();

console.log( jane );
console.log( mark );