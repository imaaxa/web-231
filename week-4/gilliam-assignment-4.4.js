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
 * @param {array} items
 * @param {string} filterValue
 */
function getValue(items, filterValue) {
  for (let index = 0; index < items.length; index++) {
    if (predicate(items[index], filterValue)) {
      console.log(items[index]);
    }
  }
}

/**
 * Iterate over an array and console log each element.
 *
 * @param {array} items
 */
function printValues(items) {
  for (let index = 0; index < items.length; index++) {
    console.log(items[index]);
  }
  console.log('\n');
}

/**
 * Compares the first letters of two values
 *
 * @param {string} value1
 * @param {string} value2
 *
 * @returns {bool} true / false
 */
function predicate(value1, value2) {
  return (value1[0].toLowerCase() == value2[0].toLowerCase()) ? true : false;
}

// Variables:
var states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada',];

console.log('--ORIGINAL ARRAY--');
printValues(states);

console.log('--SORTED ARRAY--');
printValues(states.sort());

console.log('--SELECTED VALUE--');
getValue(states, 'i');
// End program:
