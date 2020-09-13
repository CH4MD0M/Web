// 3.4.5 module, exports, require
console.log(this);
console.log(this === module.exports);
console.log(this === exports);
function whatIsThis() {
  console.log("function", this === exports, this === global);
}
whatIsThis();
