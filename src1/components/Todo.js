import React from "react";

const Todo=({todo})=>{ //destructuring (부모로부터 전달되는 속성을 받는다)
    return(
        <div className={todo.complete?"strike":""}>{todo.task}</div>
    )
}

export default Todo