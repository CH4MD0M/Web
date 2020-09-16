const fs = require("fs");

console.log("before: ", process.memoryUsage().rss);

const readStream = fs.createReadStream("./big.txt");
const writeStredam = fs.createWriteStream("./big3.txt");
readStream.pipe(writeStredam);
readStream.on("end", () => {
  console.log("stream: ", process.memoryUsage().rss);
});
