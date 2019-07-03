/*
============================================
; Title:  Exercise-6.2.js
; Author: Cory Gilliam
; Date:   3 July 2019
; Modified By:
; Description: Using the try, catch, finally block in a program
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 6.2') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Catch clause: < your custom message goes here >
  Finally clause reached...
*/

// Functions:
function getData() {
  var existingValue = 23;

  try {
    return existingValue * nonexistingValue;
  } catch (err) {
    console.log('Catch clause: ' + err);
  } finally {
    console.log('Finally clause reached...');
  }
}

// Variables:

// Output message
console.log(getData());
// End program:
