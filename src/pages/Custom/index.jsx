import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import useCustom from "../../features/impors";
import { Store_page } from "../../features/userSlice";
import Todo from "./Todo";
import { useSelector } from "react-redux";
export const MyContext = createContext("2");

const initialState = 0;
// const reducerName = (state, action) => {
//   console.log("run")
//   if (action.type === "IN") {
//     return state + 1;
//   }
//   if (action.type === "DE") {
//     return state - 1;
//   }
//   return state;
// };
const Custom = () => {
  const [navigate, dispatch] = useCustom();
  console.log("re render index");
  // const [stateName, dispatchName] = useReducer((state,type)=>reducerName(state,type), initialState);
const [stateName, setStateName] = useState(0);
  const handleFavorites = () => {
    dispatch(Store_page(stateName));
    // navigate('/')
  };
  const [todo, setTodo] = useState([]);
  // const [count, setCount] = useState(0);
  // const handleCount = () => {
  //   setCount(count + 1);
  // };
  const [s1, setS1] = useState("helloasasaaa");

  useMemo(() => {
    setS1(stateName);
  }, [stateName]);
  //   const addTodo = () => {
  // setTodo((prev)=>[...prev,"new Entry"])

  //   };
  const addTodo = useCallback((data) => {
    setTodo((prev) => {
      if (data === "PUSH") {
        return [...prev, "new Entry"];
      } else if (data === "POP") {
        return prev.slice(0, -1);
      }
      return prev;
    });
  }, []);
  const { store_page } = useSelector((state) => state.user);
  const update = useCallback(() => {
    setS1(stateName);
  }, [stateName]);
  const memoizedContextValue = useMemo(() => {
    return { s1, update, stateName: todo.length};
  }, [s1, update]);
  return (
    <div>
      <button onClick={() => handleFavorites()}>click me</button>
      {store_page}
      <MyContext.Provider value={memoizedContextValue}>
        <Todo addTodo={addTodo} todo={todo} />
      </MyContext.Provider>
      <div>
        {/* <button onClick={() => dispatchName({ type: "DE" })}>DEcrement</button> */}
        <button onClick={() => setStateName(stateName-1)}>DEcrement</button>
        Count :{stateName}
        {/* <button onClick={() => dispatchName({ type: "IN" })}>increment</button> */}
        <button onClick={() => setStateName(stateName+1)}>increment</button>
      </div>
    </div>
  );
};

export default Custom;
