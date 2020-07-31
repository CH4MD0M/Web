import { element, elements, clearLoader } from "./base";
import { Fraction } from "fractional";

const formatCount = (count) => {
  if (count) {
    // count = 2.5 ---> 2 1/2
    // count = 0.5 ---> 1/2
    const [int, dec] = count
      .toString()
      .split(".")
      .map((el) => parseInt(el, 10));
    // 숫자를 문자열로 변환(toString)하고
    // "."을 기준으로 나눠서 배열에 저장(split)
    // 이 배열(문자열)을 숫자로 형변환(parseInt)해서
    // int, dec에 저장.

    // 소수점이 없는 경우
    if (!dec) return count;

    // 정수가 0인 경우
    // int: 0
    // dec: 5
    if (int === 0) {
      const fr = new Fraction(count);
      return `${fr.numerator}/${fr.denominator}`;
    } else {
      const fr = new Fraction(count - int);
      return `${int} ${fr.numerator}/${fr.denominator}`;
    }
  }
  return "?";
};

// 재료(ingredient)부분 html 추가
//
const createIngredient = (ingredient) => `
    <li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__count">${formatCount(ingredient.count)}</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">${ingredient.unit}</span>
                ${ingredient.ingredient}
            </div>
    </li>
    `;

export const clearRecipe = () => {
  elements.recipe.innerHTML = "";
};

export const renderRecipe = (recipe) => {
  // recipeView.renderRecipe(state.recipe);
  // recipe = state.recipe
  // state.recipe = new Recipe(id);

  /*
    *Recipe 클래스
    author: "101 Cookbooks"
    id: "47746"
    img: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
    ingredients: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
    servings: 4
    time: 30
    title: "Best Pizza Dough Ever"
    url: "http://www.101cookbooks.com/archives/001199.html"
  */

  const markup = `
            <figure class="recipe__fig">
                <img src="${recipe.img}" alt="${
    recipe.title
  }" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.title}</span>
                </h1>
            </figure>

            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${
                      recipe.time
                    }</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${
                      recipe.servings
                    }</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                ${
                  recipe.ingredients.map((el) => createIngredient(el)).join("")
                  /*
                  
                        * recipe.ingredients
                        0: {count: 4.5, unit: "cup", ingredient: "unbleached high-gluten, bread, or all-purpose flour, chilled"}
                        1: {count: 1.75, unit: "tsp", ingredient: "salt"}
                        2: {count: 1, unit: "tsp", ingredient: "instant yeast"}
                        3: {count: 0.25, unit: "cup", ingredient: "olive oil "}
                        4: {count: 1.75, unit: "cup", ingredient: "water, ice cold "}
                        5: {count: 1, unit: "", ingredient: "semolina flour or cornmeal for dusting"}

                        

                        // Recipe.js에서 ingredients에 objIng를 return하면 위와 같은 형태이다.
                        // 각 요소들을 createIngredient함수의 매개변수로 보내 함수를 실행한다.
                        // 함수를 실행한 html코드들을 (<li>태그들을) join()한 값을 저장한다.

                    */
                }
                </ul>

                <button class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${
                      recipe.author
                    }</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="${
                  recipe.url
                }" target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </a>
            </div>
    `;

  elements.recipe.insertAdjacentHTML("afterbegin", markup);
};
