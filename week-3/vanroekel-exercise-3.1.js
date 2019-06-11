/*
============================================
; Title:  Assignment 3.1 Control Statements
; Author: Faye Van Roekel
; Date:   11 June 2019
; Modified By: Cory Gilliam
; Description: Control Statements 3.1 Assignment with Errors
;===========================================
*/

//const header = require('../Vanroekel-header.js')
const header = require("../gilliam-header");

//console.log(header.display("Faye", "Van Roekel", "Assignment 3.1"));
console.log(header.display('Cory', 'Gilliam', 'Assignment 3.1: Fixed'));

// Start program:

// Variables:
/*
 - Declare all variables at top of program to help with readability.
 - Since i is declared as a global variable, renamed it to index for readability.
 - username was not defined.
*/
var text = '';
var index = 11;
var username = '';

/*
  - If statement is declared like: if (condition) {}.
  - Curly bracket are optional for single line, but the do help with readability.
  - Strings need to be inside of single or double quotes, followed by ;.
*/
// If username is null or not defined, define it
if (username == '' || username == null) {
  username = 'Faye Van Roekel';
}

/*
  - while statement is declared like: while (condition) { statement }.
  - console.log() uses \n for new line. <br /> is for html.
  - Note: Since index is initiated at 11, this while loop will never execute.
*/
while (index < 10) {
  // Add another line to the text variable, then increment the index
  text += '\nThe number is ' + index;
  index++;
}

/*
  - console.log() outputs messages to the console.
  - The username variable was missing from the log message.
  - Changed the second part of the log message to use the text variable
*/
// Output:
console.log('Username: ' + username + '\n' + text);

// End program:
