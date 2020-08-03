import uniqid from "uniqid";

export default class List {
  constructor() {
    this.items = [];
  }

  addItem(count, unit, ingredient) {
    const item = {
      id: uniqid(),
      count,
      unit,
      ingredient,
    };
    this.items.push(item);

    return item;
  }

  deleteItem(id) {
    // Array.prototype.slice()
    // Syntax: arr.slice([begin[, end]])
    // [2,4,8] splice(1,2); -> return [4,8] original array is [2]
    // splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나
    // 새 요소를 추가하여 배열의 내용을 변경하고, 제거한 요소를 담은 배열을 return한다.
    // 원본배열이 바뀐다.

    // Array.prototype.splice()
    // Styntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    // [2,4,8] slice(1,2); -> return 4 original array is [2,4,8]
    // slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한
    // 얕은 복사본을 새로운 배열 객체로 return한다.
    // 원본 배열은 바뀌지 않는다.

    const index = this.items.findIndex((el) => el.id === id);
    // items 안에는 item object'들'이 있다.
    // 그 중에서 인자로 받은 id값을 찾아 삭제
    this.items.splice(index, 1);
  }

  updateCount(id, newCount) {
    this.items.find((el) => el.id === id).count = newCount;
  }
}
