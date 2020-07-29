import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
// searchView.js에서 *(all)을 가져오는데 이름을 searchView로 지정(as)
import { elements, renderLoader, clearLoader } from "./views/base";

/**  Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/* 
-- SEARCH CONTROLLER -- 
*/
const controlSearch = async () => {
  // 1) View에서 query를 가져옴.
  // const query = "pizza";   // TODO
  const query = searchView.getInput();

  if (query) {
    // 2) New search object and add to state.
    state.search = new Search(query);

    // 3) Prepare UI for results.
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      // 4) Search for recipes.
      await state.search.getResults();
      // getResults()함수가 async 함수로 비동기함수이기 때문에,
      // await을 작성한다.

      // getResults()함수는 promise를 반환하는 async함수이기 때문에,
      // getResults()함수를 호출하는 controlSearch 함수도 async함수로 작성한다.

      // 5) render results on UI.
      clearLoader();

      searchView.renderResults(state.search.result);
      // result = res.data.recipes
    } catch (err) {
      alert("Something wrong with the search...");
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    // string(문자열)이 아닌 integer(숫자)로 반환하기 위해
    // parseInt()메서드를 사용.

    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/* 
-- RECIPE CONTROLLER -- 
*/
// const r = new Recipe(47746);
// r.getRecipe();
// console.log(r);

const controlRecipe = async () => {
  // url에서 #뒤의 hash값을 받아옴.
  const id = window.location.hash.replace("#", "");
  console.log(id);

  if (id) {
    // Prepare UI for changes
    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data
      await state.recipe.getRecipe();

      // Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      console.log(state.recipe);
    } catch (err) {
      alert("Error Processing recipe!");
    }
  }
};

// window.addEventListener("hashchange", controlRecipe);
// window.addEventListener("load", controlRecipe);
["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);
