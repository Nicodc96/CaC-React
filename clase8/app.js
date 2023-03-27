import { getPostById, getPostsByUsersId, getUserById, getAllUsers } from "./js/fetch.js";
import { crearTabla, limpiarTabla, mostrarDatosTabla } from "./js/functions.js";

/* Botones de POST */
const contenedorPosteos = document.querySelector("#listaPosteos");
const btnTraerPostID = document.querySelector("#btnTraerPostId");
const btnTraerPostUserID = document.querySelector("#btnTraerPostUserId");
/* Botones de USERS */
const contenedorUsuarios = document.querySelector("#listaUsuarios");
const btnTraerUserID = document.querySelector("#btnTraerUserId");
const btnTraerUserNames = document.querySelector("#btnTraerUserNames");
const btnTraerUserEmails = document.querySelector("#btnTraerUserEmails");
const btnTraerUserAdress = document.querySelector("#btnTraerUserAdress");
const btnTraerUserCompanies = document.querySelector("#btnTraerUserCompanies");
const listaUsuarios = await getAllUsers();

btnTraerPostID.addEventListener("click", async () => {
    const inputPostId = document.querySelector("#inputTraerPostId");
    let inputValue = Number(inputPostId.value);
    if (inputPostId.value == ""){
        alert("Se debe ingresar un valor correcto primero.");
    } else{
        limpiarTabla(contenedorPosteos);
        const jsonData = await getPostById(inputValue);
        contenedorPosteos.appendChild(crearTabla(jsonData));
        inputPostId.value = "";
    }
});

btnTraerPostUserID.addEventListener("click", async () => {
    const inputPostUserId = document.querySelector("#inputTraerPostUserId");
    let inputValue = Number(inputPostUserId.value);
    if (inputPostUserId.value == ""){
        alert("Se debe ingresar un valor correcto primero.");
    } else{
        limpiarTabla(contenedorPosteos);
        const jsonData = await getPostsByUsersId(inputValue);
        contenedorPosteos.appendChild(crearTabla(jsonData));
        inputPostUserId.value = "";
    }
});

btnTraerUserID.addEventListener("click", async () => {
    const inputUserId = document.querySelector("#inputTraerUserId");
    let userId = Number(inputUserId.value);
    if (inputUserId.value == ""){
        alert("Se debe ingresar un valor correcto primero.");
    } else{
        limpiarTabla(contenedorUsuarios);
        const jsonData = await getUserById(userId);
        contenedorUsuarios.appendChild(crearTabla(jsonData));
        inputUserId.value = "";
    }
});

btnTraerUserNames.addEventListener("click", () => {    
    limpiarTabla(contenedorUsuarios);
    contenedorUsuarios.appendChild(mostrarDatosTabla(listaUsuarios.map(user => user.name), ["nombres"]));
});
btnTraerUserEmails.addEventListener("click", () => {    
    limpiarTabla(contenedorUsuarios);
    contenedorUsuarios.appendChild(mostrarDatosTabla(listaUsuarios.map(user => user.email), ["emails"]));
});
btnTraerUserAdress.addEventListener("click", () => {   
    limpiarTabla(contenedorUsuarios);
    contenedorUsuarios.appendChild(mostrarDatosTabla(listaUsuarios.map(user => user.address), []));
});
btnTraerUserCompanies.addEventListener("click", () => {    
    limpiarTabla(contenedorUsuarios);
    contenedorUsuarios.appendChild(mostrarDatosTabla(listaUsuarios.map(user => user.company), []));
});