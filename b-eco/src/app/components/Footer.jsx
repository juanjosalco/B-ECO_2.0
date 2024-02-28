"use client";
// Core
import React, { useState, useEffect } from "react";

import "../styles/Footer.css";


const Footer = () => {


    return(
        <footer>
            <div className="content">
                <div className="rightsText">
                    Todos los derechos reservados B-ECO 2023
                </div>
                <div className="informationText">
                    Av. Gral Ramón Corona No 2514, 45201 Zapopan, Jal.
                </div>
            </div>
        </footer>
    );
}

export default Footer;