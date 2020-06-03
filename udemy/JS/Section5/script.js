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

///////////////////////////////////
// 함수를 인수로 전달
var years = [1990, 1965, 1937, 200, 1998];

function arrayCalc(arr, func) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(func(arr[i]));
    }
    return arrRes;
}

// 콜백 함수(1)
function calculateAge(ele) {
    return 2020 - ele;
}

// 콜백 함수()
function isFullAge(el) {
    return el >= 18;
}

// 콜백 함수(3)
function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - 0.67 * el);
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

///////////////////////////////////
// 함수를 반환하는 함수
function interviewQuestion(job) {
    if (job === "designer") {
        return function (name) {
            console.log(name + ", can you please explain what UX design is?");
        };
    } else if (job === "teacher") {
        return function (name) {
            console.log("What subject do you teach, " + name + "?");
        };
    } else {
        return function (name) {
            console.log("Hello " + name + ", what do you do?");
        };
    }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("Jane");

interviewQuestion("designer")("Mark");
*/

///////////////////////////////////
// 즉시 실행 함수 표현 (IIFE: Immediately Invoked Functions Expressions)
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// IIFE Function
var result = (function () {
  var score = Math.random() * 10;
  return console.log(score >= 5);
})();

result;
