import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      );
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch (error) {
      alert("Something went WRONG :(");
    }
  }

  // 요리시간 계산
  calcTime() {
    // 재료 3개당 15분이 걸린다고 가정.
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }

  // 몇인분 계산
  calcServings() {
    this.servings = 4;
  }

  // 재료 단위 표준화
  parseIngredients() {
    // ingredients의 단위
    const unitsLong = [
      "tablespoons",
      "tablespoon",
      "ounces",
      "ounce",
      "teaspoons",
      "teaspoon",
      "cups",
      "pounds",
    ];

    // 사용할 단위
    const unitsShort = [
      "tbsp",
      "tbsp",
      "oz",
      "oz",
      "tsp",
      "tsp",
      "cup",
      "pound",
    ];

    const units = [...unitsShort, "kg", "g"];

    /*
     ingredients: Array(6)
        0 : "4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled"
        1 : "1 3/4 (.44 ounce) teaspoons salt"
        2 : "1 teaspoon (.11 ounce) instant yeast"
        3 : "1/4 cup (2 ounces) olive oil (optional)"
        4 : "1 3/4 cups (14 ounces) water, ice cold (40F)"
        5 : "Semolina flour OR cornmeal for dusting"
    */

    // ingredients배열을 map()메서드를 사용하여 return값을 newIngredients에 배열로 저장
    const newIngredients = this.ingredients.map((el) => {
      // el은 ingredients배열
      // map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

      // 1) 단위(units)를 통일화
      let ingredient = el.toLowerCase();
      // ingredients의 배열을 소문자로 변환하여 ingredient에 저장한다.
      // 변형시켜 return하기 위해 let으로 선언.

      unitsLong.forEach((unit, i) => {
        // * unitsLong의 배열과 index를 가져오는 것.

        ingredient = ingredient.replace(unit, unitsShort[i]);
        // unitsLong의 unit과 index를 매개변수(parameters)로 가져와
        // ingredient에 있는 unitsLong의 unit을 unitsShort와 바교하여 해당하는 unit을 변경한다.
      });

      // 2) 괄호(parentheses)를 제거
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");
      // 정규표현식. 괄호를 공백(" ")으로 replace.

      // 3) 재료를 카운트, 유닛, 재료로 파싱(구성성분으로 분해)
      const arrIng = ingredient.split(" ");
      // ingredient를 split()메서드를 사용하여 공백(" ")기준으로 문자열을 나눠
      // arrIng에 배열로 저장한다.

      /* 
      *Example:
      // ingredient:  "1  3/4  tsp  salt"
      arrIng: Array(4)
      0: "1"
      1: "3/4"
      2: "tsp"
      3: "salt"
      */
      const unitIndex = arrIng.findIndex((el2) => units.includes(el2));
      // el2는 arrIng배열
      // findIndex()메서드는 판별함수의 만족하는 값이 없으면 -1을 반환한다.
      //   console.log(unitIndex);

      // arrIng배열을 순차 탐색하면서 arrIng에 있는 배열 값이 unitsShort에 있는지 판별.
      // true가 return된 index를 찾아서 unitIndex에 저장.

      let objIng;
      if (unitIndex > -1) {
        // unit이 있는 경우.
        /*
        * Example:
        arrIng: Array(4)
        0: "1"
        1: "3/4"
        2: "tsp"
        3: "salt"
        */
        const arrCount = arrIng.slice(0, unitIndex);

        let count;
        if (arrCount.length === 1) {
          count = eval(arrIng[0].replace("-", "+"));
        } else {
          count = eval(arrIng.slice(0, unitIndex).join("+"));
        }

        objIng = {
          count,
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(unitIndex + 1).join(" "),
        };
      } else if (parseInt(arrIng[0], 10)) {
        // unit은 없지만, 첫 번째 element가 숫자인 경우.
        /*
         * Example:
         arrIng: Array(2)
         0: "1"
         1: "egg"
        */

        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: "",
          ingredient: arrIng.slice(1).join(" "),
        };
      } else if (unitIndex === -1) {
        // unit이 없고, 첫 번째 element가 숫자가 아닌 경우.(재료의 이름만 있는 경우)
        /*
         * Example:
         arrIng: Array(6)
         0: "Semolina"
         1: "flour"
         2: "OR"
         3: "cornmeal"
         4: "for"
         5: "dusting"
        */

        objIng = {
          //   test: arrIng,
          count: 1,
          unit: "",
          ingredient,
        };
      }

      return objIng;
    });
    // console.log(this.ingredients);

    this.ingredients = newIngredients;
    console.log(this.ingredients);
  }
}
