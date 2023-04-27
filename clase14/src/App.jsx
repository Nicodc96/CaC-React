import { PeliculasGrid } from "./components/PeliculasGrid";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { PeliculaInfo } from "./pages/PeliculaInfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">
            <h1 className="title">PELICULAS</h1>
          </Link>
          <p className="text-center pt-3">Clases 14, 15 & 16</p>
        </header>
        <Routes>
          <Route path="/" element={ <PeliculasGrid /> }/>
          <Route path="/pelicula/?peliculaId" element={ <PeliculaInfo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
