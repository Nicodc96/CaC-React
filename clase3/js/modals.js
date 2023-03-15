import { createElementCustom } from "./elementos.js"
const contenedorModales = {
    ejercicio1Modal: () => {
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
    },
    ejercicio2Modal: () => {
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
    },
    ejercicio3Modal: () => {
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
    },
    ejercicio4Modal: () => {
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
    },
    ejercicio5Modal: () => {
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
}

export default contenedorModales;