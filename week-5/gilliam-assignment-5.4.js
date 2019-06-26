/*
============================================
; Title:  Discussion-5.4.js
; Author: Cory Gilliam
; Date:   25 June 2019
; Modified By:
; Description: Using the forEach() function, iterate over the array and output the results.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Assignment 5.4') + '\n');

/*
  Expected output:

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
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

// Filter: Rating
var composersRating = composers.map(composer => {
  var composerObject =
  {
    'lastName': composer.lastName,
    'rating': composer.rating,
  }
  return composerObject;
});

// Filter: Genre
var composersGenre = composers.map(composer => {
  var composerObject = {
    'lastName': composer.lastName,
    'genre': composer.genre,
  }
  return composerObject;
});

// Output message
console.log('--COMPOSER BY RATING--');
composersRating.forEach(composer => console.log('Rating: ' + composer.rating + '\nComposer: ' + composer.lastName + '\n'));

// Output message
console.log('\n-- COMPOSER BY GENRE --');
composersGenre.forEach(composer => console.log('Genre: ' + composer.genre + '\nComposer: ' + composer.lastName + '\n'));

// End program:
