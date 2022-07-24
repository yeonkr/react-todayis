import { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef(); // 돔 요소에 접근할 수 있는 useRef 
  const contentInput = useRef();

  // 동작이 비슷한 state는 하나로 묶는다.
  const [state, setState] = useState({ 
    author: "",
    content: "",
    emotion: 1,
  })

  const handleChangeState = (e)=> { // input, textarea온체인지에 들어갈 것.
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = () => {
    if(state.author.length < 1){
      // focus 
      authorInput.current.focus(); 
      return ;
    }
    if(state.content.length < 5){
      // focus 
      contentInput.current.focus();
      return;
    }
    alert("저장 성공")
  }

  return (
  <div className="DiaryEditor">
  <h2>🧀 오늘의 기분 🧀 </h2>
  <div>
    <input 
    ref={authorInput}
    name="author"
    value={state.author} 
    onChange={handleChangeState}
    />
  </div>
  <div>
  <textarea 
  ref={contentInput}
  name="content"
  vlaue={state.content} 
  onChange={handleChangeState}
  />
  </div>

  <div> 
    <span> 감정 점수 : </span>
  <select name="emotion" value={state.emotion} onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
  </div>
  <div>
    <button onClick={handleSubmit}>저장하기</button>
  </div>
  </div>
  );
};

export default DiaryEditor;