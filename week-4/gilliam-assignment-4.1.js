/*
============================================
; Title:  exercise-4.1.js
; Author: Cory Gilliam
; Date:   20 June 2019
; Modified By:
; Description: Program with two errors.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 4.1') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today 's Date

  Hello, I am {name}.I live in the great state of {state name}.
*/

// Functions:

// Variables:
var statesKey = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC', 'AS', 'GU', 'MP', 'PR', 'UM', 'VI', ];
var new Array states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia', 'American Samoa', 'Guam', 'Northern Mariana Islands', 'Puerto Rico', 'United States Minor Outlying Islands', 'Virgin Islands, U.S.', ];
var stateIn = '';
var stateInIndex = '';
var message = new Array();

// Add message sections
message.push('Hello, I am ');
message.push(prompt("Enter your name: "));
message.push('. I live in the great state of ');

// Get a valid state abbreviation for the user
var run = true;
while (run) {
  stateIn = prompt("Enter the two letter abbreviation of the state you live in: ");

  stateInIndex = statesKey.indexOf(stateIn.toUpperCase());
  if(stateInIndex > -1) {
    run = false;
  } else {
    alert('Here is a list of state abbreviations to choose from:\n' + statesKey.join(', '));
  }
}

// Get state name based upon user's state abbreviation
message.push(states[stateInIndex]);
message.push(".");

// Output message
console.log(message.connectWith(''));
// End program:
