import './App.css';
import Header from './components/Header';
import data from './data.json'
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
    const [todoList, setTodoList] = useState(data) //반환하는것은 첫번째(데이터), 두번째(함수)
    const [an,setan]=useState(0)
    console.log(setTodoList)
    const increase=()=>{
        setan(an+1)
    }
    const decrease=()=>{
        setan(an-1)
    }
    return(
        <div className = "App">
            <Header/>
            <TodoList todoList={todoList}/>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
            {an}
        </div>
    );
}

export default App;