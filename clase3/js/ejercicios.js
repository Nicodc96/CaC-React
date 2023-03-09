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
        "id":"inputRespuestaEdad",
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
    const inputResultado = document.querySelector("#inputRespuestaEdad");
    inputResultado.value = inputEdad.value >= 18 ? "Ya puede coSnducir, ¡felicidades!" : "No puede conducir, ¡aún es menor!";
});

/*
    2. Pide una nota (número). Muestra la calificación según la nota:
        0-3: Muy deficiente
        3-5: Insuficiente
        5-6: Suficiente
        6-7: Bien
        7-9: Destacado
        9-10: Sobresaliente
*/

const ejercicio2Modal = () => {
    const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
    const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
    const p1 = createElementCustom("p", ["text-center", "fst-italic"], "2. Pide una nota (número). Muestra la calificación según la nota:\n0-3: Muy deficiente\n3-5: Insuficiente\n5-6: Suficiente\n6-7: Bien\n7-9: Notable\n9-10: Sobresaliente", {});
    const label = createElementCustom("label", ["col-sm-3", "col-form-label"], "Ingrese la nota:", {"for":"inputNota"});
    const divCol1 = createElementCustom("div", ["col-sm-9"], "", {});
    const inputNota = createElementCustom("input", ["form-control"], "", {
        "type": "text",
        "id": "inputNota",
        "placeholder": "Ingrese una nota..."
    });
    const buttonSubmit = createElementCustom("button", ["btn", "btn-success", "mt-2"], "Ingresar", { 
        "type":"submit",
        "id": "btnIngresarNota"
    });
    /* Uno los elementos según como corresponde */
    divCol1.appendChild(inputNota);
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
        "id":"inputRespuestaNota",
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
const btnEjercicio_2 = crearModalButton(2);
const contenedorEjercicio_2 = crearContenedorModal(2);
contenedorEjercicio_2.appendChild(btnEjercicio_2);
contenedorEjercicio_2.appendChild(crearModal(2, ejercicio2Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_2);

/* Lógica del ejercicio 2 */
document.querySelector("#btnIngresarNota").addEventListener("click", (e) => {
    e.preventDefault();
    const inputNota = document.querySelector("#inputNota");
    const inputResNota = document.querySelector("#inputRespuestaNota");
    if (isNaN(Number(inputNota.value))){
        inputResNota.value = "¡El valor ingresado no es un número!";
    } else if(Number(inputNota.value) > 10 || Number(inputNota.value) < 0){
        inputResNota.value = "El valor debe estar entre 0 y 10 inclusive.";
    } else{
        let numero = Number(inputNota.value);
        if (numero >= 0 && numero <= 3){
            inputResNota.value = "Muy deficiente.";
        }
        if (numero > 3 && numero <= 5){
            inputResNota.value = "Insuficiente.";
        }
        if (numero > 5 && numero <= 6){
            inputResNota.value = "Suficiente.";
        }
        if (numero > 6 && numero <= 7){
            inputResNota.value = "Bien.";
        }
        if (numero > 7 && numero <= 9){
            inputResNota.value = "Destacado.";
        }
        if (numero > 9 && numero <= 10){
            inputResNota.value = "¡Sobresaliente!";
        }
    }
});