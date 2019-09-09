// keys/properties - name, hours, ...
// values - "Project 1", 20, [ ... ],  { ... }
var project = {
    "name": "Project 1",
    hours: 20,
    teamMembers: [
        "JOhn",
        "Maria"
    ],
    cost: {
        budget: 1000000,
        buffer: 10000
    }
};

console.log( project["name"] );
console.log( project );
console.log( project["cost"] );
console.log( project["cost"]["budget"] );

console.log( project["hours"], project["cost"]["budget"] );

// var interestingDetails = {
//     hours: project["hours"]
// };

project["hours"]++;
project["teamMembers"][2] = "David"; // added a new team member
project["manager"] = "Brad"; // add a new key-value pair
delete project["hours"]; // remove a key-value pair

project["cost"]["investment"] = 10;

// party : {
//     location: ...project,
//     organizer: ''
// }

// one way to add an object
// project["party"] = {
//     location: "Gastro Pub",
//     organizer: 'Pete'
// };

project["party"] = { };
project["party"]["location"] = "Gastro Pub";
project["party"]["organizer"] = "Pete";


console.log( project );