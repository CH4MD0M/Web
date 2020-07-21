/*
// ////////////////////////////////////////
// Lecture 120: Example of Asynchronous JavaScript (자바스크립트 비동기 처리의 예)
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

// -- Result --
// Hey there
// The end
// Async Hey there


// ////////////////////////////////////////
// Lecture 121: The Event Loop
// 슬라이드 강의. 코드없음.
*/

// ////////////////////////////////////////
// Lecture 122: Asynchronous with Callback (비동기처리와 콜백)
function getRecipe() {
  setTimeout(() => {
    const recipeID = [523, 884, 432, 974];
    console.log(recipeID);
    // (4) [523, 884, 432, 974]

    setTimeout(
      (id) => {
        const recipe = { title: "Fresh tomato pasta", publisher: "Dom" };
        console.log(`${id}: ${recipe.title} : ${recipe.publisher}`); // 432: Fresh tomato pasta

        setTimeout(
          (id, publisher) => {
            const recipe2 = { title: "Italian Pizza" };
            console.log(`${id}: ${recipe2.title} : ${publisher}`);
          },
          1500,
          recipeID[3],
          recipe.publisher
        );
      },
      1500,
      recipeID[2]
      // id의 인자로 값을 전달.(콜백함수)
    );
  }, 1500);
}
getRecipe();
