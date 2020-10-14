// 3.5.5.1 단방향 암호화
const crypto = require("crypto");

console.log(
  "base64:",
  crypto.createHash("sha512").update("비밀번호").digest("base64")
);
console.log("--------------------------------------------------");
console.log(
  "hex:",
  crypto.createHash("sha512").update("비밀번호").digest("hex")
);
console.log("--------------------------------------------------");
console.log(
  "base64:",
  crypto.createHash("sha512").update("다른 비밀번호").digest("base64")
);