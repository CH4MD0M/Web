// BUDGET CONTROLLER
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
      // 수입(ioncome)이 있을때만 계산
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // data의 갯수가 많아지면 개체를 data갯수만큼 만드는 것은 비효율적.
  // --> 배열에 저장함.

  /*
  var allExpenses = [];
  var allIncomes = [];
  var totalExpenses = 0;
  */

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });
    /*
    0
    ex) [200, 400, 100]
    sum = 0 + 200
    sum = 200 + 600
    sum = 600 + 100 = 700
     */
    data.totals[type] = sum;
  };
  // 입력 받는 값을 하나의 배열에 저장하는 것보다
  // 입력 받는 값을 저장하는 배열을 따로 분리하는 것이 효율적.

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },

    // allItems에 값을 저장하고 그 값으로 totals를 계산하여 배열에 저장.(200609 예상)
    totals: {
      exp: 0,
      inc: 0,
    },

    // income - expenses 값을 저장하기 위한 변수.
    budget: 0,

    // %(백분율)을 저장히기 위한 변수
    percentage: -1,
  };

  return {
    addItem: function (type, des, val) {
      var newItem, ID;

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      // Push it into data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    deleteItem: function (type, id) {
      var ids, index;

      ids = data.allItems[type].map(function (current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    culculateBudget: function () {
      // calculate total income and expenses
      calculateTotal("exp");
      calculateTotal("inc");

      // calculate the budget: income -  expenses
      data.budget = data.totals.inc - data.totals.exp;

      // calculate percentage of income that we spent
      if (data.totals.inc > 0) {
        // 수입(ioncome)이 있을때만 계산
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    getBudget: function () {
      // totals:inc, totals:exp,  budget(inc-exp), percentage
      // 4개를 return하기 위해서 Object(객체)로 return한다.
      return {
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        budget: data.budget,
        percentage: data.percentage,
      };
    },

    calculatePercentages: function () {
      data.allItems.exp.forEach(function (cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function () {
      var allPerc = data.allItems.exp.map(function (cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },

    testing: function () {
      console.log(data);
    },
  };
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
    expensesPercLabel: ".item__percentage",
  };

  var formatNumber = function (num, type) {
    /*
    + 또는 - (before number)
    소수점 2번째 자리까지 표시
    천의 자리마다 ,(comma) 표시

    ex) 
    2310.4567 -> + 2,310.46
    2000 -> + 2,000.00
     */

    var numSplit, int, dec;

    //num = Math.abs(num); // num을 절대값으로 만듦.
    num = num.toFixed(2);
    // 소수점 두번째 자리에서 반올림
    // toFixed는 문자열로 return 한다.

    num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (type === "exp" ? "-" : "+") + " " + num;

    // numSplit = num.split("."); // .(점)을 기준으로 정수와 소수점으로 구분한다.

    // int = numSplit[0]; // 정수부분
    // if (int.length > 3) {
    //   int =
    //     int.substr(0, int.lenght - 3) +
    //     "," +
    //     int.substr(int.lenght - 3, int.length); // input 2310, output 2,310
    // }

    // dec = numSplit[1]; // 소수점 부분
  };

  return {
    getinput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // inc나 exp가 될 수 있음.
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
      };
    },

    // 각 항목의 값을 받아와서 (HTML코드를 추가하여) 출력
    addListItem: function (obj, type) {
      var html, newHtml, element;

      // Create HTML string with placeholder text
      if (type === "inc") {
        element = DOMstrings.incomeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMstrings.expensesContainer;
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace the placeholder text with some actual data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },

    deleteListItem: function (selectorID) {
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
      // JavaScript에서는 요소를 바로 삭제가 불가능하다. => 자식요소만 삭제 가능하다.
      // <div class="item clearfix" id="income-0">를 삭제 하기 위해서는
      // 이것의 부모 노드에서 삭제해야 삭제를 시킬 수 있다.
    },

    clearFields: function () {
      var fields, fieldsArr;
      fields = document.querySelectorAll(
        DOMstrings.inputDescription + "," + DOMstrings.inputValue
      );

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function (current) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    // Budget에서의 백분율
    displayBudget: function (obj) {
      var type;
      obj.budget > 0 ? (type = "inc") : (type = "exp");

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(
        obj.budget,
        type
      );

      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(
        obj.totalInc,
        "inc"
      );

      document.querySelector(
        DOMstrings.expensesLabel
      ).textContent = formatNumber(obj.totalExp, "exp");

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "---";
      }
    },

    // 각 항목에서의 백분율
    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

      // 콜백함수
      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + "%";
        } else {
          current.textContent = "---";
        }
      });
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
  // ///////////////////////////
  // STEUP EVENT
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();

    // 1. 버튼을 클릭했을 때
    document
      .querySelector(DOM.inputButton) // 외부에서 호출하므로 DOMstrings가 아닌 변수 DOM
      .addEventListener("click", ctrlAddItem);

    // 2. enter 키를 눌렀을때
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);
  };

  // ///////////////////////////
  // UPDATE BUDGET
  var updateBudget = function () {
    // 1. Calculate the budget
    budgetCtrl.culculateBudget();

    // 2. Return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    // console.log(budget);
    UICtrl.displayBudget(budget);
  };

  // ///////////////////////////
  // PERCENTAGE
  var updatePercentage = function () {
    // 1. Calculate percentages
    budgetCtrl.calculatePercentages();

    // 2. Read percentage from the budget copntroller
    var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with the new percentage
    UICtrl.displayPercentages(percentages);
  };

  // ///////////////////////////
  // ADD ITEM
  var ctrlAddItem = function () {
    var input, newItem;
    // 1. Get the field input data
    input = UICtrl.getinput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear the fields
      UICtrl.clearFields();

      // 5. Claculate and update budget
      updateBudget();

      // 6. Calculate and update percentage
      updatePercentage();
    } else {
      alert(
        "Please check the decription, value! \n (Do not leave it blank OR 0)"
      );
    }
  };

  // ///////////////////////////
  // DELETE ITEM
  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. delete the item from the data structure
      budgetCtrl.deleteItem(type, ID);

      // 2, Delete the item from th UI
      UICtrl.deleteListItem(itemID);

      // 3. Update and show the new budget
      updateBudget();

      // 4. Calculate and update percentage
      updatePercentage();
    }
  };

  // ///////////////////////////
  // RETURN
  return {
    init: function () {
      console.log("Application has started.");
      UICtrl.displayBudget({
        totalInc: 0,
        totalExp: 0,
        budget: 0,
        percentage: 0,
      });
      UICtrl.formatNumber;
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
