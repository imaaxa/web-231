/*
============================================
; Title:  exercise-4.3.js
; Author: Cory Gilliam
; Date:   18 June 2019
; Modified By:
; Description: Filtering arrays.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 4.3') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today 's Date

  --DISPLAYING ARRAY ITEMS--
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  --SELECTED VALUE--
  Motorcycle

  --SELECTED VALUE--
  Bus
*/

// Functions:

/**
 * Iterate over an array and will console log matching value in array
 * or
 * Empty needle value will console log each element in array
 *
 * @param {array} hayStack
 * @param {string} (optional) needle
 */
function getValue(hayStack, needle = true) {
  // Use variable to limit length check
  var len = hayStack.length;
  var printAll = (needle == true) ? true : false;

  // Iterate the array
  for (let index = 0; index < len; index++) {
    // Check array at current index matches value for this iteration
    if (hayStack[index] == needle) {
      console.log('--SELECTED VALUE--\n' + hayStack[index]);
    } else if (printAll) {
      // This print out all every element of the array if needle is undefined
      (index == 0) ? console.log('--DISPLAYING ARRAY ITEMS--') : null;
      console.log(hayStack[index]);
    }
  }
  console.log('\n');
}

// Variables:
var vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus',];

getValue(vehicles);
getValue(vehicles, 'Motorcycle');
getValue(vehicles, 'Bus');

// End program:
