import React, { useState, useEffet } from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from "./DiaryList";
import './App.css';


const dummyList = [
  {
    id:1,
    author:"gdgd",
    content:"ㅎㅇ1",
    emotion:5,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author:"ad",
    content:"ㅎㅇ2",
    emotion:3,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author:"sdf",
    content:"ㅎㅇ3",
    emotion:2,
    created_date: new Date().getTime()
  }
]
function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
