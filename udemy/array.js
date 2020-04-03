/*****************************
 * Arrays
 */

var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);
//이런 방식의 선언은 사용하지 않는 것이 좋음.

console.log(names[2]);
console.log(names.length);

//배열의 초기화
names[1] = "Ben";
//배열의 마지막에 데이터 추가
names[names.length] = "Mary";
console.log(names);

//Different data types
var john = ["John", "Smith", 1990, "designer", false];

// push 함수 : 배열의 마지막에 데이터 추가
john.push("blue");

// unshift 함수 : 배열의 첫 번째 데이터 추가
john.unshift("Mr");
console.log(john);

// pop 함수 : 배열의 마지막 데이터 삭제
john.pop();
john.pop();
console.log(john);

// shift 함수 : 배열의 첫 번째 데이터 삭제
john.shift();
console.log(john);

// indexof 함수 : 데이터 의 배열 위치 출력
// 값이 존재하지 않으면 -1을 return
console.log(john.indexOf(1990));

// indexof를 이용한 삼항연산
var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer";
console.log(isDesigner);
