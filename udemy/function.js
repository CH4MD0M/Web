// * Function Statements and Expressions

/* 
function calculateAge(birthYear ) {
    //birthYear은 함수로 전달할 인수
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilREtirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilREtirement(1990, "John");
yearsUntilREtirement(1948, "Mike");
yearsUntilREtirement(1969, "Jane");
*/

/******************************
 * Function Statements and Expressions
 */

// Function declaration
// function(job, firstName) {};

//function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code.";
    case "driver":
      return firstName + " drives a cab in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else.";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mike"));
