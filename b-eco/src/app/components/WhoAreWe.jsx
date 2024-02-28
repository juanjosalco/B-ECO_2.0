// Core
import React from "react";

// Styles
import "../styles/WhoAreWe.css";

export default function WhoAreWe() {
  return (
    <>
      <div className="containerWho">
        <div className="textWho">
          <h2 className="title">¿Quiénes Somos?</h2>
          <p className="text">
            Bienvenidos al grupo estudiantil B-eco, una comunidad apasionada y
            comprometida de estudiantes del Tecnológico de Monterrey que se unen
            bajo la premisa de la sostenibilidad y el impacto positivo en
            nuestra comunidad. En B-eco, no solo somos un grupo, somos agentes
            de cambio que trabajan de manera colaborativa para abordar los
            desafíos ambientales y sociales que enfrenta nuestro entorno.
          </p>
          <p className="text">
            En B-eco, nos sumergimos activamente en proyectos concretos que
            abordan problemáticas medioambientales y sociales en nuestra
            comunidad. Desde campañas de concienciación hasta iniciativas de
            impacto ambiental, cada proyecto refleja nuestro compromiso con la
            acción positiva y la creación de un futuro más sostenible.
          </p>
        </div>
        <div className="leftSideWho">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FWhatsApp%20Image%202023-12-04%20at%2018.36.34.jpeg?alt=media&token=7b2a0c64-83a5-46b2-9870-9e7f44b52b4c"
            className="imageWho"
            alt="b-eco logo"
          />
        </div>
      </div>
    </>
  );
}
