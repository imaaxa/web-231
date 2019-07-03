/*
============================================
; Title:  librandi-discussion-6.1.js
; Author: Tyler Librandi
; Date:   02 July 2019
; Modified By: Cory Gilliam
; Description: A program that demonstrates objects
;===========================================
*/

//Links to the librandi-header.js file to display formatted header
const header = require('../gilliam-header.js'); //const header = require('../week-2/librandi-header.js');
console.log(header.display('Cory', 'Gilliam', 'Discussion 6.1: Fixed') + '\n'); //console.log(header.display("Tyler", "Librandi", "Discussion 6.1 - Objects and Built-in Objects"));

//Start Program====================================================================================

//create an object
var employee = {
  employeeFirstName: "Elmo",
  employeeLastName: "Muppet",
  employeeWage: 2.50,
  employeeStartDate: "11/10/1969",
  employeeNumber: 12345
}; // Lines: 19 - 23, Properties of an object are seperated by comas and not simi-colens

//use a function to place properties into a list
function getEmployeeInfo() {
  return "-- EMPLOYEE INFO --" + "\nFirst Name: " + employee.employeeFirstName + "\nLast Name: " + employee.employeeLastName + "\nWage: " + employee.employeeWage + "\nStart Date: " + employee.employeeStartDate + "\nID Number: " + employee.employeeNumber;
}

//output the list
console.log(getEmployeeInfo(employee)); // Line 32: the argument for the getEmployeeInfo() function needs to be inside of () in order to work
//End Program====================================================================================

/*
Expected output:

Tyler Librandi
Discussion 6.1 - Objects and Built-in Objects
Date: 7/02/2019

-- EMPLOYEE INFO --
First Name: Elmo
Last Name: Muppet
Wage: 2.50
Start Date: 11/10/1969
ID Number: 12345
*/
