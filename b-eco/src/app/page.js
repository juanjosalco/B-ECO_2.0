// Components
"use client";
import Navbar from './components/Navbar'
import HeaderCarousel from './components/HeaderCarousel'
import WhoAreWe from './components/WhoAreWe'
import Projects from './components/Projects'
import FollowUs from './components/FollowUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import SnakeGam from './components/SnakeGam';
import './styles/Page.css'
import { useEffect, useState } from 'react'

export default function Home() {

  const[isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 940);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return() => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <main>
      {isMobile? <Sidebar/> : <Navbar/>}
      <HeaderCarousel/>
      <div id="quienes-somos"/>
      <WhoAreWe/>
      <div id="proyectos"/>
      <Projects/>
      <div id="ecoserpiente"/>
      <SnakeGam/>
      <div id="siguenos"/>
      <FollowUs/>
      <div id="contacto"/>
      <Contact/>
      <div id="footer"/>
      <Footer/>
    </main>
  ) 
}


