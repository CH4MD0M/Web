import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Another Heading</h1>
        <p>This is really working!</p>
      </div>
      // <h1>Another Heading</h1> --> 하나의 루트 요소를 반환하기 때문에 루트 요소안에 들어있어야 함.
      // html처럼 보이지만 html이 아니라 jsx이다.
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", "null", "Hi, I'm a React App!!"));
    // 위의 jsx가 실제로 render되는 것.
  }
}

export default App;
