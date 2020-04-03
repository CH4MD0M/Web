function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (50 >= bill || bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return bill * percentage;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [];
for (let i = 0; i < bills.length; i++) {
  finalValues.push(bills[i] + tips[i]);
}
console.log(tips, finalValues);
