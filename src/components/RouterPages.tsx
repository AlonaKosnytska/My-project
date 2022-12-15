import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import Header from "./Header";
import FavoriteCPage from "../pages/FavoriteCPage";

const RouterPage = () => {
  return (
    <div className="RouterNavBar">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries/:name" element={<CountryPage />} />
          <Route path="/countries/favorites" element={<FavoriteCPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RouterPage;
