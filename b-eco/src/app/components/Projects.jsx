"use client";
// Core
import React, { useState, useRef, useEffect } from "react";

// Styles
import "../styles/Projects.css";

// Utils
import { projectsResources } from "../utils/Projects";

const Projects = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const listNode = listRef.current;

    // Check if listNode is defined before accessing its properties
    if (listNode) {
      const imgNode = listNode.querySelectorAll("img")[currentIndex];
      if(isPageLoading){
        if (imgNode) {
          imgNode.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      }
      setIsPageLoading(true);
    }
  }, [currentIndex]);

  const sliderStyles = {
    position: "relative",
    overflow: "hidden",
    height: 480,
    flex: 2,
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const projectsContainer = {
    flex: 1,
    height: 448,
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    textAlign: "justify",
    justifyContent: "flex-start",
  };

  const mainStyles = {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    borderRadius: "10px",
    boxShadow: "0px 0px 1px 1px rgba(72, 77, 77, 0.4)",
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(projectsResources.length - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < projectsResources.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div>
      <h2 className="title" style={{ marginBottom: 50 }}>
        Proyectos
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          margin: "auto",
        }}
      >
        <p className="arrows" onClick={goToPrevious}>
          &#10092;
        </p>
        <div style={mainStyles}>
              <div style={sliderStyles} ref={listRef}>
                {projectsResources.map((project, index) => (
                  <img
                    key={index}
                    src={project.image}
                    alt={project.title}
                    style={slideStyles}
                  />
                ))}
          </div>
          <div style={projectsContainer}>
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>
              {projectsResources[currentIndex].title}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              {projectsResources[currentIndex].description}
            </p>
          </div>
        </div>
        <p className="arrows" onClick={goToNext}>
          &#10093;
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        {projectsResources.map((project, index) => (
          <div
            key={index}
            className={index === currentIndex ? "circle-colored" : "circles"}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
