
var assert = require('assert');
var assert = require('chai').assert 
var fs = require('fs');

describe(' a suite of tests that do x', function(){

	it('should add some numbers', function(){
	var sum = 2 +2 ;
	if (sum!==4){
		throw new Error(' sum is not correct' )
		}		

//async
	it('should write a file', function(done){

		fs.writeFile('my-test.text', '123', function(err){

			assert(!err);
			done();

		});

	});




	});

});