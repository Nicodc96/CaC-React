import { createElementCustom } from "./elementos.js"
/**
 * Array que contiene las funciones que generan el contenido necesario para los ejercicios, de orden 0 - N 
 * *(siendo N un número natural indeterminado)*
 */
const contenedorModales = [
    function(){ // 1
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
    function(){ // 2
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
    function(){ // 3
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
    function(){ // 4
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
    function(){ // 5
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
    function(){ // 6
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
    function(){ // 7
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
    function(){ // 8
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
    function(){ // 9
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
    function(){ // 10
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
    function(){ // 11
        const divRow1 = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "Realiza un script que determine los años bisiestos a partir de 2 inputs. Los años negativos son considerados a.C.", {});
        const divRow1_1 = createElementCustom("div", ["row"], "", {});
        const label1_1 = createElementCustom("label", ["col-sm-3", "col-form-label"], "Año de inicio:", {"for":"inputAnioInicio_ej11"});
        const divCol1_1 = createElementCustom("div", ["col-sm-9"], "", {});
        const inputAnioInicio_ej11 = createElementCustom("input", ["form-control"], "", {
            "type": "number",
            "id": "inputAnioInicio_ej11",
            "placeholder": "Año Inicio",
            "max":"10000"
        });
        const divRow1_2 = createElementCustom("div", ["row", "mt-2"], "", {});
        const label1_2 = createElementCustom("label", ["col-sm-3", "col-form-label"], "Año de fin:", {"for":"inputAnioFin_ej11"});
        const divCol1_2 = createElementCustom("div", ["col-sm-9"], "", {});
        const inputAnioFin_ej11 = createElementCustom("input", ["form-control"], "", {
            "type": "number",
            "id": "inputAnioFin_ej11",
            "placeholder": "Año fin",
            "max":"10000"
        });
        /* Uno los elementos según como corresponde */        

        divRow1.appendChild(h3);
        divRow1.appendChild(p1);
        divRow1.appendChild(divRow1_1);
        divRow1.appendChild(divRow1_2);
        divRow1_1.appendChild(label1_1);
        divRow1_1.appendChild(divCol1_1);
        divCol1_1.appendChild(inputAnioInicio_ej11);
        divRow1_2.appendChild(label1_2);
        divRow1_2.appendChild(divCol1_2);
        divCol1_2.appendChild(inputAnioFin_ej11);
        
        const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
        const divCol2 = createElementCustom("div", ["col", "d-flex", "flex-column", "align-items-center"], "", {});
        const pResultTitle = createElementCustom("p", [], "Respuesta:", {});
        const pResultBody = createElementCustom("p", [], "", { "id":"pRespEj11" });
        const divRow3 = createElementCustom("div", ["row"], "", {});
        const divCol3 = createElementCustom("div", ["col", "d-flex", "justify-content-center", "gap-2"], "", {});
        const buttonSubmit = createElementCustom("button", ["btn", "btn-success", "mt-2"], "Ingresar", { 
            "type":"button",
            "id": "btnIngresarEj11"
        });
        const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-2"], "Reiniciar", { 
            "type":"button",
            "id": "btnReiniciarEj11"
        });
        /* Uno los elementos según como corresponde */
        divRow2.appendChild(divCol2);
        divRow2.appendChild(divCol2);
        divCol2.appendChild(pResultTitle);
        divCol2.appendChild(pResultBody);
        divRow3.appendChild(divCol3);
        divCol3.appendChild(buttonSubmit);
        divCol3.appendChild(buttonReiniciar);
    
        return [divRow1, divRow2, divRow3];
    },
    function(){ // 12
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-3"], "Elaborar una aplicación que calcule los centros numéricos entre 1 HASTA el número que el usuario ingrese.", {});
        const label = createElementCustom("label", ["col-sm-3", "col-form-label"], "Ingrese el número:", {"for":"inputNumeroEj12"});
        const divCol1 = createElementCustom("div", ["col-sm-9"], "", {});
        const divRow1Plus = createElementCustom("div", ["row"], "", {});
        const divCol1Plus = createElementCustom("div", ["col", "d-flex", "gap-3", "flex-row", "mt-2"], "", {});
        const inputPalabra = createElementCustom("input", ["form-control"], "", {
            "type": "number",
            "min": "1",
            "id": "inputNumeroEj12",
            "placeholder": "Aquí escribir el número hasta donde calcular..."
        });
        const buttonContar = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Calcular", { 
            "type": "button",
            "id": "btnCalcularEj12"
        });
        const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-1"], "Reiniciar", {
            "type": "button",
            "id": "btnReiniciarEj12"
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
        const labelResult = createElementCustom("label", ["col-sm-3", "col-form-label"], "Respuesta:", { "for":"inputRespEj12" });
        const divCol2 = createElementCustom("div", ["col-sm-9"], "", {});
        const inputResult = createElementCustom("input", ["form-control-plaintext"], "", {
            "type":"text",
            "readonly":"",
            "id":"inputRespEj12",
            "value": "..."
        });
        const divRow3 = createElementCustom("div", ["mb-3", "row"], "", {});
        const divCol1Row3 = createElementCustom("div", ["col", "d-flex", "flex-column", "align-items-end"], "", {});
        const svgInfo = `<div data-bs-toggle="collapse" data-bs-target="#collapseTextSvgInfoEj12" id="contenedorSvgInfoEj12">
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" 
            fill="none" id="svgInfoEj12" class="svgInfo">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor" />
            </svg>
        </div>`;
        const divTextSvgInfo = createElementCustom("div", ["collapse"], "", {"id":"collapseTextSvgInfoEj12"});
        const textSvgInfo = createElementCustom("p", ["mb-0", "text-center", "fst-italic"], "Un centro numérico es un número que separa una lista de números enteros (comenzando en 1) en dos grupos de números, cuyas sumas son iguales. El primer centro numérico es el 6, el cual separa la lista (1 a 8) en los grupos: (1; 2; 3; 4; 5) y (7; 8) cuyas sumas son ambas iguales a 15. El segundo centro numérico es el 35, el cual separa la lista (1 a 49) en los grupos: (1 a 34) y (36 a 49) cuyas sumas son ambas iguales a 595.", {});

        /* Uno los elementos según como corresponde */
        divTextSvgInfo.appendChild(textSvgInfo);
        divRow3.appendChild(divCol1Row3);
        divCol1Row3.innerHTML += svgInfo;
        divCol1Row3.appendChild(divTextSvgInfo);
        
        divCol2.appendChild(inputResult);
        divRow2.appendChild(labelResult);
        divRow2.appendChild(divCol2);
    
        return [divRow, divRow2, divRow3];
    },
    function(){ // 13
        /* Row 1 y sus sub elementos */
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const h3 = createElementCustom("h3", ["text-center"], "Descripción del ejercicio", {});
        const p1 = createElementCustom("p", ["text-center", "fst-italic", "mt-2"], "Realiza un programa que calcule salarios de empleados individualmente según antigüedad, horas y valor de c/hora. Se debe aplicar finalmente un 13% en conceptos de descuento.", {});
        const divContenedorDeInputs = createElementCustom("div", ["row"], "", {});
        const divColContenedor = createElementCustom("div", ["col", "d-flex", "flex-column", "gap-1"], "", {});
        const divSubRow1 = createElementCustom("div", ["row"], "", {});
        const inputlabel1 = createElementCustom("label", ["col-sm-3", "col-form-label"], "Nombre empleado:", {"for":"inputNombreEmpEj13"});
        const inputCol1 = createElementCustom("div", ["col-sm-9"], "", {});
        const divSubRow2 = createElementCustom("div", ["row"], "", {});
        const inputlabel2 = createElementCustom("label", ["col-sm-3", "col-form-label"], "Antigüedad:", {"for":"inputAntigEmpEj13"});
        const inputCol2 = createElementCustom("div", ["col-sm-9"], "", {});
        const divSubRow3 = createElementCustom("div", ["row"], "", {});
        const inputlabel3 = createElementCustom("label", ["col-sm-3", "col-form-label"], "Horas trabajadas:", {"for":"inputHorasTrabEmpEj13"});
        const inputCol3 = createElementCustom("div", ["col-sm-9"], "", {});
        const divSubRow4 = createElementCustom("div", ["row"], "", {});
        const inputlabel4 = createElementCustom("label", ["col-sm-3", "col-form-label"], "Valor Hora:", {"for":"inputValorHoraEmpEj13"});
        const inputCol4 = createElementCustom("div", ["col-sm-9"], "", {});
        const divRowBotones = createElementCustom("div", ["row"], "", {});
        const divColRowBotones = createElementCustom("div", ["col", "d-flex", "gap-3", "justify-content-center", "mt-2"], "", {});
        const inputNombreEmp = createElementCustom("input", ["form-control"], "", {
            "type": "text",
            "id": "inputNombreEmpEj13",
            "placeholder": "Ingrese un nombre..."
        });
        const inputAntiguedadEmp = createElementCustom("input", ["form-control"], "", {
            "type": "number",
            "min": "0",
            "max": "99",
            "id": "inputAntigEmpEj13",
            "placeholder": "Ingrese años de antiguedad..."
        });
        const inputHorasTrabajadasEmp = createElementCustom("input", ["form-control"], "", {
            "type": "number",
            "min": "0",
            "id": "inputHorasTrabEmpEj13",
            "placeholder": "Ingrese total de horas trabajadas..."
        });
        const inputValorHorasEmp = createElementCustom("input", ["form-control"], "", {
            "type": "number",
            "min": "0",
            "id": "inputValorHoraEmpEj13",
            "placeholder": "Ingrese valor de cada hora trabajada..."
        });
        const buttonAgregar = createElementCustom("button", ["btn", "btn-success", "mt-1"], "Agregar Empleado", { 
            "type": "button",
            "id": "btnAgregarEj13"
        });
        const buttonCalcular = createElementCustom("button", ["btn", "btn-primary", "mt-1"], "Calcular Salarios", { 
            "type": "button",
            "id": "btnCalcularEj13"
        });
        const buttonReiniciar = createElementCustom("button", ["btn", "btn-secondary", "mt-1"], "Reiniciar", {
            "type": "button",
            "id": "btnReiniciarEj13"
        });

        const divRowEmpAgreg = createElementCustom("div", ["row"], "", {});
        const divColRowEmpAgreg = createElementCustom("div", ["col"], "", {});
        const pEmpAgreg = createElementCustom("p", ["text-center", "fw-bolder", "mt-2"], "", {"id": "txtEmpAgregadoEj13"});
        /* Uno los elementos según como corresponde */
        divRow.appendChild(h3);
        divRow.appendChild(p1);
        divRow.appendChild(divContenedorDeInputs);

        // Row contendor central
        divContenedorDeInputs.appendChild(divColContenedor);
        divColContenedor.appendChild(divSubRow1);
        divColContenedor.appendChild(divSubRow2);
        divColContenedor.appendChild(divSubRow3);
        divColContenedor.appendChild(divSubRow4);
        
        // Row Input 1
        divSubRow1.appendChild(inputlabel1);
        divSubRow1.appendChild(inputCol1);
        inputCol1.appendChild(inputNombreEmp);

        // Row Input 2
        divSubRow2.appendChild(inputlabel2);
        divSubRow2.appendChild(inputCol2);
        inputCol2.appendChild(inputAntiguedadEmp);

        // Row Input 3
        divSubRow3.appendChild(inputlabel3);
        divSubRow3.appendChild(inputCol3);
        inputCol3.appendChild(inputHorasTrabajadasEmp);

        // Row Input 4        
        divSubRow4.appendChild(inputlabel4);
        divSubRow4.appendChild(inputCol4);
        inputCol4.appendChild(inputValorHorasEmp);

        // Row de Botones
        divRowBotones.appendChild(divColRowBotones);
        divColRowBotones.appendChild(buttonAgregar);
        divColRowBotones.appendChild(buttonCalcular);
        divColRowBotones.appendChild(buttonReiniciar);
        divColContenedor.appendChild(divRowBotones);

        // Row para mostrar el 'p' del empleado agregado
        divRowEmpAgreg.appendChild(divColRowEmpAgreg);
        divColRowEmpAgreg.appendChild(pEmpAgreg);
        divColContenedor.appendChild(divRowEmpAgreg);

        /* Row 2 y sus sub elementos */        
        const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
        const divSubRow1Row2 = createElementCustom("div", ["row"], "", {});
        const divSubCol1SubRow1 = createElementCustom("div", ["col"], "", {});
        const pResult = createElementCustom("p", ["text-center", "mb-5"], "Respuesta:", {});
        const divSubRow2Row2 = createElementCustom("div", ["row"], "", {});
        const divSubCol2SubRow2 = createElementCustom("div", ["col", "d-flex", "justify-content-center"], "", {});
        const divResult = createElementCustom("div", ["d-flex", "justify-content-center", "table-responsive", "rounded"], "", {"id": "divResultadoEj13"});

        /* Uno los elementos según como corresponde */
        divSubRow1Row2.appendChild(divSubCol1SubRow1);
        divSubCol1SubRow1.appendChild(pResult);
        divSubRow2Row2.appendChild(divSubCol2SubRow2);
        divSubCol2SubRow2.appendChild(divResult);

        // Junto los 2 sub-rows en el row central 2
        divRow2.appendChild(divSubRow1Row2);
        divRow2.appendChild(divSubRow2Row2);

        // Row 3
        const divRow3 = createElementCustom("div", ["mb-3", "row"], "", {});
        const divColSvg = createElementCustom("div", ["col", "d-flex", "flex-column", "align-items-end"], "", {});
        const svgInfo = `<div data-bs-toggle="collapse" data-bs-target="#collapseTextSvgInfoEj13" id="contenedorSvgInfoEj13">
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" 
            fill="none" id="svgInfoEj13" class="svgInfo">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor" />
            </svg>
        </div>`;
        const divTextSvgInfo = createElementCustom("div", ["collapse"], "", {"id":"collapseTextSvgInfoEj13"});
        const textSvgInfo = createElementCustom("p", ["mb-0", "text-center", "fst-italic"], "Se pide calcular el importe a cobrar teniendo en cuenta que el total (que resulta de multiplicar el valor hora por la cantidad de horas trabajadas), hay que sumarle la cantidad de años trabajados multiplicados por $150, y al total de todas esas operaciones restarle el 13% en concepto de descuentos. \n\nMostrar el recibo correspondiente con el nombre, la antigüedad, el valor hora, el total a cobrar en bruto y el total a cobrar neto de todos los empleados ingresados.", {});

        divRow3.appendChild(divColSvg);
        divColSvg.innerHTML += svgInfo;
        divColSvg.appendChild(divTextSvgInfo);
        divTextSvgInfo.appendChild(textSvgInfo);
    
        return [divRow, divRow2, divRow3];
    },
    function(){ // 14
    },
    function(){ // 15
    },
    function(){ // 16
    },
    function(){ // 17
    },
    function(){ // 18
    },
    function(){ // 19
    },
    function(){ // 20
    }
]

export { contenedorModales };