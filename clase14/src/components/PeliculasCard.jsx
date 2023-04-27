import "./PeliculasCard.css";
import { Link } from "react-router-dom";

export const PeliculasCard = ({pelicula}) => {
    const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
  // Usar LINK acá para llegar al ID de la pelicula
  return (
    <li className="moviesCard">
      <div>
      <Link to={`/pelicula/${pelicula.id}`}>
        <img className="movieImage" src={imgURL} alt={pelicula.title} />
        <p className="movieTitle">{pelicula.original_title}</p>
      </Link>
      </div>
    </li>
  );
};
