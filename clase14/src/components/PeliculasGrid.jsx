import { useState, useEffect } from "react";
import { getMovies } from "../utils/httpClient";
import { PeliculasCard } from "./PeliculasCard";
import "./PeliculasGrid.css";

export const PeliculasGrid = () => {
    const [peliculas, setPeliculas] = useState([]);
    useEffect(() => {
        getMovies("/discover/movie").then(data => {
            setPeliculas(data.results);
        });
    }, []);
    return(
        <ul className="moviesGrid">{
            peliculas.map(pelicula => (
                <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
            ))}
        </ul>
    )
}