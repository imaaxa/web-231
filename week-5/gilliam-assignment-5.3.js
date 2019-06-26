/*
============================================
; Title:  Discussion-5.3.js
; Author: Cory Gilliam
; Date:   25 June 2019
; Modified By:
; Description: Using the forEach() function, iterate over the array and output the results.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Assignment 5.3') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

// Functions:

// Variables:
var composers = [
  {
    'firstName': 'Ludwig van',
    'lastName': 'Beethoven',
    'genre': 'Classical',
    'rating': 8,
  }, {
    'firstName': 'Wolfgang Amadeus',
    'lastName': 'Mozart',
    'genre': 'Classical',
    'rating': 10,
  }, {
    'firstName': 'Johann Sebastian',
    'lastName': 'Bach',
    'genre': 'Classical',
    'rating': 9,
  }, {
    'firstName': 'Joseph',
    'lastName': 'Haydn',
    'genre': 'Classical',
    'rating': 6,
  }, {
    'firstName': 'Franz',
    'lastName': 'Schubert',
    'genre': 'Classical',
    'rating': 5,
  },
]

// Output message
console.log('--COMPOSERS--');
composers.forEach(composer => console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating));
// End program:
