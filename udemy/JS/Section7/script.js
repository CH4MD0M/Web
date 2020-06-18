/*
// Lecture : let and const

//ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6
// const 는 변경하고 싶지 않은 변수
const name6 = "Jane Smith";
let age = 23;
name6 = "Jane Miller";
console.log(name6);




// ES5
function driverLicense5(passedTest) {
  if (passedTest) {
    console.log(firstNmae); // undefined

    var firstNmae = "John";
    var yearOfBirth = 1990;
  }
  console.log(
    firstNmae +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  );
}

driverLicense5(true);

// ES6
function driverLicense6(passedTest) {
  // console.log(firstNmae); // ReferenceError.

  let firstNmae;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstNmae = "John";
  }
  console.log(
    firstNmae +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  );
}

driverLicense6(true);

// let
let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// var
var i = 23;
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

/////////////////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// console.log(a + b);
console.log(c);

// ES5
(function () {
    var c = 3;
})();

// console.log(c);

*/

/////////////////////////////////////////////
// Lecture: Strings

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function clacAge(year) {
  return 2020 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today, he is " +
    clacAge(yearOfBirth) +
    " years old."
);

// ES6
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${clacAge(
    yearOfBirth
  )} years old. `
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(n.includes(" "));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
