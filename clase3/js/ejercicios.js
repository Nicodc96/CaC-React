import { crearModal, crearContenedorModal, crearModalButton, createElementCustom } from "./elementos.js";
import contenedorModales from "./modals.js";
const contenedorEjercicios = document.querySelector("#containerEjercicios");

////////////////////// Zona desarrollo de ejercicios //////////////////////
/*
    1. Pedir la edad y si es mayor de 18 años indica que ya puede conducir.
*/

/* Creo el botón y el modal para el ejercicio 1 y lo coloco dentro del contenedor del HTML */ 
const btnEjercicio_1 = crearModalButton(1);
const contenedorEjercicio_1 = crearContenedorModal(1);
contenedorEjercicio_1.appendChild(btnEjercicio_1);
contenedorEjercicio_1.appendChild(crearModal(1, contenedorModales.ejercicio1Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_1);

/* Lógica del ejercicio 1 */
document.querySelector("#btnIngresarEdad").addEventListener("click", (e) => {
    e.preventDefault();
    const inputEdad = document.querySelector("#inputEdad");
    const inputResultado = document.querySelector("#inputRespuestaEdad");
    inputResultado.value = inputEdad.value >= 18 ? "Ya puede conducir, ¡felicidades!" : "No puede conducir, ¡aún es menor!";
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

/* Creo el botón y el modal para el ejercicio 2 y lo coloco dentro del contenedor del HTML */ 
const btnEjercicio_2 = crearModalButton(2);
const contenedorEjercicio_2 = crearContenedorModal(2);
contenedorEjercicio_2.appendChild(btnEjercicio_2);
contenedorEjercicio_2.appendChild(crearModal(2, contenedorModales.ejercicio2Modal()));
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

/*
    3. Realiza un script que pida cadenas de texto hasta que se pulse “Mostrar”. 
    Al salir con “Mostrar” deben mostrarse todas las cadenas concatenadas con un guión '-'
*/

/* Creo el botón y el modal para el ejercicio 3 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_3 = crearModalButton(3);
const contenedorEjercicio_3 = crearContenedorModal(3);
contenedorEjercicio_3.appendChild(btnEjercicio_3);
contenedorEjercicio_3.appendChild(crearModal(3, contenedorModales.ejercicio3Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_3);

/* Lógica del ejercicio 3 */
const palabras_ej3 = [];
const limpiar_ej3 = () => {
    for (let i = 0; i <= palabras_ej3.length; i++){
        palabras_ej3.pop();
    }
    document.querySelector("#inputCadenasTexto").value = "";
    document.querySelector("#inputRespuestaPalabras").value = "...";
};
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

/*
    4. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. 
    Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

/* Creo el botón y el modal para el ejercicio 4 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_4 = crearModalButton(4);
const contenedorEjercicio_4 = crearContenedorModal(4);
contenedorEjercicio_4.appendChild(btnEjercicio_4);
contenedorEjercicio_4.appendChild(crearModal(4, contenedorModales.ejercicio4Modal()));
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

/* Creo el botón y el modal para el ejercicio 5 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_5 = crearModalButton(5);
const contenedorEjercicio_5 = crearContenedorModal(5);
contenedorEjercicio_5.appendChild(btnEjercicio_5);
contenedorEjercicio_5.appendChild(crearModal(5, contenedorModales.ejercicio5Modal()));
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
});
document.querySelector("#btnReiniciarEj5").addEventListener("click", () => {
    letras_ej5.length = 0;
    document.querySelector("#inputRespEj5").value = "...";
});

/*
    6. Realiza un script que escriba una pirámide del 1 hasta el número que se indique de la siguiente forma:
        1
        22
        333
        4444
        55555
        666666
*/
/* Creo el botón y el modal para el ejercicio 6 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_6 = crearModalButton(6);
const contenedorEjercicio_6 = crearContenedorModal(6);
contenedorEjercicio_6.appendChild(btnEjercicio_6);
contenedorEjercicio_6.appendChild(crearModal(6, contenedorModales.ejercicio6Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_6);
/* Lógica del ejercicio 6 */
document.querySelector("#btnEjecutarEj6").addEventListener("click", (e) => {
    e.preventDefault();
    let numeroIngresado = prompt("Ingrese el número hasta dónde generar la pirámide:");
    let stringRespuesta = "";
    if (numeroIngresado !== null){
        numeroIngresado = Number(numeroIngresado);
        if (isNaN(numeroIngresado)){
            alert("¡Se debe ingresar un número para la ejecución del programa!");
        } else{
            console.log(numeroIngresado);
            for (let i = 1; i <= numeroIngresado; i++){
                let numRepetido = "";
                for (let j = 1; j <= i; j++){
                    numRepetido += i;
                }
                if (i === numeroIngresado){
                    stringRespuesta += numRepetido;
                } else{
                    stringRespuesta += `${numRepetido}\n`;
                }
                numRepetido = "";
            }
            document.querySelector("#textRespEj6").innerText = stringRespuesta;
        }
    }
});
document.querySelector("#btnReiniciarEj6").addEventListener("click", () => {
    document.querySelector("#textRespEj6").innerText = "...";
});
/*
    7. Realizar un script que escriba los números del 1 al número que se indique (máximo 100), 
    que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
*/
/* Creo el botón y el modal para el ejercicio 7 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_7 = crearModalButton(7);
const contenedorEjercicio_7 = crearContenedorModal(7);
contenedorEjercicio_7.appendChild(btnEjercicio_7);
contenedorEjercicio_7.appendChild(crearModal(7, contenedorModales.ejercicio7Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_7);
/* Lógica del ejercicio 7 */
document.querySelector("#btnEjecutarEj7").addEventListener("click", () => {
    let numeroIngresado = prompt("Ingrese el número hasta dónde realizar la ejecución (máximo 100):");
    let stringRespuesta = "";
    if (numeroIngresado != null){
        numeroIngresado = Number(numeroIngresado);
        if (isNaN(numeroIngresado)){
            alert("¡Se debe ingresar un número para la ejecución del programa!");
        } else if (numeroIngresado > 100 || numeroIngresado < 1){
            alert("¡El número debe ser mayor a 1 y como máximo 100!");
        } else{
            for (let i = 1; i <= numeroIngresado; i++){
                stringRespuesta += `${i}`;
                if (i % 9 == 0){
                    stringRespuesta += " (múltiplo de 9)\n";
                } else if (i % 5 == 0){
                    stringRespuesta += "\n--------------------\n";
                } else if (i % 4 == 0){
                    stringRespuesta += " (múltiplo de 4)\n";
                } else{
                    stringRespuesta += "\n";
                }
            }
            document.querySelector("#textRespEj7").innerText = stringRespuesta;
        }
    }
});
document.querySelector("#btnReiniciarEj7").addEventListener("click", () => {
    document.querySelector("#textRespEj7").innerText = "...";
});

/*
    8. Realiza un script que pida número de filas y columnas y escriba una tabla. 
    Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
    Si, por ejemplo, la tabla es de 7×5 los números irán del 1 al 35.
*/
/* Creo el botón y el modal para el ejercicio 8 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_8 = crearModalButton(8);
const contenedorEjercicio_8 = crearContenedorModal(8);
contenedorEjercicio_8.appendChild(btnEjercicio_8);
contenedorEjercicio_8.appendChild(crearModal(8, contenedorModales.ejercicio8Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_8);
/* Lógica del ejercicio 8 */
document.querySelector("#btnIngresarEj8").addEventListener("click", () => {
    const tabla = createElementCustom("table", ["table", "table-striped", "table-dark", "mb-0"], "", {});
    const tbody = createElementCustom("tbody", [], "", {});
    const valorInputFilas = Number(document.querySelector("#inputFilas_ej8").value);
    const valorInputColumnas = Number(document.querySelector("#inputColumnas_ej8").value);
    if (isNaN(valorInputColumnas) || isNaN(valorInputFilas)){
        alert("Error! Se debe ingresar un número válido.");
    } else if (valorInputColumnas > 18 || valorInputFilas > 18){
        alert("Error! Maximo 18 filas y 18 columnas!");
    }
    else{
        limpiar_ej8();
        let ultimoValorColumna = 0;
        for (let i = 1; i <= valorInputFilas; i++){
            let tr = createElementCustom("tr", [], "", {});
            i % 2 == 0 ? tr.classList.toggle("a") : tr.classList.toggle("b");
            for (let j = 1; j <= valorInputColumnas; j++){
                ultimoValorColumna++;
                let td = createElementCustom("td", [], ultimoValorColumna.toString(), {});
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);
        document.querySelector("#divRespEj8").appendChild(tabla);
    }
});
const limpiar_ej8 = () => {
    const divRespEj8 = document.querySelector("#divRespEj8");
    if (divRespEj8.hasChildNodes()){
        divRespEj8.removeChild(divRespEj8.firstElementChild);
    }
    document.querySelector("#inputColumnas_ej8").value = "";
    document.querySelector("#inputFilas_ej8").value = "";
}
document.querySelector("#btnReiniciarEj8").addEventListener("click", () => {
    limpiar_ej8();
});

/*
    9. Realizar un script que imprima 14 resultados aleatorios de una quiniela 1 X 2. Ejemplo de resultado:
        Resultado 1: 1
        Resultado 2: X
        Resultado 3: 2
        ...
        Resultado 14: 2
        Además agregar la probabilidad de que salga el 1 sea del 60%, la de la X del 30% y la del 2 del 10%
*/
/* Creo el botón y el modal para el ejercicio 9 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_9 = crearModalButton(9);
const contenedorEjercicio_9 = crearContenedorModal(9);
contenedorEjercicio_9.appendChild(btnEjercicio_9);
contenedorEjercicio_9.appendChild(crearModal(9, contenedorModales.ejercicio9Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_9);
/* Lógica del ejercicio 9 */
document.querySelector("#btnEjecutarEj9").addEventListener("click", () => {
    const pResult = document.querySelector("#textRespEj9");
    pResult.innerText = "";
    for(let i = 1; i <= 14; i++){
        let num = Math.round(Math.random() * 100)
        if (num <= 60){
            pResult.innerText += `Resultado ${i}: 1\n`;
        } else if (num <= 90){
            pResult.innerText += `Resultado ${i}: X\n`;
        } else{
            pResult.innerText += `Resultado ${i}: 2\n`;
        }
    }
});
document.querySelector("#btnReiniciarEj9").addEventListener("click", () => {
    document.querySelector("#textRespEj9").innerText = "...";
});

/*
    10. Realiza un script que cuente el número de vocales que tiene un texto.
*/
/* Creo el botón y el modal para el ejercicio 10 y lo coloco dentro del contenedor del HTML */
const btnEjercicio_10 = crearModalButton(10);
const contenedorEjercicio_10 = crearContenedorModal(10);
contenedorEjercicio_10.appendChild(btnEjercicio_10);
contenedorEjercicio_10.appendChild(crearModal(10, contenedorModales.ejercicio10Modal()));
contenedorEjercicios.appendChild(contenedorEjercicio_10);
/* Lógica del ejercicio 10 */
document.querySelector("#btnContarVocalesEj10").addEventListener("click", () => {
    const esVocal = letra => letra.length == 1 && /^[aeiouáéíóúü]{1}.*/i.test(letra);
    const textoInput = document.querySelector("#inputTextoEj10").value;
    const inputRespuesta = document.querySelector("#inputRespEj10");
    let contador = 0;
    for (let i = 0; i < textoInput.length; i++){
        if (esVocal(textoInput[i])) contador++;
    }
    inputRespuesta.value = contador == 0 ? `No hay vocales en el texto ingresado.`: `Hay un total de ${contador} vocales en el texto ingresado.`;
});
document.querySelector("#btnReiniciarEj10").addEventListener("click", () => {
    document.querySelector("#inputRespEj10").value = "...";
    document.querySelector("#inputTextoEj10").value = "";
});