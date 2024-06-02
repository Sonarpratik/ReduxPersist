import React, { useCallback, useState } from "react";
import useCustom from "../../features/impors";
import { Store_page } from "../../features/userSlice";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const Custom = () => {
  const [navigate, dispatch] = useCustom();
  console.log("re render index");

  const handleFavorites = () => {
    dispatch(Store_page(count));
    // navigate('/')
  };
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  //   const addTodo = () => {
  // setTodo((prev)=>[...prev,"new Entry"])

  //   };
  const addTodo = useCallback(() => {
    setTodo((prev) => [...prev, "new Entry"]);
  }, [todo]);
  const { store_page } = useSelector(
    (state) => state.user
  );
  return (
    <div>
      <button onClick={() => handleFavorites()}>click me</button>
      {store_page}
      <Todo addTodo={addTodo} todo={todo} />
      Count :{count}
      <button onClick={() => handleCount()}>incremenr</button>
    </div>
  );
};

export default Custom;
