/*
============================================
; Title:  exercise-442.js
; Author: Cory Gilliam
; Date:   18 June 2019
; Modified By:
; Description: Fun with arrays.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 4.4') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today 's Date

  --ORIGINAL ARRAY--
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  --SORTED ARRAY--
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  --SELECTED VALUE--
  Iowa
*/

// Functions:

/**
 * Console logs array items that start with the same letter given.
 *
 * @param {string} argument1
 * @param {string} argument2
 */
function getValue(argument1, argument2) {
  return argument1[0].toLocaleUpperCase() == argument2;
}

/**
 * Logs a new line
 */
function n() {
  console.log('\n');
}

// Variables:
var states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];

// Log the array
console.log('--ORIGINAL ARRAY--');
states.forEach(item => console.log(item));
n();

// Log the sorted array
console.log('--SORTED ARRAY--');
states.sort().forEach(item => console.log(item));
n();

// Log the all elements that start with the letter I
console.log('--SELECTED VALUE--');
states.filter(state => getValue(state, 'I')).forEach(item => console.log(item));

// End program:
