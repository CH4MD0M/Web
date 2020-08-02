import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
// searchView.js에서 *(all)을 가져오는데 이름을 searchView로 지정(as)
import * as recipeView from "./views/recipeView";
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
  // console.log(id);

  if (id) {
    // Prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    console.log(state.search);
    // Highlight selected search item
    if (state.search) searchView.highLightSelected(id);

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data and parse ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      clearLoader();
      recipeView.renderRecipe(state.recipe);
      // console.log(state.recipe);
      // console.log(state.recipe.ingredients);
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

// Handling recipe Servings control( 인분수 버튼 )
/* 
  servings 버튼은 앱이 실행되었을 때 DOM에 없고
  recipeView가 실행되었을때 나타나는 DOM이므로
  recipe <div> 태그에 eventListener를 걸고 
  target으로 btn_tiny <button>태그를 지정한다.
*/
elements.recipe.addEventListener("click", (e) => {
  if (e.target.matches(".btn-decrease, .btn-decrease *")) {
    // Decrease button is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings("dec");
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches(".btn-increase, .btn-increase *")) {
    // Increase button is clicked

    state.recipe.updateServings("inc");
    recipeView.updateServingsIngredients(state.recipe);
  }
});
