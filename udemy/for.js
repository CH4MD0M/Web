/*****************************
 * Loops and iteration
 */
/*
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}
*/

/*
var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/

//continue & break
var john = ["John", "Smith", 1990, "designer", false, "blue"];

// continue
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

// break
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

// loop backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
