/*
============================================
; Title:  Object.js
; Author: Alsaddig Ibrahim
; Date:  July 2 2019
; Modified By: Cory Gilliam
; Description: Demonstrates how to define and output array values
;===========================================
*/

// Start Code
const header = require('../gilliam-header.js'); //const header = require('../Ibrahim-header.js');

console.log(header.display('Cory', 'Gilliam', 'Discussion 6.1: Fixed') + '\n'); //console.log(header.display("Alsaddig", "Ibrahim", "two Error file"));

var person = {
  firstName : "Alsaddig",
  lastName  : "Ibrahim",
  age     : 37,
  eyeColor  : "Black"
};
console.log("\nMy full Name " + person.firstName + " " + person.lastName); // Line 21: Trying to access the person properties incorrectly, the object goes first followed by a dot (.) followed by the property name
console.log("my last name " + person.lastName + " my age is " + person.age); // Line 22: Trying to access the person properties incorrectly, the object goes first followed by a dot (.) followed by the property name

/*
  Expected output:

  My full Name Alsaddig Ibrahim
  my last name Ibrahim my age is 37
*/
