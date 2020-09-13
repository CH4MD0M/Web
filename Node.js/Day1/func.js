// 3.3 모듈로 만들기
const { odd, even } = require("./var");

function checkOddOrEven(num) {
  if (num % 2) {
    //홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
