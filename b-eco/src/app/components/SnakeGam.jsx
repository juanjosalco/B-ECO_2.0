import SnakeGame from './SnakeGame'
import "../styles/SnakeGame.css"
// Styles

const Game = () => {
    return (
        <section className="content-section" id="EcoSerpiente">
          <section>
              <h2>ECO-Serpiente</h2>
              <p>Ayudanos a recolectar desechos!</p>
              <SnakeGame/>
          </section>
        </section>
  );
}

export default Game;