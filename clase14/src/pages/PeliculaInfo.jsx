import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../utils/httpClient";

export const PeliculaInfo = (id) => {
    const [pelicula, setPelicula] = useState(null);
    const { peliculaId } = useParams();
    useEffect(() => {
        getMovies(`/movie/${peliculaId}`).then(data => {
            setPelicula(data);
        })
    }, [peliculaId]);
    return !pelicula ? (
        <div>

        </div>
    ) : (
        <div>
            
        </div>
        );
}