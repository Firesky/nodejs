// JavaScript Document
console.log("Yogi is my yogi");

var storage = require('node-persist');

storage.initSync();

//storage.setItemSync('name', 'Googie');

var name = storage.getItemSync('name');

console.log(name);
