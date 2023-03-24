import createTable from "./js/listaDinamica.js";
import PostsTest from "./class/posts.js";
import { getPostById } from "./js/fetch.js";
import { createElementCustom } from "../clase3/js/elementos.js";

const contenedorPosteos = document.querySelector("#listaPosteos");
const btnTraerPostID = document.querySelector("#btnTraerPostId");
const btnTraerPostUserID = document.querySelector("#btnTraerPostUserId");

btnTraerPostID.addEventListener("click", async () => {
    const inputPostId = document.querySelector("#inputTraerPostId");
    if (isNaN(Number(inputPostId.value))){
        console.error("Se ha ingresado un valor no numérico.");
    } else{
        limpiarTabla(contenedorPosteos);
        const jsonData = await getPostById(Number(inputPostId.value));
        contenedorPosteos.appendChild(crearTabla(jsonData));
    }
});

const crearTabla = (data) => {
    const table = createElementCustom("table", ["table", "table-striped-columns"], "", {});
    const tableHead = createElementCustom("thead", ["text-uppercase"], "", {});
    const tHeadRow = createElementCustom("tr", [], "", {});
    tableHead.appendChild(tHeadRow);
    const tableBody = createElementCustom("tbody", [], "", {});
    const tBodyRow = createElementCustom("tr", [], "", {});
    tableBody.appendChild(tBodyRow);
    for (let i = 0; i < Object.keys(data).length; i++){
        tBodyRow.appendChild(createElementCustom("td", [], data[Object.keys(data)[i]].toString(), {}));
        tHeadRow.appendChild(createElementCustom("th", [], Object.keys(data)[i], {}));
    }
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    return table;
}

const limpiarTabla = contenedor => {
    while(contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstElementChild);
    }
}