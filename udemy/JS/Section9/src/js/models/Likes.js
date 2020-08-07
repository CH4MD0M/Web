export default class Likes {
  constructor() {
    this.likes = [];
  }

  // like 추가
  addLike(id, title, author, img) {
    const like = { id, title, author, img };
    this.likes.push(like);

    // Persist data in localStorage
    this.persistData();

    return like;
  }

  // like 삭제
  deleteLike(id) {
    const index = this.likes.findIndex((el) => el.id === id);
    this.likes.splice(index, 1);

    // Persist data in localStorage
    this.persistData();
  }

  // Like 표시여부 확인
  isLiked(id) {
    return this.likes.findIndex((el) => el.id === id) !== -1;
    // likes 배열에서 id가 전달받은 id와 일치하는 index가 1이 아닌것을 return.
  }

  getNumLikes() {
    return this.likes.length;
  }

  persistData() {
    localStorage.setItem("likes", JSON.stringify(this.likes));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem("likes"));

    // Restoring likes from the localstorage
    if (storage) this.likes = storage;
  }
}
