import axios from "axios"; // 에디터가 경로를 스스로 알아냄.

async function getResults(query) {
  try {
    // fetch는 오랜 된 브라우저에서는 인식되지 않을 수 있다.
    // --> axios를 사용.
    const res = await axios(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
getResults("pizza");
