/*
///////////////////////////////////
// 생성자 함수
var john = {
  name: "john",
  yearofBirth: 1990,
  job: "teacher",
};

var Person = function (name, yearofBirth, job) {
  this.name = name;
  this.yearofBirth = yearofBirth;
  this.job = job;
};

Person.prototype.lastName = "Smith";

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearofBirth);
};

var john = new Person("John", 1990, "teacher");

var jane = new Person("jane", 1969, "designer");

var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/
///////////////////////////////////
// 원시값 vs. 객체
// 원기값
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// 객체
var obj1 = {
  name: "John",
  age: 26,
};
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// 함수
var age = 27;
var obj = {
  name: "dom",
  city: "incheon",
};

function change(a, b) {
  a = 30;
  b.city = "Seoul";
}

change(age, obj);

console.log(age);
console.log(obj.city);
