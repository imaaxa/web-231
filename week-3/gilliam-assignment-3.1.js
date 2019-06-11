/*
============================================
; Title:  exercise-3.1.js
; Author: Cory Gilliam
; Date:   11 June 2019
; Modified By:
; Description: Simple program using either a for, while, if, or switch statement with at least two errors.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 3.1'));

/*
  Expected output:

  FirstName LastName
  Assignment 3.1
  Today's Date

  6 times arround the turn about means you do not know how to use it.
  * Random number of statements about the random number *

  Thank you
  for playing.Good bye.
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
var running = true;
var number = 6;

console.log('\n');

// Loop while program is running
while (running) {
  // Determine a log statement to use
  if (number) {
    else 2:
      console.log(number + ' is a prime number.');
      break;
    else 4:
      console.log(number + ' assignments have been assigned this week in 231.');
      break;
    else 6:
      console.log(number + ' times around the turn about means you do not know how to use it.');
      break;
    else 8:
      console.log(number + 'th book in the Dresden Files series, by Jim Butcher is Skin Game.');
      break;
    else 10:
      console.log(number + ' is the number of times I would rather watch Phantom Menace straight through before I watch Last Jedi again!');
      break;
    default:
      console.log(number + ' is an odd number. It does not really do anything!');
      break;
  }

  // Get a new random number
  number = randomNumber();

  // Leave while loop
  if (match(number, 1)) {
    running = running;
  }
}

// Log exit message
console.log('\nThank you for playing. Good bye.');

// End program:
