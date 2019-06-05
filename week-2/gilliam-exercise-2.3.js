/*
============================================
; Title:  exercise-2.3.js
; Author: Cory Gilliam
; Date:   4 June 2019
; Modified By: Cory Gilliam
; Description: Outputs a sentence using a function and function properties.
;===========================================
*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 2.3 - Function properties'));

/*
 * Expected output
 * Hello {FirstName} {LastName}!
 */

// Function properties
myName.cory = "Cory";
myName.gilliam = "Gilliam";


// Function
function myName() {
  return myName.cory + ' ' + myName.gilliam;
}

// Output
console.log('\n');
console.log('Hello ' + myName() + '!');

// End program
