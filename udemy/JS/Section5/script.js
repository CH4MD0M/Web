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
var years = [1990, 1965, 1937, 2005, 1998];

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
function isFullAge(ele) {
    return ele >= 18;
}

// 콜백 함수(3)
function maxHeartRate(ele) {
    if (ele >= 18 && ele <= 81) {
        return Math.round(206.9 - 0.67 * ele);
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



///////////////////////////////////
// 클로저
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearofBirth) {
    var age = 2020 - yearofBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
// retirement(66)(1990);

// 클로저 사용하기
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

function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuestion("teacher")("John");


///////////////////////////////////
// Bind, call and apply
var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Ladies and geltle man! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          "years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! what's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer",
};

john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "afternoon");
// john.presentation.apply(emily, ["friendly", "afternoon"]);

var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal();

////////////////
var years = [1990, 1965, 1937, 2005, 1998];

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
function isFullAge(limit, ele) {
  return ele >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullKorea = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullKorea);

/////////////////////////////
// CODING CHALLENGE - 1

(function () {
  // Question 생성자 함수
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  // 질문 display
  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ":" + this.answers[i]);
    }
  };

  // 정답 check
  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer. Try again :)");
    }
  };

  // 생성자 함수 Questiondml 인스턴스(프로토타입)
  var q1 = new Question(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Micheal", "Jonas"],
    2
  );

  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    2
  );

  // 질문 출력
  var questions = [q1, q2, q3];
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();

  // promp에서 입력 받은 값을 string -> int 로 형변환.
  var answer = parseInt(prompt("Please select the correct answer."));

  // 답변 check
  // 생성자 함수 Questions의 인스턴스인 q1, q2, q3를 갖는 questions는
  // 프로토타입 체인으로 인해 Questions의 prototype을 __proto__에 의해 접근할 수 있다.
  questions[n].checkAnswer(answer);
})();
*/

/////////////////////////////
// CODING CHALLENGE - 2

(function () {
  // Question 생성자 함수
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  // 질문 display
  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ":" + this.answers[i]);
    }
  };

  // 정답 check
  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer. Try again :)");
    }
  };

  // 생성자 함수 Questiondml 인스턴스(프로토타입)
  var q1 = new Question(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Micheal", "Jonas"],
    2
  );

  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    2
  );

  function nextQuestion() {
    // 질문 출력
    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    // promp에서 입력 받은 값을 string -> int 로 형변환.
    var answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      // 답변 check
      // 생성자 함수 Questions의 인스턴스인 q1, q2, q3를 갖는 questions는
      // 프로토타입 체인으로 인해 Questions의 prototype을 __proto__에 의해 접근할 수 있다.
      questions[n].checkAnswer(parseInt(answer));
      nextQuestion();
    }
  }
  nextQuestion();
})();
