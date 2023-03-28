import { createElementCustom } from "../../clase3/js/elementos.js";
const crearTabla = (data) => {
    const table = createElementCustom("table", ["table", "table-striped-columns", "table-dark", "table-responsive", "mb-0"], "", {});
    const tableHead = createElementCustom("thead", ["text-uppercase"], "", {});
    const tHeadRow = createElementCustom("tr", [], "", {});
    tableHead.appendChild(tHeadRow);
    const tableBody = createElementCustom("tbody", [], "", {});
    const tBodyRow = createElementCustom("tr", [], "", {});
    if (Array.isArray(data)){
        for (let i = 0; i < Object.keys(data[0]).length; i++){
            tHeadRow.appendChild(createElementCustom("th", ["text-center"], Object.keys(data[0])[i], {}));
        }
        data.forEach(post => {
            let newTr = createElementCustom("tr", [], "", {});
            for(let i = 0; i < Object.keys(post).length; i++){                
                let newTd = createElementCustom("td", ["text-center"], post[Object.keys(post)[i]].toString(), {});
                newTr.appendChild(newTd);
                tableBody.appendChild(newTr);
            }
        });
    } else{
        tableBody.appendChild(tBodyRow);
        for (let i = 0; i < Object.keys(data).length; i++){
            if (typeof data[Object.keys(data)[i]] == "object"){
                let datosAdress = "";
                Object.values(data[Object.keys(data)[i]]).forEach(value => {
                    if(typeof value != "object"){
                        datosAdress += `${value} | `;
                    }
                });
                tBodyRow.appendChild(createElementCustom("td", ["text-center"], datosAdress, {}));
            } else{
                tBodyRow.appendChild(createElementCustom("td", ["text-center"], data[Object.keys(data)[i]].toString(), {}));
            }
            tHeadRow.appendChild(createElementCustom("th", ["text-center"], Object.keys(data)[i], {}));
        }
    }
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    const div = createElementCustom("div", ["rounded-2", "table-responsive"], "", {"id":"divContainerTablePosts"});
    div.appendChild(table);
    return div;
}

const mostrarDatosTabla = (datos, nombresColumna) => {
    const table = createElementCustom("table", ["table", "table-striped-columns", "table-dark", "table-responsive", "mb-0"], "", {});
    const tableHead = createElementCustom("thead", ["text-uppercase"], "", {});
    const tHeadRow = createElementCustom("tr", [], "", {});
    tableHead.appendChild(tHeadRow);
    const tableBody = createElementCustom("tbody", [], "", {});
    if (nombresColumna.length == 0){
        for (let i = 0; i < Object.keys(datos[0]).length; i++){
            if (Object.keys(datos[0])[i] !== "geo"){
                tHeadRow.appendChild(createElementCustom("th", ["text-center"], Object.keys(datos[0])[i], {}));
            }
        }
        datos.forEach(user => {
            let newTr = createElementCustom("tr", [], "", {});
            for(let i = 0; i < Object.keys(user).length; i++){ 
                if (Object.keys(user)[i] !== "geo"){
                    let newTd = createElementCustom("td", [], user[Object.keys(user)[i]].toString(), {});
                    newTr.appendChild(newTd);
                    tableBody.appendChild(newTr);
                }           
            }
        });
    } else{
        for(let i = 0; i < nombresColumna.length; i++){
            tHeadRow.appendChild(createElementCustom("th", ["text-center"], nombresColumna[i], {}));
        }
        for(let i = 0; i < datos.length; i++){
            let tr = createElementCustom("tr", [], "", {});
            let td = createElementCustom("td", ["text-center"], datos[i].toString(), {});
            tr.appendChild(td);
            tableBody.appendChild(tr);
        }
    }      
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    const div = createElementCustom("div", ["rounded-2", "table-responsive"], "", {"id":"divContainerTablePosts"});
    div.appendChild(table);
    return div;
}

const limpiarTabla = contenedor => {
    while(contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstElementChild);
    }
}

export { limpiarTabla, crearTabla, mostrarDatosTabla };