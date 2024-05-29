import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { Store_page } from "./features/userSlice";
import { useAppDispatch } from "./app/hooks";
import { removeFavorite } from "./features/favMovieSlice";

function App() {
  const dispatch = useAppDispatch();
  const handleFavorites = () => {
      dispatch(Store_page("hello"));

  };
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <button onClick={()=>handleFavorites()}>click me</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
