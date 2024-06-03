import React, { useState } from 'react';

const ForState = () => {
    const handleAdd = () => {
        console.log("HandleAdd");
    };

    const handleSub = () => {
        console.log("HandleSub");
    };

    const [currentFunction, setCurrentFunction] = useState(()=>handleAdd);

    const toggleFunction = () => {
        if(currentFunction.toString()===handleAdd.toString()){
            setCurrentFunction(()=>handleSub)
        }else{
            setCurrentFunction(()=>handleAdd)

        }

    };
    const arr = [1,2,4,5,6]
    const str="Hello  world"
    // console.log(str.split(' ').reverse().join(" "))
    // console.log("arr",arr.reduce((a, c) => a + c, 0))
    // let sum=0
    // console.log("arr",arr.forEach((item)=>sum+=item),sum)
    console.log(str.split(/\s+/).join(' '))
    return (
        <div>
            <button onClick={()=>toggleFunction()}>
                Change function
            </button>
            {
                currentFunction.toString()
            }
            <button onClick={() => currentFunction()}>
                Console.log the fun
            </button>
        </div>
    );
};

export default ForState;
