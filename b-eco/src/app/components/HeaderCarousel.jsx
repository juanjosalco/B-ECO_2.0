"use client";
// Core
import React, { useState, useEffect } from "react";

// Utils
import HeaderCarouselImages from "../utils/HeaderCarouselImages";

import "../styles/HeaderCarousel.css";

const FADE_INTERVAL_MS = 12000;

export default function HeaderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeProp({ fade: "fade-out" });
      const fadeTimeout2 = setTimeout(() => {
        setFadeProp({ fade: "fade-in" });
      }, 1000);
      return () => {
        clearTimeout(fadeTimeout2);
      };
    }, FADE_INTERVAL_MS - 1000);

    return () => {
      clearTimeout(fadeTimeout);
    };
  }, [currentIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex === HeaderCarouselImages.images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, FADE_INTERVAL_MS);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <>
      <img
        className={`carousel-img ${fadeProp.fade}`}
        src={HeaderCarouselImages.images[currentIndex].img}
        alt="b-eco header carousel"
      />
    </>
  );
}
