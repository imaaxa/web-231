/*
============================================
; Title:  fix-me.js
; Author: Jarred Workman
; Date:   20 June 2019
; Modified By: Cory Gilliam
; Description: Demonstrates the use of arrays: has 2 errors to be fixed
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Discussion 4.1: Fix') + '\n');

/* Expected output
; I really love the number 3, check it out! 3
;
; 0
; 1
; 2
; 3
; 5
;
*/

// Functions:
/**
 * Send something to the consol.log()
 *
 * @param {anything} item
 */
function logIt(item) {
  console.log(item);
}
// Moved the function declaration to the top

// Instantiate array
var number = [0, 1, 2, 3, 4, 5];

// Log a single value of the array
logIt('I really love the number 3, check it out! ' + number[3] + '\n');
// Line 42: Took advantage of the logIt function
// Line 42: 3 is index 3 of the number array not index 2

// Log all values of the array
number.forEach(logIt);
