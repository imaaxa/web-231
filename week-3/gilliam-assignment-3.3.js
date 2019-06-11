/*
============================================
; Title:  exercise-3.3.js
; Author: Cory Gilliam
; Date:   11 June 2019
; Modified By: Cory Gilliam
; Description: Uses switch statement to determine specific output
;===========================================
*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 3.3'));

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

// Variables
let eventKeyCode = 13;
console.log('\n// Expected output');

switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;
}

// End program
