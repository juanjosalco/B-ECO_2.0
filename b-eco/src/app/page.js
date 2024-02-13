// Components
import Navbar from './components/Navbar'
import HeaderCarousel from './components/HeaderCarousel'
import WhoAreWe from './components/WhoAreWe'
import Projects from './components/Projects'
import FollowUs from './components/FollowUs'
import SnakeGame from './components/SnakeGame'

// Styles
import './styles/Page.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="inicio"/>
      <HeaderCarousel/>
      <div id="quienes-somos"/>
      <WhoAreWe/>
      <div id="proyectos"/>
      <Projects/>
      <div id="follow-us"/>
      <SnakeGame/>
      <div id="snake-game"/>
      <FollowUs/>
      <div style={{marginTop: 80}}/>
    </main>
  ) 
}
