import axios from "axios"; // 에디터가 경로를 스스로 알아냄.

export default class Search {
  constructor(query) {
    this.query = query;
  }

  // API에서 data를 불러와 result변수에 저장
  async getResults() {
    try {
      // fetch는 오랜 된 브라우저에서는 인식되지 않을 수 있다.
      // --> axios를 사용.
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
      );

      this.result = res.data.recipes;
      // console.log(res);
      // res = {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}

      // console.log(this.result);
      // this.result = (28) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, ...]
    } catch (error) {
      alert(error);
    }
  }
}
