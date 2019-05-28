/*
  Title: Types Values and Variables
  Author: Cory Gilliam
  Date: May , 2019
  Modified By: Cory Gilliam
  Description: This program will output the names, address, payrate, and hire date of 3 employees.
*/

// Start program

/*
  Comments go here
    * Create 3 employee records with the following fields
        (this means there should be 3 firstName variables, 3 lastName variables,
        3 address variables, 3 payRate variables, and 3 hireDate variables)
        - firstName
        - lastName
        - address
        - payRate
        - hireDate
    * Format the payRate to one decimal place
    * Format the hireDate using "slashes"
    * Run and test the program and make sure the output matches what I have
    * When you are happy with the output stage, commit, and push your work to GitHub
*/

/*
  Expected output:
  Output, {f.name} {l.name}, {address}, Pay: ${int w/two dec}, Hire Date: {date}, in the console.
*/

// Variable declaration and assignment
var firstName1 = 'April';
var lastName1 = 'Stark';
var address1 = '123 Main St';
var payRate1 = 10.00;
var hireDate1 = new Date(2010, 11, 28);

var firstName2 = 'May';
var lastName2 = 'Lang';
var address2 = '456 Main St';
var payRate2 = 10.75;
var hireDate2 = new Date(2016, 0, 8);

var firstName3 = 'June';
var lastName3 = 'Banner';
var address3 = '789 Main St';
var payRate3 = 11.25;
var hireDate3 = new Date(2015, 5, 2);

// Output
// Employee 1
console.log(firstName1 + ' ' + lastName1 + ', ' + address1 + ', Pay: $' + payRate1.toFixed(2) + ', Hire Date: '
+ (hireDate1.getMonth() + 1) + '/' + hireDate1.getDay() + '/' + hireDate1.getFullYear());
// Employee 2
console.log(firstName2 + ' ' + lastName2 + ', ' + address2 + ', Pay: $' + payRate2.toFixed(2) + ', Hire Date: '
+ (hireDate2.getMonth() + 1) + '/' + hireDate2.getDay() + '/' + hireDate2.getFullYear());
// Employee 3
console.log(firstName3 + ' ' + lastName3 + ', ' + address3 + ', Pay: $' + payRate3.toFixed(2) + ', Hire Date: '
+ (hireDate3.getMonth() + 1) + '/' + hireDate3.getDay() + '/' + hireDate3.getFullYear());

// End program
