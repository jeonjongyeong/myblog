import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, b] = useState([
    "강남 우동 맛집",
    "남자 코트 추천",
    "여자 코트 추천",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>9월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>9월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>9월 11일 발행</p>
      </div>
    </div>
  );
}

export default App;
