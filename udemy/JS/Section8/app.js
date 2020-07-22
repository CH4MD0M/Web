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
        var recipe = {
          id: 432,
          title: "Fresh tomato pasta",
          publisher: "Dom",
        };

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
        var recipe = {
          title: "Italian pizza",
          publisher,
        };

        resolve(recipe);
      },
      1500,
      publisher
    );
  });
};
// async/await을 위한 주석처리.

// getIDs
//   .then((IDs) => {
//     console.log(IDs);
//     // (4) [524, 883, 432, 974]
//     return getRecipe(IDs[2]);
//   })

//   .then((recipe) => {
//     console.log(recipe);
//     // { id: 432, title: "Fresh tomato pasta", publisher: "Dom"}

//     return getRelated(recipe.publisher);
//   })

//   .then((recipe) => {
//     console.log(recipe);
//     // { title: "Italian Pizza", publisher : "Dom" }
//   })

//   .catch((error) => {
//     console.log("Error!!");
//   });

// // ////////////////////////////////////////
// // Lecture 124: Async/Await

async function getRecipesAW() {
  const IDs = await getIDs;
  // -> getIDs의 resolve 값을 IDs변수에 저장한다.

  // await에서 Promise가 수행될 때까지 코드 실행이 중지된다.
  // await은 Promise의 resolve 값이다.

  console.log(IDs);

  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);

  const related = await getRelated(recipe.publisher);
  console.log(related);

  return recipe;
}
getRecipesAW().then((result) => console.log(result));


// // ////////////////////////////////////////
// // Lecture 125: AJAX
// AJAX : Asynchronous JavaScript And Xml
// API : Application Programming Interface
// API 자체가 서버는 아님. ( 서버의 일부 )
// 1. Your own API, for data coming from your own server.
// 2. 3rd-party APIs.( Google Map, Weather data, Mivies data, Send email or SMS)

// // ////////////////////////////////////////
// // Lecture 126: Making AJAX calls with Fetch and Promise(Fetch와 Promise로 AJAX 가져오기)
function getWeather(woeid) {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
  )
    .then((result) => {
      // console.log(result);
      return result.json();
    })
    .then((data) => {
      // console.log(data);
      const today = data.consolidated_weather[0];
      console.log(
        `${data.title}의 최저기온은 ${today.min_temp}, 최고기온은 ${today.max_temp} 입니다.`
      );
    })

    .catch((error) => {
      console.log(error);
    });
}
getWeather(1132599);
getWeather(44418);
*/

async function getWeatherAW(woeid) {
  try {
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    );

    const data = await result.json();
    const today = data.consolidated_weather[0];
    const tomorrow = data.consolidated_weather[1];
    console.log(
      "---------------------------------------------------------------------"
    );
    console.log(
      `${data.title}의 최저기온은 ${today.min_temp}, 최고기온은 ${today.max_temp} 입니다.`
    );
    console.log(
      `내일 ${data.title}의 최저기온은 ${tomorrow.min_temp}, 최고기온은 ${tomorrow.max_temp} 입니다.`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
getWeatherAW(1132599);

let dataLondon;
getWeatherAW(44418).then((data) => {
  dataLondon = data;
  console.log(`${data.title}의 data`, dataLondon);
});
