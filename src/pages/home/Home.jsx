import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { sponsors } from "../../data/home/Sponsors";
import { testimonials } from "../../data/home/Testimonials";

export default function Home() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Oweek UC 2023";

    
    
  }, []);

  
  return (
    <div className="home">
      <Header />

     

      {/* Hero */}
    <div className="container">
    <h1>Hi trainee</h1>
    </div>

      

      <Footer />
    </div>
  );
}
