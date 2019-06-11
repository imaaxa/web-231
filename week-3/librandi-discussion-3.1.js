/*
============================================
; Title:  librandi-discussion-3.1.js
; Author: Tyler Librandi
; Date:   11 June 2019
; Modified By: Cory Gilliam
; Description: Program that demonstrates a control statement
;===========================================
*/

// Links to the librandi-header.js file
// const header = require('../week-2/librandi-header.js');
const header = require("../gilliam-header");

// Displays formatted header, with Line break for improved visibility
//console.log(header.display("Tyler", "Librandi", "Discussion 3.1 - Control Statements"));
console.log(header.display('Cory', 'Gilliam', 'Assignment 3.1: Fixed'));
console.log('\n');

/*
Expected output:

Tyler Librandi
Discussion 3.1 - Control Statements
Date: 6/11/2019

I 'm thinking of a number between 1 and 10. What is it?

1
2
3
4
5
6
7
8
9 This is the number!
10
*/

// Output:
console.log ("I'm thinking of a number between 1 and 10. What is it?" + '\n')

/*
 - Since i is declared as a global variable, renamed it to guess for readability.
*/
// Variables:
var guess = 1;

/*
  - while statement is declared like: while (condition) { statement }.
  - Parentheses are not optional. They need to surround condition.
*/
//Outputs 'n' each instance to create a list of numbers between 1 and 9
while (guess !== 9) {
	console.log(guess);

	//If 'guess' doesn't equal the number '9', then increment guess
	guess++;
}

/*
  - if statement is declared like: if (condition) { statement }.
  - Curly bracket are optional for single line, but the do help with readability.
  - Parentheses are not optional. They need to surround condition.
*/
//If 'guess' is equal to '9' add correct answer statement
if (guess == 9) {
	console.log(guess + " This is the number!");
}

/*
  - while statement is declared like: while (condition) { statement }.
  - Parentheses are not optional. They need to surround condition.
*/
//To complete the list numbered 1 through 10, 10 must is added individually after 9 has been found
while (guess < 10) {
	guess++;
	console.log(guess);
}

/*
	Easy way to do this program, Using a for() loop
	-----------------------------------------------

  // Loop 10 times
	for(var guess = 1; guess < 11; guess++){

		// Test the guess index is not equal to target (9)
		if (guess != 9) {
			// Log out the number
			console.log(guess)
		} else {
			// If it equals 9, log out the message
			console.log(guess + " This is the number!");
		}
	}

	OR same thing, Using a while() loop
	-----------------------------------------------

	// Declare the guess variable
	var guess = 1;

	// Declare a while loop and test the guess index is less than 11 (1 to 11 gives 10 loops)
	while (guess < 11) {

		// Test the guess index is not equal to target (9)
		if (guess != 9) {
			// Log out the number
			console.log(guess)
		} else {
			// If it equals 9, log out the message
			console.log(guess + " This is the number!");
		}

		// Increment guess
		guess++;
	}

*/
