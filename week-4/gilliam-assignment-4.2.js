/*
============================================
; Title:  exercise-4.2.js
; Author: Cory Gilliam
; Date:   18 June 2019
; Modified By:
; Description: Fun with arrays.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 4.2') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today 's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

// Functions:

/**
 * Iterate over an array and console log each element.
 *
 * @param {array} items
 */
function getFruit(items) {
  for (let index = 0; index < items.length; index++) {
    console.log(items[index]);
  }
}

// Variables:
var fruits = ['apple', 'banana', 'grape', 'peach', 'pineapple'];

getFruit(fruits);

// End program:
