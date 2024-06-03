import React, { memo, useContext } from 'react'
import { MyContext } from '..'

const Child = () => {
      
      
    const {s1,update,stateName}=useContext(MyContext)
    console.log("Child Render")

  return (
    <div>
      {s1}
      <button onClick={()=>update()}>UPDATE THE PROVIDER</button>

THIS IS STATE NAME
      {stateName}
    </div>
  )
}

export default memo(Child)
