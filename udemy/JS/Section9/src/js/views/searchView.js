import { elements } from "./base";

// searchInput: document.querySelector(".search__field")
export const getInput = () => elements.searchInput.value;

// searchInput 초기화
export const clearInput = () => {
  elements.searchInput.value = "";
};

// searchList 초기화
export const clearResults = () => {
  elements.searchList.innerHTML = "";
};

// searchList 제목 말줄임.
const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    // return the result
    return `${newTitle.join(" ")} ...`;
  }
  return title;
};

// 검색결과를 html(searchList)에 추가
const renderRecipe = (recipe) => {
  // recipe = 0,1,2,3,4,5...
  const markup = ` 
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
  elements.searchList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = (recipes) => {
  // recipes = state.search.res.data.recipes

  console.log(recipes);
  // (28) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, ...]
  recipes.forEach(renderRecipe);
  // recipes(=Search.js의 this.result)배열을 forEach함수로 순회하면서
  // renderRecipe함수에 전달.
};
