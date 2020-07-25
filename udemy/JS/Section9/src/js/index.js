import Search from "./models/Search";

/**  Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
  // 1) View에서 query를 가져옴.
  const query = "pizza"; //TODO

  if (query) {
    // 2) New search object and add to state.
    state.search = new Search(query);

    // 3) Prepare UI for results.

    // 4) Search for recipes.
    await state.search.getResults();
    // getResults()함수가 async 함수로 비동기함수이기 때문에,
    // await을 작성한다.

    // getResults()함수는 promise를 반환하는 async함수이기 때문에,
    // getResults()함수를 호출하는 controlSearch 함수도 async함수로 작성한다.

    // 5) render results on UI.
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
