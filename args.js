// JavaScript Document
var arguments = require('yargs').argv;

console.log(arguments);

if(arguments._[0] === 'hello'){
	console.log('Roger');
}