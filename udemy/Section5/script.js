// 함수 생성자
/*
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher",
};

// 프로토타입
var Person = function (name, yearOfBirth, job) {
  // 프로토타입 속성
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// 프로토타입에 속성을 추가할수도 있지만,
// 일반적이지 않음.
Person.prototype.lastName = "Smith";

// 프로토타입에 메서드 추가.
Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// * john의 프로토타입은 Person의 프로토타입 속성과 같다.
// john.__proto__===Person.prototype
// true

// * job은 john이 상속받은 것이다.
// john.hasOwnProperty('job')
// true

// * lastName은 john의 소유가 아님.
// john.hasOwnProperty('lastName')
// false

// * john은 Person 함수 생성자를 사용하여 만들어졌기 때문에
//   Person의 isntance이다.
// john instanceof Person
// true

// Object.create
var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" },
});
