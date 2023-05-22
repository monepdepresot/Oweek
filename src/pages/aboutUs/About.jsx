import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function About() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "About";

    
    
  }, []);

  return (
    <div className="about">
      <Header />

<div className="container">
  <h1>About</h1>
</div>

      <Footer />
    </div>
  );
}
