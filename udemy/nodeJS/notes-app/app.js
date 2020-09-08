const fs = require("fs");
fs.writeFileSync("notes.txt", "My name is Ch4md0m.");

fs.appendFileSync("notes.txt", " (data to append)");
