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
    inputResultado.value = inputEdad.value >= 18 ? "Ya puede conducir, ¡felicidades!" : "No puede conducir, ¡aún es menor!";
});

/* FIN del ejercicio 1 */

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
    const labelResult = createElementCustom("label", ["col-sm-3", "col-form-label"], "Respuesta:", { "for":"inputRespuestaNota" });
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

/* Creo el botón y el modal para el ejercicio 2 y lo coloco dentro del contenedor del HTML */ 
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
/* FIN del ejercicio 2 */

/*
    3. Realiza un script que pida cadenas de texto hasta que se pulse “Mostrar”. 
    Al salir con “Mostrar” deben mostrarse todas las cadenas concatenadas con un guión '-'
*/
const ejercicio3Modal = () => {
    const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
    const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
    const p1 = createElementCustom("p", ["text-center", "fst-italic"], "Realiza un script que pida cadenas de texto hasta que se pulse “Mostrar”. Al salir con “Mostrar” deben mostrarse todas las cadenas concatenadas con un guión '-'", {});
    const label = createElementCustom("label", ["col-sm-3", "col-form-label"], "Ingrese una palabra:", {"for":"inputCadenasTexto"});
    const divCol1 = createElementCustom("div", ["col-sm-9"], "", {});
    const divRow1Plus = createElementCustom("div", ["row"], "", {});
    const divCol1Plus = createElementCustom("div", ["col", "d-flex", "gap-3", "flex-row"], "", {});
    const inputPalabra = createElementCustom("input", ["form-control"], "", {
        "type": "text",
        "id": "inputCadenasTexto",
        "placeholder": "Ingrese una palabra..."
    });
    const buttonAgregar = createElementCustom("button", ["btn", "btn-success", "mt-1"], "Agregar", {
        "type": "button",
        "id": "btnAgregarPalabra"
    })
    const buttonMostrar = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Mostrar", { 
        "type": "submit",
        "id": "btnMostrarPalabras"
    });
    const buttonLimpiar = createElementCustom("button", ["btn", "btn-secondary", "mt-1"], "Limpiar", {
        "type": "button",
        "id": "btnLimpiarPalabras"
    })
    /* Uno los elementos según como corresponde */
    divCol1.appendChild(inputPalabra);
    divCol1.appendChild(divRow1Plus);
    divRow1Plus.appendChild(divCol1Plus);
    divCol1Plus.appendChild(buttonAgregar);
    divCol1Plus.appendChild(buttonMostrar);
    divRow.appendChild(h3);
    divRow.appendChild(p1);
    divRow.appendChild(label);
    divRow.appendChild(divCol1);
    
    const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
    const labelResult = createElementCustom("label", ["col-sm-3", "col-form-label"], "Respuesta:", { "for":"inputRespuestaPalabras" });
    const divCol2 = createElementCustom("div", ["col-sm-9"], "", {});
    const inputResult = createElementCustom("input", ["form-control-plaintext"], "", {
        "type":"text",
        "readonly":"",
        "id":"inputRespuestaPalabras",
        "value": "..."
    });
    /* Uno los elementos según como corresponde */
    divCol2.appendChild(inputResult);
    divCol2.appendChild(buttonLimpiar);
    divRow2.appendChild(labelResult);
    divRow2.appendChild(divCol2);

    return [divRow, divRow2];
}

/* Creo el botón y el modal para el ejercicio 3 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_3 = crearModalButton(3);
const contenedorEjercicio_3 = crearContenedorModal(3);
contenedorEjercicio_3.appendChild(btnEjercicio_3);
contenedorEjercicio_3.appendChild(crearModal(3, ejercicio3Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_3);

/* Lógica del ejercicio 3 */
const palabras_ej3 = [];

const limpiar_ej3 = () => {
    for (let i = 0; i <= palabras_ej3.length; i++){
        palabras_ej3.pop();
    }
    document.querySelector("#inputCadenasTexto").value = "";
    document.querySelector("#inputRespuestaPalabras").value = "...";
}
document.querySelector("#btnAgregarPalabra").addEventListener("click", () => {
    if (document.querySelector("#inputCadenasTexto").value){
        palabras_ej3.push(document.querySelector("#inputCadenasTexto").value);
    }
    console.log(palabras_ej3);
});

document.querySelector("#btnMostrarPalabras").addEventListener("click", (e) => {
    e.preventDefault();
    const inputRespuestaPalabras = document.querySelector("#inputRespuestaPalabras");
    if (palabras_ej3.length == 0){
        inputRespuestaPalabras.value = "No se guardó ninguna palabra.";
    } else{
        inputRespuestaPalabras.value = "";
        for (let i = 0; i < palabras_ej3.length; i++){
            if (i == palabras_ej3.length-1){
                inputRespuestaPalabras.value += `${palabras_ej3[i]}`;
            } else{
                inputRespuestaPalabras.value += `${palabras_ej3[i]}-`;
            }
        }
    }
});

document.querySelector("#btnLimpiarPalabras").addEventListener("click", () => {
    limpiar_ej3();
});
/* FIN del ejercicio 3 */

/*
    4. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. 
    Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

const ejercicio4Modal = () => {
    const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
    const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
    const p1 = createElementCustom("p", ["text-center", "fst-italic"], "Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.", {});
    const divCol1 = createElementCustom("div", ["col", "d-flex", "justify-content-center", "pt-2"], "", {});
    const buttonEjecutar = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Ejecutar", { 
        "type": "submit",
        "id": "btnEjecutarEj4"
    });
    const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-2"], "Reiniciar", { 
        "type": "button",
        "id": "btnReiniciarEj4"
    });
    /* Uno los elementos según como corresponde */
    divCol1.appendChild(buttonEjecutar);
    divRow.appendChild(h3);
    divRow.appendChild(p1);
    divRow.appendChild(divCol1);
    
    const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
    const labelResult = createElementCustom("label", ["col-sm-3", "col-form-label"], "Respuesta:", { "for":"inputRespEj4" });
    const divCol2 = createElementCustom("div", ["col-sm-9"], "", {});
    const inputResult = createElementCustom("input", ["form-control-plaintext"], "", {
        "type":"text",
        "readonly":"",
        "id":"inputRespEj4",
        "value": "..."
    });
    /* Uno los elementos según como corresponde */
    divCol2.appendChild(inputResult);
    divCol2.appendChild(buttonReiniciar);
    divRow2.appendChild(labelResult);
    divRow2.appendChild(divCol2);

    return [divRow, divRow2];
}

/* Creo el botón y el modal para el ejercicio 4 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_4 = crearModalButton(4);
const contenedorEjercicio_4 = crearContenedorModal(4);
contenedorEjercicio_4.appendChild(btnEjercicio_4);
contenedorEjercicio_4.appendChild(crearModal(4, ejercicio4Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_4);

/* Lógica del ejercicio 4 */
let acumulador_ej4 = 0;
document.querySelector("#btnEjecutarEj4").addEventListener("click", (e) => {
    e.preventDefault();
    let continuar = true;
    let numeroIngresado;
    const inputRespEj4 = document.querySelector("#inputRespEj4");
    for (let i = 1; continuar === true; i++){
        numeroIngresado = prompt(`Ingrese el número ${i}:`);
        if (numeroIngresado == null){
            inputRespEj4.value = acumulador_ej4;
            break;
        } else{
            if (isNaN(Number(numeroIngresado))){
                alert("¡Se debe ingresar un número!");
                i--;
            } else{
                acumulador_ej4 += Number(numeroIngresado);
            }
        }
    }
});
document.querySelector("#btnReiniciarEj4").addEventListener("click", () => {
    document.querySelector("#inputRespEj4").value = "...";
    acumulador_ej4 = 0;
});

/*
    5. Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).
*/

const ejercicio5Modal = () =>{
    const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
    const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
    const p1 = createElementCustom("p", ["text-center", "fst-italic"], "Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad). Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) en ese órden. Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.", {});
    const divCol1 = createElementCustom("div", ["col", "d-flex", "justify-content-center", "pt-2"], "", {});
    const buttonEjecutar = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Ejecutar", { 
        "type": "submit",
        "id": "btnEjecutarEj5"
    });
    const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-2"], "Reiniciar", { 
        "type": "button",
        "id": "btnReiniciarEj5"
    });
    /* Uno los elementos según como corresponde */
    divCol1.appendChild(buttonEjecutar);
    divRow.appendChild(h3);
    divRow.appendChild(p1);
    divRow.appendChild(divCol1);
    
    const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
    const labelResult = createElementCustom("label", ["col-sm-3", "col-form-label"], "Respuesta:", { "for":"inputRespEj5" });
    const divCol2 = createElementCustom("div", ["col-sm-9"], "", {});
    const inputResult = createElementCustom("input", ["form-control-plaintext"], "", {
        "type":"text",
        "readonly":"",
        "id":"inputRespEj5",
        "value": "..."
    });
    /* Uno los elementos según como corresponde */
    divCol2.appendChild(inputResult);
    divCol2.appendChild(buttonReiniciar);
    divRow2.appendChild(labelResult);
    divRow2.appendChild(divCol2);

    return [divRow, divRow2];
}

/* Creo el botón y el modal para el ejercicio 5 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_5 = crearModalButton(5);
const contenedorEjercicio_5 = crearContenedorModal(5);
contenedorEjercicio_5.appendChild(btnEjercicio_5);
contenedorEjercicio_5.appendChild(crearModal(5, ejercicio5Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_5);

/* Lógica del ejercicio 5 */
const letras_ej5 = [];
document.querySelector("#btnEjecutarEj5").addEventListener("click", (e) => {
    e.preventDefault();
    // (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
    const valoresLetras = {
        0:"T", 1:"R", 2:"W", 3:"A", 4:"G", 5:"M", 6:"Y", 7:"F", 8:"P", 9:"D", 10:"X", 11:"B", 12:"N", 13:"J",
        14:"Z", 15:"S", 16:"Q", 17:"V", 18:"H", 19:"L", 20:"C", 21:"K", 22:"E"
    }
    do{
        let numDNI = prompt("Ingrese un número de DNI (0 a 99.999.999):");
        if (numDNI == null){
            if (letras_ej5.length > 0){
                document.querySelector("#inputRespEj5").value = letras_ej5.join('');
            }
            break;
        }
        numDNI = Number(numDNI);
        if (!isNaN(numDNI) && numDNI >= 0 && numDNI <= 99999999){
            letras_ej5.push(valoresLetras[numDNI % 23]);
        } else{
            alert("¡Error! El valor ingresado no es un número o está fuera de los valores.");
        }
    }while(true);
})
document.querySelector("#btnReiniciarEj5").addEventListener("click", () => {
    letras_ej5.length = 0;
    document.querySelector("#inputRespEj5").value = "...";
});