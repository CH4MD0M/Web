// const fs = require("fs");
// fs.writeFileSync("notes.txt", "My name is Ch4md0m.");
// fs.appendFileSync("notes.txt", " (data to append)");

// //////////////////////////////
// 10. Importing Own files
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
