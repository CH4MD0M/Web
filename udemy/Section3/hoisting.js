///////////////////////////////////////
// Lecture: Hoisting

/*
 **********함수의 hoisting
 */
function calculateAge(year) {
  console.log(2016 - year);
}
calculateAge(1990);
// 일반적으로 우리가 하는 방식

calculateAge(1990);
function calculateAge(year) {
  console.log(2016 - year);
}
// 함수를 선언하고 실행할 필요가 없음.

// ↓↓↓ 위의 결과가 어떻게 가능한지 설명 ↓↓↓

// 작동하지 않음.
// hoisting은 함수 선언에서만 작동함.
// ↓↓↓ 아래는 함수의 선언이 아닌 변수에 함수를 선언한 것.
// retirement(1956);

var retirement = function (year) {
  console.log(65 - (2016 - year));
};

/*
 **********변수의 hoisting
 */

console.log(age); // undefined.
var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
