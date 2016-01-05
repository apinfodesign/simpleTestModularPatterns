var people = require('./people');
var name= people[0];

var greet = function(name){
	console.log("Hello ", name);
};


console.log('Welcome to Planet Earth');

greet(name);



