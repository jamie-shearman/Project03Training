//create 2 objects
var Object1 = {
    name: "John",
    age: 20

};

// addSurname is a property whose value is a function - such a property is called a method
var Object3 = {
    name: "Maria",
    age: 40,
    addSurname: function xyz() {
        console.log( this ); // this is same as Object2
        this["name"] = this["name"] + " " + "Sharapova";
    }
};

Object2["addSurname"]();

Object3["celebrateBirthday"] = function abc() {
    this["age"] = this["age"] - 10;
}

Object3["celebrateBirthday"]();
console.log( Object3["age"] );
console.log(Object2["name"]);

Object2["age"]++

//console.log ( Object2 );

Object1["Address"] = {};
Object1["Address"]["First Line"] = 7;
Object1["Address"]["City"] = "Scarsdale";

console.log(Object1["Address"]["City"]);

Object1["Spouse"] = Object2;
Object2["Spouse"] = Object1;


//Add an emailids property to Jane. Set it to an array with 2 strings representing Jane's email ids.
Object2["Email IDs"] = ["maria@gmail.com", "maria2@gmail.com"]
console.log(Object2)

//Print the second email id of Jane.
console.log(Object2["Email IDs"][1]);

//Change the second email id of Jane and print it.
Object2["Email IDs"][1] = "maria-changed@gmail.com";
console.log(Object2["Email IDs"][1]);

//Add a third email id for Jane and print the Jane object.
Object2["Email IDs"][2] = "maria-NEW@gmail.com";
console.log(Object2["Email IDs"][2]);

//Add a method celebrateBirthday() on John that adds 1 to the John's age. Call it on John to increase John's age.
function celebrateBirthday() {
    Object1["age"]++
    console.log(Object1["age"]);
}
celebrateBirthday();    


function sumSquares( x, y ) {
    var result = 12 * 12 + 13 * 13;
    return result;
}

console.log( sumSquares( 2, 3 ) );
console.log( sumSquares( 12, 13 ) );

var x = 12, y = 14;
var sum = x + y;

movie["AddToCast"]( "Maria" ); // movie["cast"] = ["a", "b", "c", "Maria"]
movie["AddToCast"]( "John" ); // movie["cast"] = ["a", "b", "c", "Maria", "John"]
