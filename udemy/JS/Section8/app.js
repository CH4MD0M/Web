// ////////////////////////////////////////
// Lecture 120: Example of Asynchronous JavaScript
const second = () => {
  // 동기식 : 코드 한 줄씩 코드에 나타나는 순서대로 읽음.
  //   console.log("Second");
  setTimeout(() => {
    console.log("Async Hey there");
  }, 2000);
};

const first = () => {
  console.log("Hey there");
  second();
  console.log("The end");
};
first();
