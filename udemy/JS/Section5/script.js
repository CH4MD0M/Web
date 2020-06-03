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
