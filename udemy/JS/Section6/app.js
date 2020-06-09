// BUDGET CONTROLLER
var budgetController = (function () {
  // Some code
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };

  return {
    getinput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // inc나 exp가 될 수 있음.
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
      // 함수 외부에서 DOMstrings를 접근할 수 없기 때문에,
      // 접근 가능하도록 객체로 저장한다.
    },
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function () {
    // 1. Get the field input data
    var input = UICtrl.getinput();
    console.log(input);

    // 2. Add the utem to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  document
    .querySelector(DOM.inputButton) // 외부에서 호출하므로 DOMstrings가 아닌 변수 DOM
    .addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
