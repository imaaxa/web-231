/*
============================================
; Title:  exercise-3.2.js
; Author: Cory Gilliam
; Date:   11 June 2019
; Modified By: Cory Gilliam
; Description: Uses different if/else statement to determine specific output
;===========================================
*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 3.2'));

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

// Functions:

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

  /*
  Alternate ways to accomplish the same task:
    if (value1 === value2) {
      return true;
    } else {
      return false;
    }

    switch (value1 === value2) {
      case true:
        return true;
      default:
        return false;
    } // return statements makes the break; unneeded
  */

}

/**
 * Sends no match message to the console log
 *
 * @param {any} value1
 * @param {any} value2
 */
function logMismatch(value1, value2) {
  console.log(value1 + ' and ' + value2 + ' do not match!');
}

/**
 * Sends match message to the console log
 *
 * @param {any} value1
 * @param {any} value2
 */
function logMatch(value1, value2) {
  console.log(value1 + ' and ' + value2 + ' do match!');
}

// Variables
var value1 = 'Truck';
var value2 = 'Car';
var value3 = 'Bike';
var value4 = 'Bike';
var value5 = 'Four';
var value6 = 'Three';

// Output -see Expected output: above
console.log('\n// output from the match() function');
console.log(match(value1, value2) + '');
console.log(match(value3, value4) + '\n');
console.log('// output from the if...else blocks');

// Test first set of values
if (match(value1, value2)) {
  logMatch(value1, value2);
} else {
  logMismatch(value1, value2);
}

// Test second set of values
if (match(value3, value4)) {
  logMatch(value3, value4);
} else {
  logMismatch(value3, value4);
}

// Test third set of values
if (match(value5, value6)) {
  logMatch(value5, value6);
} else {
  logMismatch(value5, value6);
}

// End program
