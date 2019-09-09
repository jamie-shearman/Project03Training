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

console.log( project );
