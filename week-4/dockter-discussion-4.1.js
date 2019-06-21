/*
============================================
; Title:  Discussion 4.1
; Author: Brittany Dockter
; Date:   20 June 2019
; Modified by: Cory Gilliam
; Description: A simple program using Arrays that contain two errors.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Discussion 4.1: Fix') + '\n');

/**
  Expected Output:

  Brittany Dockter
  Discussion 4.1
  Date: 06/20/2019

  My favorite food is chicken
*/

// Variables:
var myfavorite = 'My favorite food is '
var meat = ['steak', 'chicken', 'pork'];
//meat['2'] // Line: 28 is not needed.


// Output:
console.log(myfavorite + meat[1]);
// Line: 33 myfavorite and meat array needed to be concatinated with a +
// Line: 33 Chicken is index 1 not index 2
