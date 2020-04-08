/*****************************
 * Objects and properties
 */
var john = {
  // john과 같은 것을 객체(object)라고 한다.
  firsstName: "John",
  //   firstName과 같을 것은 속성(propreties)라고 한다.
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};
console.log(john.firsstName);
// object.properties 방식으로 출력.
console.log(john["lastName"]);
// 배열처럼 출력 가능.
var x = "birthYear";
console.log(john[x]);
// 변수에 정의하여 출력 가능.

// 객체의 속성 변경
john.job = "designer";
john.isMarried = true;
console.log(john);

// 객체의 초기화
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane.lastName = "Smith";
// jane["lastName"] = "Smith";
console.log(jane);
