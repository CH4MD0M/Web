// 3.5.3 url
const url = require("url");

const { URL } = url;
const myURL = new URL("https://github.com/CH4MD0M/Web/tree/master/Node.js");
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("------------------------------");
const parseUrl = url.parse(
  "https://github.com/CH4MD0M/Web/tree/master/Node.js"
);
console.log("url.parse():", parseUrl);
console.log("url.format():", url.format(parseUrl));
