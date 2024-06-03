import React, { memo, useContext } from 'react'
import Child from './child/Child'

const Todo = ({todo,addTodo}) => {
    console.log("todo render")
    return (
    <div>
        {todo.map((item ,index)=>
        <p>{item } {index} <button onClick={()=>addTodo("POP")}>DELETE</button></p> 
        )}
      <button onClick={()=>addTodo("PUSH")}>Add TOdO</button>
      <div style={{background:"red"}}>
        
<Child/>
      </div>
    </div>
  )
}

export default memo(Todo)
