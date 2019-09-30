var x; // no explicit type not an inital value - so x can take "any" mind of value
x = "hello";
x = 1;
var y = 1; // typescript assumes y is of number type (because of te initial value of 1)
// y = "hello"; // error
y = 2;
