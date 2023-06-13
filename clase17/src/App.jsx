import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Show } from './components/show';
import { Create } from './components/create';
import { Edit } from './components/edit';
import logoCaC1 from './img/logoCaC1.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <article className='header-text'>
            <h1>React CRUD App</h1>
            <p>Codo a Codo - 2023</p>
          </article>
        </header>
        <main>
          <h2 className='text-center mt-3'>Tabla de jugadores de la selección argentina de fútbol</h2>
        <Routes>
          <Route path="/" element={ <Show /> }/>
          <Route path="/create" element={ <Create /> }/>
          <Route path="/edit/:playerId" element={ <Edit /> }/>
        </Routes>
          <p className='mt-3 text-center fst-italic text-secondary'>Este proyecto abarcó las clases 13 a 19.</p>
        </main>
        <footer className='bg-dark'>
          <div className='d-flex justify-content-between'>
            <div className='d-flex gap-2 flex-row'>
              <img src={logoCaC1} alt="logo cac" width='75px' className='pt-2'/>
              <p className='mb-0 fs-4 text-white-50 fst-italic pt-2 txtFooterCaC'>Codo a Codo - React</p>
            </div>
            <p className='mb-0 text-white-50 pt-3 txtFooterCaC'>Díaz, Nicolás &copy; | 2023</p>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
