import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';


function App() {
  const [data, setData] = useState({
    name:"",
    age:0,
    date:"",
    programming:""
  })

  const menuBtn = useRef();  //빈 참조변수 생성성
  const sub1Btn = useRef();
  const sub2Btn = useRef();

  const clickMenu = () => {
    sub1Btn.current.style.display='block'; //ref={}로 참조한 요소 변서에 담기
    sub2Btn.current.style.display='block';
  };
  const clicksub1 = () => {
  };
  const clicksub2 = () => {
  };

  useEffect(() => {
    //플라스크 서버로 api를 찾아서 데이터 조회 및 수정
    fetch("/data").then((res)=>{ //플라스크에 data라는 url 있어야함
      setData({
        name:data.name,
        age:data.age,
        date:data.date,
        programming:data.programming
      })
    })
  }, []) //인자는 함수와 배열 2개, []에 들어있는 값이 변경되면 자동으로 브라우저가 랜더링
  
  
  return (
    <div>
       <input type="button" id="menu" value="Menu" ref={menuBtn} onClick={clickMenu}></input>
       <input type="button" id="submenu1" value="Menu1" ref={sub1Btn} onClick={clicksub1}></input>
      <input type="button" id="submenu2" ref={sub2Btn} value="Menu2" onClick={clicksub2}></input>
      <div id="blur"></div>
    </div>
  );
}


export default App;