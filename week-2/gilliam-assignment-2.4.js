/*
============================================
; Title:  exercise-2.4.js
; Author: Cory Gilliam
; Date:   5 June 2019
; Modified By: Cory Gilliam
; Description: Outputs three sentences using different functions.
;===========================================
*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 2.4'));

/*
  Expected output:

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.
*/

// Functions:

/**
 * Concatenats two names (strings) with a space
 *
 * @param {firstName}
 * @param {lastName}
 * @return Concatenated string using the two values surrounding a space character
*/
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

/**
 * Creates a date object using given year, month, day
 *
 * @param {int} year
 * @param {month} month
 * @param {day} day
 * @returns {object}
 */
function dateWriter(year, month, day) {
  return new Date(year, --month, day);
}

/**
 * Returns a value with a fixed position of decimal locations
 *
 * @param {double} value
 * @param {int} fixedPosition
 * @returns {double}
 */
function formatNumber(value, fixedPosition) {
  return value.toFixed(fixedPosition);
}

/**
 * Returns the value as a parsed integer
 *
 * @param {string} value
 * @returns {int}
 */
function convertToInt(value) {
  return parseInt(value);
}

/**
 * Returns the value as a parsed float
 *
 * @param {string} value
 * @returns {float}
 */
function convertToFloat(value) {
  return parseFloat(value);
}

// Variables
var date = dateWriter(2019,1,5);
var temperature = formatNumber(33.6, 1);
var age = '43';
var savings = '200000';

// Output -see Expected output: above
console.log('\n');
console.log('Hello my name is ' + fullName('Cory', 'Gilliam') + '!');
console.log('\n');
console.log('Today\'s date is ' + date.toLocaleDateString('en-US') + ' and the current temperature is ' + temperature + ' degrees.');
console.log('\n');
console.log('I am ' + convertToInt(age) + ' years old and my savings account goal is ' + formatNumber(convertToFloat(savings), 2) + ' dollars.');

// End program
