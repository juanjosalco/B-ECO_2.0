import React from "react";

// Styles
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="leftSide">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FWhatsApp%20Image%202023-11-18%20at%2016.37.27.jpeg?alt=media&token=8009eb0c-74b2-4bfe-a228-be41c6e2483f"
          }
          alt="b-eco_logo"
          className="b-eco_logo"
        />
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FScreenshot%202023-11-22%20at%208.12.46%E2%80%AFa.m..png?alt=media&token=27d2e82f-9fa6-4d69-890f-0dd3dbf341e1"
          }
          alt="b-eco ai logo"
          className="b-eco_ai"
        ></img>
      </div>
      <div className="rightSide">
          <a href="#inicio" className="block">
            Inicio
          </a>
          <a href="#quienes-somos" className="block">
            Nosotros
          </a>
          <a href="#proyectos" className="block">
            Proyectos
          </a>
          <a href="#ecoserpiente" className="block">
            EcoSerpiente
          </a>
          <a href="#siguenos" className="block">
            Síguenos
          </a>
          <a href="#contacto" className="block">
            Contacto
          </a>
      </div>
    </div>
  );
};

export default Navbar;
