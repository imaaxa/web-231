/*
;==============================================================================
; Title:  phillips-discussion_3.1: Fixed
; Author: Ernie Phillips
; Date:   11 June 2019
; Modified By: Cory Gilliam
; Description:
; Prompt user for name and age and continue to do so if values enter
; are incorrect. Check age and append to message depending,
; recursively call count down method until passed variable matches declared variable,
; then display contents of message.
;==============================================================================
*/

// Create constant varible declaration that imports another javascript file
// const header = require("../phillips-header");
const header = require("../gilliam-header");

// Call instanciated object's method called display and pass three parameters, write to console
// console.log(header.display("Ernie", "Phillips", "Assignment 3.1"));
console.log(header.display('Cory', 'Gilliam', 'Assignment 3.1: Fixed'));

// Variables:
/* - Declare all variables at top of program to help with readability. */
var message = '';
var name = '';
var age = '';

/*
  - while statement is declared like: while (condition) { statement }.
  - strings need to be inside of single or double quotes.
  - variable has been declared already, assignment is all that is needed here
*/
while (name === '' || name === 'undefined') {
  name = prompt('What is your name?');
}

while (age === '' || name === 'undefined' || isNaN(age)) {
  /*
    - Prompt user for age before testing the value
    - variable has been declared already, assignment is all that is needed here
  */
  age = prompt("What is your age?");

  if (isNaN(age)) {
    alert("Must be int value");
  }
}

/*
  - Strings need to be inside of single or double quotes.
*/
message = 'Welcome ' + name;

/*
  - switch comparison value needs to be a value that is not a boolean: in this case age
  - case values need to be inside () and followed by :
  - switch statement is declared switch ( expression ) { case value: }, the curly braces are part of the declaration
*/
switch (age) {
  case (age < 50):
    message += ", you still have a lot to learn.";
    break;
  case (age > 50):
    message += ", you are still young at heart";
    break;
  default:
    message += ", what did you enter for age? " + age;
    break;
}

/**
 * Prints a countdown on the screen before printing out the message built from user input
 *
 * @param {int} countVal
 *
 * //recursive loop call, out of scope of this lesson
 */
/*
  - Since this function is not to be used again, it can be declared as anonymous.
  - You can define and invoke an anonymous function in single statement. Page 179, second example
*/
(function count(countVal) {
  if (countVal > 1) {
    setTimeout(function () {
      countVal--;
      document.write(countVal + "... ");
      count(countVal);
    }, 1000);
  } else {
    document.write(" " + message);
  }
}(4));

/*
  - countitup() is not an included function in this program.
  - count() function could be what is wanted here.
  - count() changed to be anonymous and invoked after declaration.
*/
//count(4);
