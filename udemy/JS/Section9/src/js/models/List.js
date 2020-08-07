import uniqid from "uniqid";

export default class List {
  constructor() {
    this.items = [];
  }

  // list(state)에 item 추가
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

  // list(state)에서 item 삭제
  deleteItem(id) {
    // id = e.target.closest(".shopping__item").dataset.itemid;
    // e = elements.shopping
    // elements.shopping = document.querySelector(".shopping__list")

    const index = this.items.findIndex((el) => el.id === id);
    // [2,4,8] splice(1, 2) -> returns [4, 8], original array is [2]
    // [2,4,8] slice(1, 2) -> returns 4, original array is [2,4,8]
    this.items.splice(index, 1);
  }

  // 각 item count update
  updateCount(id, newCount) {
    this.items.find((el) => el.id === id).count = newCount;
  }
}
