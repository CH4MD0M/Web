import axios from "axios"; // 에디터가 경로를 스스로 알아냄.

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      // fetch는 오랜 된 브라우저에서는 인식되지 않을 수 있다.
      // --> axios를 사용.
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
      );

      this.result = res.data.recipes;
      //   console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
