// 3.6 파일 시스템 접근하기
const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "글이 입력됩니다")
  .then(() => {
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
