var john = {
  // john과 같은 것을 객체(object)라고 한다.
  firsstName: "John",
  //   firstName과 같을 것은 속성(propreties)라고 한다.
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    var date = new Date();
    date = date.getFullYear();
    this.age = date - this.birthYear;
    // this는 객체를 의미한다.
    // age가 포함되어 있는 객체(john)를 의미.
    // 여기서는 john.birthYear을 의미함.
  },
};

john.calcAge();
console.log(john.age);
