// 3.8 예외 처리하기
const fs = require("fs").promises;

setInterval(() => {
  fs.unlink("./abcdefg.js");
}, 1000);
