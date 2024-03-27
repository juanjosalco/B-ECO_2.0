import SnakeGame from './SnakeGame'
import "../styles/SnakeGame.css"
// Styles

const Game = () => {
    return (
      
        <section className="content-section" id="EcoSerpiente">
          <section>
            <h2 style={{color: "#006733", fontSize: "2.5rem"}}>ECO-Serpiente</h2>
            <p className='textSnake'> Ayudanos a recolectar desechos!</p>
              <SnakeGame/>
          </section>
        </section>
  );
}

export default Game;