var assert = require('assert');
var greet = require('../people');
var spawn = require('child_process').spawn;

describe(' a simple test ', function(){

	it('should console log a name', function(done){
	 
		var command = spawn('node', ['index.js', 'bobxxx']);
		command.stdout.on('data', function(data){

			assert(/Hello bob/.test(data.toString() ) );
			done();
		});

   	});

	it('should equal this value', function(){
		var testname = "something";

		assert.equal(greet(testname), "Hello something");

	})
 
});