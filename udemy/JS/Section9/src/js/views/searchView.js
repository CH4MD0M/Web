import { elements, elementStrings, renderLoader } from "./base";

// searchInput: document.querySelector(".search__field")
export const getInput = () => elements.searchInput.value;

// searchInput 초기화
export const clearInput = () => {
  elements.searchInput.value = "";
};

// searchList 초기화
export const clearResults = () => {
  elements.searchList.innerHTML = "";
  elements.searchResPages.innerHTML = "";
};

/*
* Example:
// 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
*/
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

// 다음 페이지 버튼
const createButton = (page, type) => `
<button class="btn-inline results__btn--${type}" data-goto=${
  type === "prev" ? page - 1 : page + 1
}>
        <span>Page ${type === "prev" ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${
              type === "prev" ? "left" : "right"
            }"></use>
        </svg> 
    </button>
  `;

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);
  // 총 페이지 수 = API 결과 개수 / 각 페이지 출력 개수
  // Math.ceil() 반올림.

  let button;
  if (page === 1 && pages > 1) {
    // only next button
    button = createButton(page, "next");
  } else if (page < pages) {
    // Both buttons
    button = `
            ${createButton(page, "prev")}
            ${createButton(page, "next")}
    `;
  } else if (page === pages && pages > 1) {
    // only prev button
    button = createButton(page, "prev");
  }
  elements.searchResPages.insertAdjacentHTML("afterbegin", button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  // recipes = state.search.res.data.recipes

  // console.log(recipes);
  // (28) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, ...]

  /* -- RENDER RESULTS OF CURRENT PAGE -- */
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;
  // slice()메서드는 'end - 1'까지 출력한다.
  // ex) page = 1
  //     start = 0
  //     end = 10 (9까지의 배열만 출력하므로 10(0 ~ 9)개가 출력됨.)

  recipes.slice(start, end).forEach(renderRecipe);
  // slice()메서드를 사용하여 한 페이지에 출력되는 개수를 10개로 지정.

  // recipes(=Search.js의 this.result)배열을 forEach함수로 순회하면서
  // renderRecipe함수에 전달.

  /* -- RENDER PAGINATION BUTTONS -- */
  renderButtons(page, recipes.length, resPerPage);
};
