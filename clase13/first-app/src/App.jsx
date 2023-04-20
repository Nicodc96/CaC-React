import logo from './logo.svg';
import './App.css';
import './Boton.css';
import CardB from './CardB';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nicodc96's second React app</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello .jsx World!
        </p>
      </header>
        <div className='container-cards d-flex justify-content-center mt-4 mb-4'>
          <CardB></CardB>
        </div>
    </div>
  );
}

export default App;
