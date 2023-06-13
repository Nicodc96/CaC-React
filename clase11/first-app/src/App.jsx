import logo from './logo.svg';
import './App.css';
import './Boton.css';
import Boton from './Boton';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nicodc96's first React app</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello .jsx World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about React
        </a>
        <div className='container-buttons'>
          {Boton(1)}
          {Boton(2)}
          {Boton(3)}
        </div>
        <div className='container-cards'>
          <Card 
            apellido = "Messi" 
            descripcion = "El mejor jugador del mundo actualmente." 
            mundial = {true} 
            fechaNacimiento = {1987}
            clubes = {["Newell's Old Boys", "FC Barcelona", "PSG"]}
            />
        </div>
      </header>
    </div>
  );
}

export default App;
