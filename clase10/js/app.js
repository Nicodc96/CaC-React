/* URLs de la API */
const URL = "https://api.themoviedb.org/3/movie/popular?api_key=9a854a8edeb1d719d0f00a9fc62fc00e&language=es-MX";
const URL_IMAGES = "https://image.tmdb.org/t/p/w500";
const URL_BUSQUEDA = "https://api.themoviedb.org/3/search/movie?api_key=9a854a8edeb1d719d0f00a9fc62fc00e&language=es-MX"; // Falta el &query=valor
/* Referencia a botones del Nav */
const btnAnterior = document.querySelector("#btnAnterior");
const btnSiguiente = document.querySelector("#btnSiguiente");
const btnPrimerNum = document.querySelector("#btnPrimerNum");
const btnSegundoNum = document.querySelector("#btnSegundoNum");
const btnTercerNum = document.querySelector("#btnTercerNum");
/* Contenedores y otros botones */
const contenedorPeliculas = document.querySelector("#contenedorPeliculas");
const btnScrollTop = document.querySelector("#btnScrollTop");
const containerBtnScrollTop = document.querySelector("#containerBtnScrollTop");
const inputBusqueda = document.querySelector("#inputBusquedaTitulo");
const formBusqueda = document.querySelector("#formBusqueda");
const btnVolverInicio = document.querySelector("#btnVolverInicio");
const containerBtnVolverInicio = document.querySelector("#contenedorBtnVolverInicio");

let paginaActual = 1;
let paginasTotales = 0;
let busquedaActiva = false;
let queryActual = "";

// Función que carga las peliculas de entrada
window.addEventListener("load", async () => {
    await agregarPeliculas(paginaActual);
    actualizarPaginas(paginaActual, paginasTotales);
    toggleActiveClass(1);
    containerBtnScrollTop.classList.add("hidden");
    containerBtnVolverInicio.childNodes.forEach((node) => {
        if(node.nodeName == "P" || node.nodeName == "svg"){
            node.style.cssText = "display:none;";
        }
    });
});

window.addEventListener("scroll", () => {
    let pageYOffset = parseInt(window.pageYOffset);
    if (!containerBtnScrollTop.classList.contains("hidden") && pageYOffset < 800) containerBtnScrollTop.classList.add("hidden");
    if (pageYOffset > 800) containerBtnScrollTop.classList.remove("hidden");
});

/* Cuadro de búqueda por título */
inputBusqueda.addEventListener("mouseover", () => {
    inputBusqueda.placeholder = "Búsqueda por título...";
})
formBusqueda.addEventListener("submit", async (e) => {
    e.preventDefault();
    const resultados = await getMoviesByTitleSearch(1, inputBusqueda.value);
    contenedorPeliculas.innerHTML = `<h3 class='text-center fst-italic mb-3 mt-3'>Resultados de la busqueda</h3>` + stringHTMLCardPelicula(resultados);
    actualizarPaginas(paginaActual, paginasTotales);
    queryActual = inputBusqueda.value;
    busquedaActiva = true;
})

/* Manejo de eventos de los botones del Nav */
btnAnterior.addEventListener("click", async () => {
    paginaActual > 1 ? paginaActual-- : paginaActual;
    await checkAndUpdateMovies(btnPrimerNum, 1);
    actualizarPaginas(paginaActual, paginasTotales);
});
btnSiguiente.addEventListener("click", async () => {
    paginaActual++;
    await checkAndUpdateMovies(btnPrimerNum, 1);
    actualizarPaginas(paginaActual, paginasTotales);
});
btnPrimerNum.addEventListener("click", async () => {
    checkActive() == 2 ? paginaActual-- : checkActive() == 3 ? paginaActual -= 2 : paginaActual;
    await checkAndUpdateMovies(btnPrimerNum, 1);
});
btnSegundoNum.addEventListener("click", async () => {
    checkActive() == 3 ? paginaActual-- : paginaActual++;
    await checkAndUpdateMovies(btnSegundoNum, 2);
});
btnTercerNum.addEventListener("click", async () => {
    checkActive() == 1 ? paginaActual+=2 : paginaActual++;
    await checkAndUpdateMovies(btnTercerNum, 3);
});

/* Función del botón que lleva la página arriba del todo */
btnScrollTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

/* Botón volver al inicio */
btnVolverInicio.addEventListener("click", async () => {
    window.location.href = "./";
});

const getMoviesByPage = async (pageNum) => {
    try{
        const { data } = await axios(`${URL}&page=${pageNum}`);
        paginasTotales = data.total_pages;
        const { results } = data;
        return results;
    }catch(error){
        console.error(error.message);
    }
}

const getMoviesByTitleSearch = async(pageNum, query) => {
    try{
        const { data } = await axios(`${URL_BUSQUEDA}&query=${query}&page=${pageNum}`);
        paginaActual = data.page;
        paginasTotales = data.total_pages;
        const { results } = data;
        return results;
    }catch(error){
        console.error(error.message);
    }
}

const agregarPeliculas = async (pagina) => {
    const resultados = busquedaActiva ? await getMoviesByTitleSearch(paginaActual, queryActual) : await getMoviesByPage(pagina);    
    contenedorPeliculas.innerHTML = stringHTMLCardPelicula(resultados);
}

const stringHTMLCardPelicula = (resultados) => {
    let peliculas = "";
    let cantCaracteres = 0;
    if (resultados.length == 0){
        peliculas += `<h2 class='text-center mb-3 mt-3'>No se han encontrados resultados.</h2>`;
        containerBtnVolverInicio.childNodes.forEach((node) => {
            if(node.nodeName == "P" || node.nodeName == "svg"){
                node.style.cssText = "display:initial;";
            }
        });
    } else{
        for (let i = 0; i < resultados.length; i++){
            cantCaracteres = resultados[i].title.length;
            if (i % 5 == 0 || i == 0){
                peliculas += i == 0 ? "<div class='row mx-5 pt-4 pb-4'>" : "</div><div class='row mx-5 pt-4 pb-4'>";
            }
            peliculas += `
            <div class='col d-flex justify-content-center col-xxm pb-4'>
                <div class='card' style="width:16rem;">
                    <img src="${resultados[i].poster_path != null ? URL_IMAGES+resultados[i].poster_path : './assets/no-image.jpg'}" height="325px" class="card-img-top" alt="poster-pelicula">
                    <div class="card-body">
                        <h5 class="card-title text-center" style="font-size:18px;">${resultados[i].title}</h5>
                        <div class="d-flex justify-content-center">
                        <button type="button" class='${cantCaracteres<=24?"btn btn-primary dropdown-toggle mb-3 mt-3":"btn btn-primary dropdown-toggle mb-3"}' data-bs-toggle="collapse" 
                        data-bs-target="#collapse-overview-${resultados[i].id}" aria-expanded="false" 
                        aria-controls="collapse-overview-${resultados[i].id}">Ver resumen</button>
                        </div>
                        <div class="collapse mb-3" id="collapse-overview-${resultados[i].id}">
                            <p class="card-text fst-italic fs-custom-13">${resultados[i].overview}</p>
                        </div>
                        <p class="card-text text-center">Valoración: <span class="fw-semibold">${resultados[i].vote_average} / 10</span></p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted fst-italic">Estrenado: ${typeof resultados[i].release_date == 'undefined' ? "Sin fecha actualmente" : resultados[i].release_date}</small>
                    </div>
                </div>
            </div>`
        }
    }
    return peliculas;
}

const actualizarPaginas = (pagina, maxPaginas) => {
    btnPrimerNum.textContent = pagina.toString();
    btnSegundoNum.textContent = (pagina+1).toString();
    btnTercerNum.textContent = (pagina+2).toString();
    if (pagina == maxPaginas){
        btnPrimerNum.classList.remove("disabled");
        btnSegundoNum.classList.add("disabled");
        btnTercerNum.classList.add("disabled");
    } else if(pagina == maxPaginas-1){
        btnSegundoNum.classList.remove("disabled");
        btnTercerNum.classList.add("disabled");
    } else if (pagina > maxPaginas){
        btnPrimerNum.classList.add("disabled");
    } else{
        btnPrimerNum.classList.remove("disabled");
        btnSegundoNum.classList.remove("disabled");
        btnTercerNum.classList.remove("disabled");
    }
}

const toggleActiveClass = (num) => {
    switch(num){
        case 1:
            btnPrimerNum.classList.toggle("active");
            btnSegundoNum.classList.remove("active");
            btnTercerNum.classList.remove("active");
            break;
        case 2:
            btnPrimerNum.classList.remove("active");
            btnSegundoNum.classList.toggle("active");
            btnTercerNum.classList.remove("active");
            break;
        case 3:
            btnPrimerNum.classList.remove("active");
            btnSegundoNum.classList.remove("active");
            btnTercerNum.classList.toggle("active");
            break;
        default:
            btnPrimerNum.classList.remove("active");
            btnSegundoNum.classList.remove("active");
            btnTercerNum.classList.remove("active");
    }
}

const checkActive = () =>{
    if (btnPrimerNum.classList.contains("active")) return 1;
    if (btnSegundoNum.classList.contains("active")) return 2;
    if (btnTercerNum.classList.contains("active")) return 3;
    return -1;
}

const checkAndUpdateMovies = async (btnRef, num) => {
    if (!btnRef.classList.contains("active")) toggleActiveClass(num);
    await agregarPeliculas(paginaActual, null);
}
