import React, { memo } from 'react'

const Todo = ({todo,addTodo}) => {
    console.log("todo render")
  return (
    <div>
        {todo.map((item ,index)=>
        <p>{item } {index}</p>
        )}
      <button onClick={()=>addTodo()}>Add TOdO</button>
    </div>
  )
}

export default memo(Todo)
