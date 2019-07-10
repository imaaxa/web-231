/*
============================================
; Title:  Exercise-7.2.js
; Author: Cory Gilliam
; Date:   10 July 2019
; Modified By:
; Description: Create an array of objects and display them on screen
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 7.2') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  Employee ID: 1, Name: Gandalf The Grey, Title: Wizard
  Employee ID: 2, Name: Frodo Baggins, Title: Ring Bearer
  Employee ID: 3, Name: Samwise Gamged, Title: Best Friend
  Employee ID: 4, Name: Meriadoc Brandybuck, Title: Friend
  Employee ID: 5, Name: Peregrin Took, Title: Friend
*/

// Functions:
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// Objects:


// Variables:
var employees = [
  new Employee(1,"Gandalf","The Grey","Wizard"),

  new Employee(2, "Frodo", "Baggins", "Ring Bearer"),

  new Employee(3,"Samwise","Gamged","Best Friend"),

  new Employee(4,"Meriadoc","Brandybuck","Friend"),

  new Employee(5,"Peregrin","Took","Friend")
];

// Output message:
employees.forEach(employee => {
  console.log("Employee ID: " + employee.id + ", Name: " + employee.firstName + ' ' + employee.lastName + ', Title: ' + employee.title);
});

// End program:
