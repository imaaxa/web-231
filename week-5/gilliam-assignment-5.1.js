/*
============================================
; Title:  Discussion-5.1.js
; Author: Cory Gilliam
; Date:   25 June 2019
; Modified By:
; Description: Program with two errors.
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
//const header = require('../gilliam-header.js');
//console.log(header.display('Cory', 'Gilliam', 'Discussion 4.1') + '\n');

/*
  Expected output:

  FirstName LastName
  Discussion 4.2
  Today 's Date

  Hello, I am {name}, and I tend to do a little dance, and make a little noise, in the state of {state name} tonight.
*/

// Functions:

// Variables:
var stateKey = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC', 'AS', 'GU', 'MP', 'PR', 'UM', 'VI', ];
var state = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia', 'American Samoa', 'Guam', 'Northern Mariana Islands', 'Puerto Rico', 'United States Minor Outlying Islands', 'Virgin Islands, U.S.', ];
var stateIn = '';
var message = new Array();

// Turn the stateKey and state arrays into a map key/value collection
var states = new Map();
for (var i = 0; i < stateKey.length; i++) {
  states.set(stateKey[i], state[i]);
}

// Add message sections
message.push('Hello, I am ');

//message.push(prompt("Enter your name: ").trim()); // <- Use this line if running in browser. Comment out next line
message.push(" Bob ".trim()); // <- Use this line if testing in VS Code. Change Bob to what ever name you want to use.  Comment out previous line

message.push(', and I tend to do a little dance, and make a little noise, in the state of ');

// Get a valid state abbreviation for the user
var run = true;
while (run) {
  // Get the abbreviation of a state from user, force value to upper case

  //stateIn = prompt("Enter the two letter abbreviation of the state you live in: ").trim().toUpperCase(); // <- Use this line if running in browser. Comment out next line
  stateIn = 'Tn'.trim().toUpperCase(); // <- Use this line if testing in VS Code. Change Tn to what ever state abbreviation you like. Comment out previous line

  // Test states map for presence of state abbreviation key
  // Break loop if present
  // Notify user of options if false
  if(states.has(stateIn)) {
    run = false;
  } else {
    //alert('Here is a list of state abbreviations to choose from:\n' + stateKey.join(', '));     // <- Use this line if running in browser. Comment out next line
    console.log('Here is a list of state abbreviations to choose from:\n' + stateKey.join(', ')); // <- Use this line if testing in VS Code. Comment out previous line
  }
}

// Get state's full name based upon states map key
message.push(states.get(stateIn));
message.push(" tonight.");

// Output message
console.log(message.join(''));
// End program:
