/*
============================================
; Title:  Exercise-6.4.js
; Author: Cory Gilliam
; Date:   3 July 2019
; Modified By:
; Description: Using nested objects
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 6.4') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 6.4
  Today's Date

  Ticket < id > was created on < dateCreated > and assigned to employee < firstName lastName > ( < jobTitle > ).
*/

// Functions:

// Objects:
var ticket = {
  // ticket properties
  id: 1532984,
  date: 'July 3, 2019',

  person: {
    // person properties
    firstName: 'Bob',
    lastName: 'Smith',
    jobTitle: 'Senior Junor Associate',
  }
};

// Variables:

// Output message:
console.log(
  'Ticket ' + ticket.id + ' was created on ' + ticket.date + ' and assigned to employee ' + ticket.person.firstName + '  ' + ticket.person.lastName + ' ( ' + ticket.person.jobTitle + ' ).',
);

// End program:
