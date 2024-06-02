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
import Custom from "./pages/Custom";
import useCustom from "./features/impors";

function App() {
console.log("re render app")
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
