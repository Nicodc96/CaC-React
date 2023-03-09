import { crearModal, crearContenedorModal, crearModalButton, createElementCustom } from "./elementos.js";
const contenedorEjercicios = document.querySelector("#containerEjercicios");

////////////////////// Zona desarrollo de ejercicios //////////////////////
/*
    1. Pedir la edad y si es mayor de 18 años indica que ya puede conducir.
*/

const ejercicio1Modal = () => {
    const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
    const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
    const p1 = createElementCustom("p", ["text-center", "fst-italic"], "1. Pedir la edad y si es mayor de 18 años indica que ya puede conducir.", {});
    const label = createElementCustom("label", ["col-sm-3", "col-form-label"], "Ingrese su edad:", {"for":"inputEdad"});
    const divCol1 = createElementCustom("div", ["col-sm-9"], "", {});
    const inputEdad = createElementCustom("input", ["form-control"], "", {
        "type": "number",
        "id": "inputEdad",
        "placeholder": "Ingrese su edad...",
        "min":"0",
        "max":"100"
    });
    const buttonSubmit = createElementCustom("button", ["btn", "btn-success", "mt-2"], "Ingresar", { 
        "type":"submit",
        "id": "btnIngresarEdad"
    });
    /* Uno los elementos según como corresponde */
    divCol1.appendChild(inputEdad);
    divRow.appendChild(h3);
    divRow.appendChild(p1);
    divRow.appendChild(label);
    divRow.appendChild(divCol1);
    
    const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
    const labelResult = createElementCustom("label", ["col-sm-3", "col-form-label"], "Respuesta:", { "for":"inputRespuesta" });
    const divCol2 = createElementCustom("div", ["col-sm-9"], "", {});
    const inputResult = createElementCustom("input", ["form-control-plaintext"], "", {
        "type":"text",
        "readonly":"",
        "id":"inputRespuesta",
        "value": "..."
    });
    /* Uno los elementos según como corresponde */
    divCol2.appendChild(inputResult);
    divRow2.appendChild(labelResult);
    divRow2.appendChild(divCol2);
    divCol2.appendChild(buttonSubmit);

    return [divRow, divRow2];
}

/* Creo el botón y el modal para el ejercicio 1 y lo coloco dentro del contenedor del HTML */ 
const btnEjercicio_1 = crearModalButton(1);
const contenedorEjercicio_1 = crearContenedorModal(1);
contenedorEjercicio_1.appendChild(btnEjercicio_1);
contenedorEjercicio_1.appendChild(crearModal(1, ejercicio1Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_1);

/* Lógica del ejercicio 1 */
document.querySelector("#btnIngresarEdad").addEventListener("click", (e) => {
    e.preventDefault();
    const inputEdad = document.querySelector("#inputEdad");
    const inputResultado = document.querySelector("#inputRespuesta");
    inputResultado.value = inputEdad.value >= 18 ? "Ya puede conducir, ¡felicidades!" : "No puede conducir, ¡aún es menor!";
});
