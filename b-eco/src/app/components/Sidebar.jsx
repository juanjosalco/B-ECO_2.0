"use client";
import React, { useState } from 'react';
import "../styles/Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
        <div className='container'>
            <div className="leftSide">
                <img
                src={
                    "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FWhatsApp%20Image%202023-11-18%20at%2016.37.27.jpeg?alt=media&token=8009eb0c-74b2-4bfe-a228-be41c6e2483f"
                }
                width={120}
                height={60}
                alt="b-eco logo"
                className="b-eco_logo"
                />
                <img
                src={
                    "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FScreenshot%202023-11-22%20at%208.12.46%E2%80%AFa.m..png?alt=media&token=27d2e82f-9fa6-4d69-890f-0dd3dbf341e1"
                }
                width={160}
                alt="b-eco ai logo"
                className="b-eco_ai"
                ></img>
            </div>
            <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div>
                    <a href="#inicio" className='titleHover'>
                        Inicio
                    </a>
                    <a href="#quienes-somos" className='titleHover'>
                       Nosotros
                    </a>
                    <a href="#proyectos" className='titleHover'>
                        Proyectos
                    </a>
                    {/* <a href="#ecoserpiente" className='titleHover'>
                        EcoSerpiente
                    </a>     */}
                    <a href="#siguenos" className='titleHover'>
                        Síguenos
                    </a>
                    <a href="#contacto" className='titleHover'>
                        Contacto
                    </a>
                </div>
            </div>
            <div id="main" className={isOpen ? 'open-main' : ''}>
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
            </div>
        </div>
  );
}

export default Sidebar;

