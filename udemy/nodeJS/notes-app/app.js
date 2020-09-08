/*
// //////////////////////////////
// 9. Importing Core Module
const fs = require("fs");
fs.writeFileSync("notes.txt", "My name is Ch4md0m.");
fs.appendFileSync("notes.txt", " (data to append)");


// //////////////////////////////
// 10. Importing Own Files
// Variable
const firstName = require("./utils");
const add = require("./utils");
// const name = "Chamdom";
console.log(firstName);

// Function
const sum = add(1, 2);
console.log(sum);

//Challenge
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);

// //////////////////////////////
// 11. Importing NPM Module
const validator = require("validator");

// isEmail
console.log(validator.isEmail("chamdom@example.com")); // true
console.log(validator.isEmail("example.com")); // false

// isURL
console.log(validator.isURL("https:/mead.io")); // false
*/

// //////////////////////////////
// 12. Printing in Color
const chalk = require("chalk");
const greenMsg = chalk.yellow.bgRed("Success");
console.log(greenMsg);
