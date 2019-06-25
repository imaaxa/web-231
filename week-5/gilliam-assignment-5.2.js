/*
============================================
; Title:  Discussion-5.2.js
; Author: Cory Gilliam
; Date:   25 June 2019
; Modified By:
; Description:
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Assignment 5.2') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

// Functions:

// Variables:
var food = ['Oysters','Shrimp','Steak','Tacos','Sushi',];

// Output message
food.forEach(item => console.log(item));
// End program:
