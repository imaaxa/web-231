// Declare a "Global" variable & assign it a numerical value
var numberToAdd = 3;

function outterFunction() {
  // Declare a "Local" variable for outterFunction & assign a numerical value
  var outterValue = 15;

  function innerFunction() {
    // Declare a "Local" variable for innerFunction & assign a numerical value
    var innerValue = 10;

    // Print out the values of the function variables
    console.log('Outter Function Value: ' + outterValue + ', Inner Function Value: ' + innerValue);

    // Add the "Global" variable to both outterValue, and innerValue variables
    outterValue = outterValue + numberToAdd;
    innerValue = innerValue + numberToAdd;
  } // End of outterFunction

  // Return the function: innerFunction back
  return innerFunction; //<- notice no () at the end

} // End of outterFunction

var firstAssignment = outterFunction();
// Once outterFunction is complete, outterValue is no longer avaiable to you.

var secondAssignment = outterFunction();
// Once outterFunction is complete, outterValue is no longer avaiable to you.


console.log('\n\nLet check out the firstAssignment\n');
// Now you execute the function stored inside the firstAssignment variable
firstAssignment();
firstAssignment();
firstAssignment();

/* What is happening:

The innerFunction we are executting here has access to the memory location of the outterValue variable that was created earier, when it was assigned it to firstAssignment. You do not have access to it, but it does.

Each time you execute the function, it changes the value stored in that memory location.

Now innerValue is redeclared each time you execute the function and set to a value of 10. This happens everytime the function is executted. (Basicly, it will aways be 10.)

After console.log is fired, the outterValue, & innerValue values are updated and the function terminates.

Notice how this closure has access to all three variable scopes:
  * it's own scope
  * the scope of the function it is closed inside of
  * the Global scope.

  scope: is the bounds of where variables can be accessed.
*/

console.log('\n\nLet check out the secondAssignment\n');
// Now you execute the function stored inside the secondAssignment variable
secondAssignment();
/* In this function execution:
This assignment of innerFunction, is being executted.

It has access to the memory location of the outterValue variable that was created earier. This memory location is different from the one firstAssignment created. The two are completely seperate.

So when you change the outterValue variable in secondAssignment, it has no effect on the the outterValue variable created by firstAssignment.
*/

// Based on the example at: https://www.freecodecamp.org/news/javascript-closures-simplified-d0d23fa06ba4/
