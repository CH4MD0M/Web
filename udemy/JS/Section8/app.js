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
        console.log(`${id}: ${recipe.title} : ${recipe.publisher}`);
        // 432: Fresh tomato pasta : Dom

        setTimeout(
          (publisher) => {
            const recipe2 = { title: "Italian Pizza", publisher };
            console.log(`${recipe2.title} : ${recipe2.publisher}`);
            // Italian Pizza : Dom
          },
          1500,
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

*/

// ////////////////////////////////////////
// Lecture 123: Callback Hell and Promise
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
  }, 1500);
});

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        var recipe = { title: "Fresh tomato pasta", publisher: "Dom" };
        resolve(recipe);
      },
      1500,
      recID
    );
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (pub) => {
        var recipe = { title: "Italian Pizza", publisher };
        resolve(recipe);
      },
      1500,
      publisher
    );
  });
};

getIDs
  .then((IDs) => {
    console.log(IDs);
    // (4) [524, 883, 432, 974]
    return getRecipe(IDs[2]);
  })

  .then((recipe) => {
    console.log(recipe);
    // { title: "Fresh tomato pasta", publisher: "Dom"}
    return getRelated(recipe.publisher);
  })

  .then((recipe) => {
    console.log(recipe);
    // { title: "Italian Pizza", publisher : "Dom"}
  })

  .catch((error) => {
    console.log("Error!!");
  });
