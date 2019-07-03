/*
============================================
; Title:  Exercise-6.1.js
; Author: Cory Gilliam
; Date:   3 July 2019
; Modified By:
; Description: Application with at least 2 errors
;===========================================
*/

// Start program:

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Discussion 6.1') + '\n');

/*
  Expected output:

  FirstName LastName
  Exercise 6.1
  Today's Date

  Ticket < id > was created on < dateCreated > and assigned to employee < firstName lastName > ( < jobTitle > ).
*/

// Functions:
/**
 * Builds an array for joining later
 *
 * @param {object} dataObj
 */
function getMessage(dataObj) {
  var message = new Array();

  // Build the message
  tryThis(message, 'Order:', dataObj 'id');
  tryThis(message, 'was created on:', dataObj, 'date');
  tryThis(message, 'was purchased by:', dataObj, 'firstName');
  tryThis(message, '', dataObj, 'lastName');
  tryThis(message, 'and has seat number:', dataObj, 'seatNumber');

  return message;
}

/**
 * Adds a text value and a object property value to an array
 *
 * @param {array} container
 * @param {string} text
 * @param {object} dataObj
 * @param {property name} point
 */
function tryThis(container, text, dataObj, point) {
  try {
    // Try to do this with no errors, but I am ready if there is an error
    var data = dataObj[point];

    // If text variable is empty, do not add anything to the array
    if (text != '') {
      container.push(text);
    }

    // Scans data for unwanted droids
    if (data != 'C3-PO') {
      container.push(data);
    } else {
      // Throw an error is forbidden word is found
      throw new Error(data + ': Your droids, we don\'t serve their kind here.');
    }

  } catch (error) {
    // This happens only if there was an error thrown in the try area
    console.log('\nCatch clause: ' + error);
    console.log('* Hint: The error is not part of the tryThis() function.\n');

    // Add a failed seat number message to the array message
    container.push('Order cancelled: No Hope For You');
  } finally {
    // This happens after every time the try/catch block happens, no matter what
    return container;
  }
}

// Objects:
var order = {
  id: 1532984
  date: 'July 3, 2019',
  firstName: 'Luke',
  lastName: 'Kenobi',
  seatNumber: 'C-23',
  //seatNumber: 'C3-PO', // For the fun of it comment out the line above, and uncomment out this one
};

// Variables:

// Output message:
console.log(getMessage(order).join(' ¯\_(ツ)_/¯ '));

// End program:
