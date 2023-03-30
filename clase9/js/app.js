const URL = "https://api.themoviedb.org/3/movie/popular?api_key=9a854a8edeb1d719d0f00a9fc62fc00e&language=es-MX";
const btnAnterior = document.querySelector("#btnAnterior");
const btnSiguiente = document.querySelector("#btnSiguiente");

let paginaActual = 1;

const getAllMovies = async () => {
    try{
        const { data } = await axios(URL);
        const { results } = data;
        return results;
    }catch(error){
        console.error(error.message);
    }
}

const getMoviesByPage = async (pageNum) => {
    try{
        const { data } = await axios(`${URL}/&page=${pageNum}`);
        const { results } = data;
        return results;
    }catch(error){
        console.error(error.message);
    }
}

btnAnterior.addEventListener("click", async () => {
    paginaActual > 1 ? paginaActual-- : paginaActual = paginaActual;
    console.log(await getMoviesByPage(paginaActual));
});

btnSiguiente.addEventListener("click", async () => {
    paginaActual++;
    console.log(await getMoviesByPage(paginaActual));
});