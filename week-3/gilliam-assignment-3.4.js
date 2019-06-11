/*
============================================
; Title:  exercise-3.4.js
; Author: Cory Gilliam
; Date:   11 June 2019
; Modified By: Cory Gilliam
; Description: Using loops
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 3.4'));

/*
  Expected output:

  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

// Functions:

/**
 * Generates a random number
 * @return {int} Number between 1 - 10
 *
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

/**
 * Compares two paramerters with equality operation
 *
 * @param {any} value1
 * @param {any} value2
 * @return {bool} true / false
 */
function match(value1, value2) {
  // Return true or false based upon value and data type
  if (value1 === value2) {
    return true;
  }
  return false;
}

// Variables:
var number = randomNumber();

console.log('\n-- DO THE NUMBERS MATCH GAME --');
// Loop 10 times, get a random number (guess), compare to number, log match / no match
for (let i = 0; i < 10; i++) {
  var guess = randomNumber()
  if ( match(number, guess) ) {
    console.log(number + ' does match ' + guess + '!');
  } else {
    console.log(number + ' does not match ' + guess + '!');
  }
}

// End program:
