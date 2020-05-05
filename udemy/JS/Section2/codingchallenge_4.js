var john = {
  name: "John",
  weight: 110,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

var mark = {
  name: "Mark",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
john.calcBMI();
mark.calcBMI();
// if(john.calcBMI() > mark.calcBMI())
if (john.bmi > mark.bmi) {
  console.log(john.bmi + " / " + mark.bmi);
  console.log("john이 더 뚱뚱");
} else if (john.bmi < mark.bmi) {
  console.log(john.bmi + " / " + mark.bmi);
  console.log("mark가 더 뚱뚱");
} else {
  console.log(john.bmi + " / " + mark.bmi);
  console.log("Same");
}
