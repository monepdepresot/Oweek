import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
 PageNotFound,
  Home,
  
  About,
 
  NavLinkScroll
} from "../script/export";

export default function Navigation() {
  return (
    <Router>
      <NavLinkScroll />

      <Routes>
        {/* 404 Not Found */}
        <Route path="*" element={<PageNotFound />} />
        {/* Home */}
        <Route path="/" element={<Home />} />
       
        {/* About Us */}
        <Route path="/about" element={<About />} />
       
      </Routes>
    </Router>
  );
}
