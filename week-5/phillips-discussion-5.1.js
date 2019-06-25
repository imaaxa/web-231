/*
;===========================================================================================================================================
; Title:  phillips-discussion-5.1.js
; Author: Ernie Phillips
; Date:   25 June 2019
; Modified By: Cory Gilliam
; Description: create an advanced array using map
;===========================================================================================================================================
*/
//start main

//Create constant variable declaration that imports another javascript file
const header = require('../gilliam-header.js'); //const header = require("../phillips-header");

//call instantiated object's method called display and pass three parameters, write to console
console.log(header.display('Cory', 'Gilliam', 'Discussion 5.1') + '\n'); //console.log(header.display("Ernie", "Phillips", "Discussion 5.1"));

//create Map
var nameMap = new Map(); // variable name declared here does not match what is used further in the program, changed to match

//add key/value pairs to map
nameMap.set(1, "Ernie"); // String value needs to be enclosed in double quotes.
nameMap.set(2, "Phillips");

//iterate through map and output key/value
for (var [key, value] of nameMap){
  console.log("key: " + key + ' value: ' + value); // key variable was misspelled, changed to correct spelling
}

//filter map with anonymous function (=> not to be confused as lambda because map.map function called)
console.log([nameMap].map(x => nameMap.has(1))); //Returns true, because key exists

//end main
