// 3.5.4 qurystring
const url = require("url");
const querystring = require("querystring");

const parseUrl = url.parse(
  "https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
const query = querystring.parse(parseUrl.query);
console.log("querystring.parse():", query);
console.log("querystring.stringfy():", querystring.stringify(query));
