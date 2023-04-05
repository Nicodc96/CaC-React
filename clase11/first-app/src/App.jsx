import logo from './logo.svg';
import './App.css';
import './Boton.css';
import Boton from './Boton';

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
        <div className='Container-Buttons'>
          {Boton(1)}
          {Boton(2)}
          {Boton(3)}
        </div>
      </header>
    </div>
  );
}

export default App;
