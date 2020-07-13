/*
/////////////////////////////////////////////
// Lecture 104: let and const

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
// Lecture 105: Blocks and IIFEs

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


/////////////////////////////////////////////
// Lecture 106: Strings

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
            
            

/////////////////////////////////////////////
// Lecture 107: Arrow funcrtions
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
  return 2020 - el;
});

console.log(ages5);

// ES6
// const ages6 = years.map((el) => 2020 - el);

let ages6 = years.map((el) => 2020 - el);
// 밑의 예제를 위해 let으로 변경.
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});

console.log(ages6);


/////////////////////////////////////////////
// Lecture 108: Arrow funcrtions 2

// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  },
};
box5.clickMe();

// ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
// box6.clickMe();


const box66 = {
  color: "green",
  position: 1,
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
box66.clickMe();


/////////////////////////////////////////////
function Person(name) {
  this.name = name;
}

var friends = ["Bob", "Jane", "Mark"];

// ES5
Person.prototype.myFriends5 = function (friends) {
  // var self = this;
  var arr = friends.map(
    function (el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );

  console.log(arr);
};

new Person("John").myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((el) => `${this.name} is friends with ${el}`);

  console.log(arr);
};

new Person("Mike").myFriends6(friends);


/////////////////////////////////////////////
// Lecture 109: Destructuring

// ES5
var john = ["John", 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ["John", 26];
console.log(name);
console.log(age);

const obj = {
  firstName: "John",
  lastName: "Smith",
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function clacAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = clacAgeRetirement(1990);
console.log(age2);
console.log(retirement);


/////////////////////////////////////////////
// Lecture 110: Arrays
const boxes = document.querySelectorAll(".box");

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = "dodgerblue";
});

// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach((cur) => (cur.style.backgroundColor = "orangered"));

/////////////////////////////////////////////

// ES5
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box orange") {
    break;
    // continue;
  }
  boxesArr5[i].textContent = "I changed to Orange!";
}

// ES6
for (const cur of boxesArr6) {
  if (cur.className.includes("orange")) {
    continue;
  }
  cur.textContent = "I changed to Orange!";
}

/////////////////////////////////////////////

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
  return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true)); // true인 index를 출력: 3
console.log(ages[full.indexOf(true)]); // ages[3]

// ES6
console.log(ages.findIndex((cur) => cur >= 18));
console.log(ages.find((cur) => cur >= 18));


/////////////////////////////////////////////
// Lecture 111: Spread operator
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
// apply 메서드는 배열로 인자를 넣는다.
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

// ES6
// 배열을 불러오는 것이 가능.
const sum3 = addFourAges(...ages);
console.log(sum3);

/////////////////////////////////////////////
// 배열을 합치는 것이 가능. (join)
const familySmith = ["Jhon", "Jane", "Mark"];
const familyMiler = ["Miler", "Bob", "Ann"];
const bigFamily = [...familySmith, "Lily", ...familyMiler];
// spread 연산자 중간에 배열 요소를 추가하는 것이 가능.
console.log(bigFamily);

/////////////////////////////////////////////
// spread 연산자는 배열뿐 아니라 nodeList에서도 사용이 가능.
const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];
Array.from(all).forEach((cur) => (cur.style.color = "purple"));

/////////////////////////////////////////////
// Lecture 112: Rest parameters

// ES5
function isFullAge5() {
  // console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function (cur) {
    console.log(2016 - cur >= 18);
  });
}
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
  years.forEach((cur) => console.log(2016 - cur >= 18));
}
// isFullAge6(1990, 1999, 1965);

/////////////////////////////////////////////

// ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);
  // slice 메서드를 사용하여 배열의 1번 index를 출력하지 않고 limit인자로 사용.
  
  argsArr.forEach(function (cur) {
    console.log(2016 - cur >= limit);
  });
}
isFullAge5(21, 1990, 1999, 1965);

// ES6
function isFullAge6(limit, ...years) {
  years.forEach((cur) => console.log(2016 - cur >= limit));
}
isFullAge6(19, 1990, 1999, 1965);


/////////////////////////////////////////////
// Lecture 113: Default parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  // 기본값 설정.
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  
  nationality === undefined
  ? (nationality = "american")
  : (nationality = nationality);
  
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

// ES6
function SmithPerson(
  firstNmae,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
  }
  
  var john = new SmithPerson("John", 1990);
  var emily = new SmithPerson("Emily", 1983, "DIaz", "spnish");
  // 기본 값 설정에 오버라이딩됨.
*/

/////////////////////////////////////////////
// Lecture 114: Maps

const question = new Map();

question.set(
  "question",
  "What is the official name of the latest major Javascript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer:D");
question.set(false, "Wrong, please try again!");

console.log(question.get("question"));

// console.log(question.size);

// if (question.has(4)) {
//  question.delete(4);
//  console.log("Answer 4 is here");
// }

// question.clear();

// question.forEach((value, key) =>
// console.log(`This is ${key}, and it's set to ${value}`)
// );

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Write the correct answer"));
console.log(question.get(ans === question.get("correct"))); // === console.log(question.get(true);
// ( 3(ans) = 3(correct) ) --> true
