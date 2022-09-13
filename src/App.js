// /* eslint-disable */ // warning 메시지 없애주는거
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, set글제목] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, set따봉] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0);

  function 글제목변경() {
    let copy = [...글제목];
    copy[0] = "여자 코트 추천";
    set글제목(copy);
  }

  function 오름차순정렬() {
    let copy = [...글제목];
    copy.sort();
    set글제목(copy);
  }

  function modalDetail() {
    setModal(!modal);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={글제목변경}>제목 변경</button>

      <button onClick={오름차순정렬}>가나다순 정렬</button>

      {/* <div className="list">
        <h4>
          {글제목[0]}
          <sapn onClick={플러스함수}>👍</sapn> {따봉}
        </h4>

        <p>9월 9일 발행</p>
      </div> */}

      {/* <div className="list">
        <h4 onClick={modalDetail}>{글제목[2]}</h4>
        <p>9월 11일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {글제목[i]}
            </h4>
            <p
              onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                set따봉(copy);
              }}
            >
              👍 {따봉[i]}
            </p>
            <p>9월 10일 발행</p>
          </div>
        );
      })}

      {modal === true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글수정</button>
    </div>
  );
}

export default App;
