import React from "react";
import { BrowserRouter,Routes, Route ,Link} from "react-router-dom";

import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";

const RouterPage = () => {
  return (
    <div className="RouterNavBar">
      
      <BrowserRouter>
        <Link to='HomePage'>HomePage</Link>
        <Routes>
          
          <Route path="/" element={<HomePage />}/>
          <Route path="/countries/:name" element={<CountryPage />} />
       
        </Routes>
        
    
      </BrowserRouter>
    </div>
  )}
;

export default RouterPage;