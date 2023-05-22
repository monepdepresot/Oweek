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

  const testimonialsList = testimonials.map((testimonials) => (
    <div key={testimonials.id} className="col">
      <div className="card h-100">
        <div className="d-grid gap-3">
          <img
            src={testimonials.image}
            alt="Testimonials"
            className="rounded-circle shadow-sm mx-auto"
            width={256}
            loading="lazy"
          />
          <div>
            <h4 className="text-center">{testimonials.name}</h4>
            <q>{testimonials.testimoni}</q>
          </div>
        </div>
      </div>
    </div>
  ));

  const sponsorsList = sponsors.map((sponsor) => (
    <div>
      <img
        src={sponsor.image}
        alt="Sponsors"
        loading="lazy"
        className="w-75 d-block mx-auto"
      />
    </div>
  ));

  return (
    <div className="home">
      <Header />

     

      {/* Hero */}
    <div className="container">
    <h1>Home</h1>
    </div>

      

      <Footer />
    </div>
  );
}
