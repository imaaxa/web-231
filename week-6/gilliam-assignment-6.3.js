/*
============================================
; Title:  Exercise-6.3.js
; Author: Cory Gilliam
; Date:   3 July 2019
; Modified By:
; Description: Using object literal for a ticketing system
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 6.3') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// Functions:

// Objects:
const customer = {
  id: 101,
  name: 'Help Desk Support',
  requester: 'Bob Jones',
}

// Variables:

// Output message:
console.log('{id: ' + customer.id + ', name: ' + customer.name + ', requester: ' + customer.requester + '}');

// End program:
