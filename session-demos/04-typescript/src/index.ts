let x; // no explicit type not an inital value - so x can take "any" mind of value
x = "hello";
x = 1;

let y = 1; // typescript assumes y is of number type (because of te initial value of 1)
// y = "hello"; // error
y = 2;