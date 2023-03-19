import { createElementCustom } from "./elementos.js"
/**
 * Array que contiene las funciones que generan el contenido necesario para los ejercicios, de orden 0 - N 
 * *(siendo N un número natural indeterminado)*
 */
const contenedorModales = [
    function(){
        // 1
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "1. Pedir la edad y si es mayor de 18 años indica que ya puede conducir.", {});
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
    },
    function(){
        // 2
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "2. Pide una nota (número). Muestra la calificación según la nota:\n0-3: Muy deficiente\n3-5: Insuficiente\n5-6: Suficiente\n6-7: Bien\n7-9: Notable\n9-10: Sobresaliente", {});
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
    },
    function(){
        // 3
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "Realiza un script que pida cadenas de texto hasta que se pulse “Mostrar”. Al salir con “Mostrar” deben mostrarse todas las cadenas concatenadas con un guión '-'", {});
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
    },
    function(){
        // 4
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic" , "mt-3"], "Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.", {});
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
    },
    function(){
        // 5
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic" , "mt-3"], "Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad). Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) en ese órden. Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.", {});
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
    },
    function(){
        // 6
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "Realiza un script que escriba una pirámide del 1 hasta el número que se indique.", {});
        const divCol1 = createElementCustom("div", ["col", "d-flex", "justify-content-center", "pt-2"], "", {});
        const buttonEjecutar = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Ejecutar", { 
            "type": "submit",
            "id": "btnEjecutarEj6"
        });
        const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-2"], "Reiniciar", { 
            "type": "button",
            "id": "btnReiniciarEj6"
        });
        /* Uno los elementos según como corresponde */
        divCol1.appendChild(buttonEjecutar);
        divRow.appendChild(h3);
        divRow.appendChild(p1);
        divRow.appendChild(divCol1);
        
        const div2 = createElementCustom("div", ["mb-3", "d-flex", "flex-column", "align-items-center"], "", {});
        const textResult = createElementCustom("p", [], "Respuesta:", {});
        const pResult = createElementCustom("p", [], "...", { "id":"textRespEj6"});
        /* Uno los elementos según como corresponde */
        div2.appendChild(textResult);
        div2.appendChild(pResult);
        div2.appendChild(buttonReiniciar);
    
        return [divRow, div2];
    },
    function(){
        // 7
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "Realizar un script que escriba los números del 1 hasta el número que se indique (máximo 100), que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.", {});
        const divCol1 = createElementCustom("div", ["col", "d-flex", "justify-content-center", "pt-2"], "", {});
        const buttonEjecutar = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Ejecutar", { 
            "type": "button",
            "id": "btnEjecutarEj7"
        });
        const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-2"], "Reiniciar", { 
            "type": "button",
            "id": "btnReiniciarEj7"
        });
        /* Uno los elementos según como corresponde */
        divCol1.appendChild(buttonEjecutar);
        divRow.appendChild(h3);
        divRow.appendChild(p1);
        divRow.appendChild(divCol1);
        
        const div2 = createElementCustom("div", ["mb-3", "d-flex", "flex-column", "align-items-center"], "", {});
        const textResult = createElementCustom("p", [], "Respuesta:", {});
        const pResult = createElementCustom("p", [], "...", { "id":"textRespEj7"});
        /* Uno los elementos según como corresponde */
        div2.appendChild(textResult);
        div2.appendChild(pResult);
        div2.appendChild(buttonReiniciar);
    
        return [divRow, div2];
    },
    function(){
        // 8
        const divRow1 = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 1 al 35.", {});
        const divRow1_1 = createElementCustom("div", ["row"], "", {});
        const label1_1 = createElementCustom("label", ["col-sm-3", "col-form-label"], "Ingrese filas:", {"for":"inputFilas_ej8"});
        const divCol1_1 = createElementCustom("div", ["col-sm-9"], "", {});
        const inputFilas_ej8 = createElementCustom("input", ["form-control"], "", {
            "type": "number",
            "id": "inputFilas_ej8",
            "placeholder": "Máximo 18 filas",
            "min":"1",
            "max":"18"
        });
        const divRow1_2 = createElementCustom("div", ["row", "mt-2"], "", {});
        const label1_2 = createElementCustom("label", ["col-sm-3", "col-form-label"], "Ingrese columnas:", {"for":"inputColumnas_ej8"});
        const divCol1_2 = createElementCustom("div", ["col-sm-9"], "", {});
        const inputColumnas_ej8 = createElementCustom("input", ["form-control"], "", {
            "type": "number",
            "id": "inputColumnas_ej8",
            "placeholder": "Máximo 18 columnas",
            "min":"1",
            "max":"18"
        });
        /* Uno los elementos según como corresponde */        

        divRow1.appendChild(h3);
        divRow1.appendChild(p1);
        divRow1.appendChild(divRow1_1);
        divRow1.appendChild(divRow1_2);
        divRow1_1.appendChild(label1_1);
        divRow1_1.appendChild(divCol1_1);
        divCol1_1.appendChild(inputFilas_ej8);
        divRow1_2.appendChild(label1_2);
        divRow1_2.appendChild(divCol1_2);
        divCol1_2.appendChild(inputColumnas_ej8);
        
        const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
        const divCol2 = createElementCustom("div", ["col", "d-flex", "flex-column", "align-items-center"], "", {});
        const pResult = createElementCustom("p", [], "Respuesta:", {});
        const divResult = createElementCustom("div", ["d-flex", "justify-content-center", "table-responsive", "rounded"], "", { "id":"divRespEj8" });
        const divRow3 = createElementCustom("div", ["row"], "", {});
        const divCol3 = createElementCustom("div", ["col", "d-flex", "justify-content-center", "gap-2"], "", {});
        const buttonSubmit = createElementCustom("button", ["btn", "btn-success", "mt-2"], "Ingresar", { 
            "type":"button",
            "id": "btnIngresarEj8"
        });
        const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-2"], "Reiniciar", { 
            "type":"button",
            "id": "btnReiniciarEj8"
        });
        /* Uno los elementos según como corresponde */
        divRow2.appendChild(divCol2);
        divRow2.appendChild(divCol2);
        divCol2.appendChild(pResult);
        divCol2.appendChild(divResult);
        divRow3.appendChild(divCol3);
        divCol3.appendChild(buttonSubmit);
        divCol3.appendChild(buttonReiniciar);
    
        return [divRow1, divRow2, divRow3];
    },
    function(){
        // 9
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "Realizar un script que imprima 14 resultados aleatorios de una quiniela 1 X 2. Ejemplo de resultado: Resultado 1: 1, Resultado 2: X, Resultado 3: 2, ..., Resultado 14: 2. Además agregar la probabilidad de que salga el 1 sea del 60%, la de la X del 30% y la del 2 del 10%.", {});
        const divCol1 = createElementCustom("div", ["col", "d-flex", "justify-content-center", "pt-2"], "", {});
        const buttonEjecutar = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Ejecutar", { 
            "type": "button",
            "id": "btnEjecutarEj9"
        });
        const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-2"], "Reiniciar", { 
            "type": "button",
            "id": "btnReiniciarEj9"
        });
        /* Uno los elementos según como corresponde */
        divCol1.appendChild(buttonEjecutar);
        divRow.appendChild(h3);
        divRow.appendChild(p1);
        divRow.appendChild(divCol1);
        
        const div2 = createElementCustom("div", ["mb-3", "d-flex", "flex-column", "align-items-center"], "", {});
        const textResult = createElementCustom("p", [], "Respuesta:", {});
        const pResult = createElementCustom("p", [], "...", { "id":"textRespEj9"});
        /* Uno los elementos según como corresponde */
        div2.appendChild(textResult);
        div2.appendChild(pResult);
        div2.appendChild(buttonReiniciar);
    
        return [divRow, div2];
    },
    function(){
        // 10
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "Realiza un script que cuente el número de vocales que tiene un texto utilizando expresiones regulares (incluir mayúsculas acentos y ü).", {});
        const label = createElementCustom("label", ["col-sm-3", "col-form-label"], "Ingrese una palabra:", {"for":"inputTextoEj10"});
        const divCol1 = createElementCustom("div", ["col-sm-9"], "", {});
        const divRow1Plus = createElementCustom("div", ["row"], "", {});
        const divCol1Plus = createElementCustom("div", ["col", "d-flex", "gap-3", "flex-row", "mt-2"], "", {});
        const inputPalabra = createElementCustom("input", ["form-control"], "", {
            "type": "text",
            "id": "inputTextoEj10",
            "placeholder": "Ingrese una palabra..."
        });
        const buttonContar = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Contar Vocales", { 
            "type": "button",
            "id": "btnContarVocalesEj10"
        });
        const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-1"], "Reiniciar", {
            "type": "button",
            "id": "btnReiniciarEj10"
        })
        /* Uno los elementos según como corresponde */
        divCol1.appendChild(inputPalabra);
        divCol1.appendChild(divRow1Plus);
        divRow1Plus.appendChild(divCol1Plus);
        divCol1Plus.appendChild(buttonContar);
        divCol1Plus.appendChild(buttonReiniciar);
        divRow.appendChild(h3);
        divRow.appendChild(p1);
        divRow.appendChild(label);
        divRow.appendChild(divCol1);
        
        const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
        const labelResult = createElementCustom("label", ["col-sm-3", "col-form-label"], "Respuesta:", { "for":"inputRespEj10" });
        const divCol2 = createElementCustom("div", ["col-sm-9"], "", {});
        const inputResult = createElementCustom("input", ["form-control-plaintext"], "", {
            "type":"text",
            "readonly":"",
            "id":"inputRespEj10",
            "value": "..."
        });
        /* Uno los elementos según como corresponde */
        divCol2.appendChild(inputResult);
        divRow2.appendChild(labelResult);
        divRow2.appendChild(divCol2);
    
        return [divRow, divRow2];
    },
    function(){
        // 11
    },
    function(){
        // 12
    },
    function(){
        // 13
    },
    function(){
        // 14
    },
    function(){
        // 15
    }
]

export {contenedorModales };