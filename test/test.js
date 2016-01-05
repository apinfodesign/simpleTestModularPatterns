var assert = require('assert');      
var greet = require('../greeting');   

//reference: https://nodejs.org/api/child_process.html#child_process_child_process
var spawn = require('child_process').spawn;  

//reference: https://www.npmjs.com/package/describe
describe(' Greeting Module Tests ', function(){

	it('should return *Hello bob*', function(done){
		var command = spawn('node', ['index.js', 'bob']);
		command.stdout.on('data', function(data){
			assert(/Hello bob/.test(data.toString() ) );
			done();
			});
   		})

	it('should equal the value of *Hello something*', function(){
		var testname = "something";
		assert.equal(greet(testname), "Hello something");
		}) 
	 
	it('output string is 12 characters long', function(){
 		var testname = "bob123";
 		assert.equal( greet(testname).length, 12);
		}); 
});