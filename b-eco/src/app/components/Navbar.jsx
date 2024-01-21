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
          width={120}
          height={60}
          alt="b-eco logo"
        />
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FScreenshot%202023-11-22%20at%208.12.46%E2%80%AFa.m..png?alt=media&token=27d2e82f-9fa6-4d69-890f-0dd3dbf341e1"
          }
          width={160}
          alt="b-eco ai logo"
        ></img>
      </div>
      <div className="rightSide">
        <div>
          <a href="#inicio" className="section">
            Inicio
          </a>
        </div>
        <div>
          <a href="#quienes-somos" className="section">
            ¿Quiénes somos?
          </a>
        </div>
        <div>
          <a href="#proyectos" className="section">
            Proyectos
          </a>
        </div>
        <div>
          <a href="#ecoserpiente" className="section">
            EcoSerpiente
          </a>
        </div>
        <div>
          <a href="#siguenos" className="section">
            Síguenos
          </a>
        </div>
        <div>
          <a href="#contacto" className="section">
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
