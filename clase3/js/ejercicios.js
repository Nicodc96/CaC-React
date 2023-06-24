import { createElementCustom } from "./elementos.js";
import { contenedorModales } from "./modals.js";
import { cargarElementosEjerciciosAlDom } from "./ejercicios_dom.js";
const contenedorEjercicios = document.querySelector("#containerEjercicios");
const CANT_EJERCICIOS_ACTUAL = 20;

////////////////////// Zona desarrollo de ejercicios //////////////////////
/*
    1. Pedir la edad y si es mayor de 18 años indica que ya puede conducir.
*/

/* ------ Cargo elementos necesarios para armar los modals de los ejercicios al DOM ------ */
for (let i = 1; i <= CANT_EJERCICIOS_ACTUAL; i++){
    cargarElementosEjerciciosAlDom(contenedorEjercicios, i, contenedorModales[i-1]());
}

/* Lógica del ejercicio 1 */
document.querySelector("#btnIngresarEdad").addEventListener("click", (e) => {
    e.preventDefault();
    const inputEdad = document.querySelector("#inputEdad");
    const inputResultado = document.querySelector("#inputRespuestaEdad");
    (inputEdad.value == null || inputEdad.value == "") ? inputResultado.value = "¡Debe ingresar una edad!" :
    (inputResultado.value = inputEdad.value >= 18 ? "Ya puede conducir, ¡felicidades!" : "No puede conducir, ¡aún es menor!");
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
            i == palabras_ej3.length-1 ?
            inputRespuestaPalabras.value += `${palabras_ej3[i]}` :
            inputRespuestaPalabras.value += `${palabras_ej3[i]}-`;
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
        (!isNaN(numDNI) && numDNI >= 0 && numDNI <= 99999999) ?
        letras_ej5.push(valoresLetras[numDNI % 23]) :
        alert("¡Error! El valor ingresado no es un número o está fuera de los valores.");
    } while(true);
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
                i === numeroIngresado ? stringRespuesta += numRepetido : stringRespuesta += `${numRepetido}\n`;
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

/* Lógica del ejercicio 10 */
document.querySelector("#btnContarVocalesEj10").addEventListener("click", () => {
    const esVocal = letra => letra.length == 1 && /^[aeiouáéíóúü]{1}.*/i.test(letra);
    const textoInput = document.querySelector("#inputTextoEj10").value;
    const inputRespuesta = document.querySelector("#inputRespEj10");
    let contador = 0;
    for (let i = 0; i < textoInput.length; i++){
        if (esVocal(textoInput[i])) contador++;
    }
    inputRespuesta.value = contador == 0 ?
    `No hay vocales en el texto ingresado.` : 
    `Hay un total de ${contador} vocales en el texto ingresado.`;
});
document.querySelector("#btnReiniciarEj10").addEventListener("click", () => {
    document.querySelector("#inputRespEj10").value = "...";
    document.querySelector("#inputTextoEj10").value = "";
});

/*
    11. Escribir un programa que determine si un año es bisiesto.
    Un año es bisiesto si es múltiplo de 4. Los años múltiplos de 100 no son bisiestos, salvo si ellos también son múltiplos de 400. 
    Por ejemplo: el año 2000 es bisiesto pero 1900 no.
    Pedirle al usuario un año de inicio y otro de fin y mostrar todos los años bisiestos en ese rango.
*/

/* Lógica del ejercicio 11 */
document.querySelector("#btnIngresarEj11").addEventListener("click", () => {
    const anioInicio = Number(document.querySelector("#inputAnioInicio_ej11").value);
    const anioFin = Number(document.querySelector("#inputAnioFin_ej11").value);
    const txtRespuesta = document.querySelector("#pRespEj11");
    const aniosBisiestos = [];
    txtRespuesta.innerText = "";
    if (isNaN(anioFin) || isNaN(anioInicio)){
        alert("Error, datos inválidos. Se debe ingresar números!");
    } else{
        for (let i = anioInicio; i <= anioFin; i++){
            if (i % 100 == 0){
                if (i % 400 == 0 && i % 4 == 0){
                    aniosBisiestos.push(i);
                }
            } else if (i % 4 == 0){
                aniosBisiestos.push(i);
            }
        }
    }
    for (let i = 0; i < aniosBisiestos.length; i++){
        if (i == aniosBisiestos.length - 1){
            aniosBisiestos[i] < 0 ? txtRespuesta.innerText += ` ${aniosBisiestos[i]} a.C` : txtRespuesta.innerText += ` ${aniosBisiestos[i]}`;
        } else{
            aniosBisiestos[i] < 0 ? txtRespuesta.innerText += ` ${aniosBisiestos[i]} a.C | ` : txtRespuesta.innerText += ` ${aniosBisiestos[i]} | `;
        }
    }
});
document.querySelector("#btnReiniciarEj11").addEventListener("click", () => {
    document.querySelector("#inputAnioInicio_ej11").value = "";
    document.querySelector("#inputAnioFin_ej11").value = "";
    document.querySelector("#pRespEj11").innerText = "...";
});

/*
    12. Un centro numérico es un número que separa una lista de números enteros (comenzando en 1) en dos grupos de números,
    cuyas sumas son iguales. El primer centro numérico es el 6, el cual separa la lista (1 a 8) en los grupos: 
    (1; 2; 3; 4; 5) y (7; 8) cuyas sumas son ambas iguales a 15.El segundo centro numérico es el 35, el cual separa 
    la lista (1 a 49) en los grupos: (1 a 34) y (36 a 49) cuyas sumas son ambas iguales a 595.

    Se pide elaborar una aplicación que calcule los centros numéricos entre 1 y el número que el usuario ingrese.
*/
/* Lógica del ejercicio 12 */
const svgEj12 = document.querySelector("#svgInfoEj12");
const tooltipEj12 = new bootstrap.Tooltip(svgEj12, {
    boundary: document.querySelector("#modalEjercicio12"),
    animation: true,
    title: 'Más info del ejercicio',
    placement: 'top',
    trigger: 'manual'
});
document.querySelector("#contenedorSvgInfoEj12").addEventListener("click", () => {
    setTimeout(() => {
        tooltipEj12.toggle()
    }, 235);
});
document.querySelector("#btnCalcularEj12").addEventListener("click", () => {
    const inputNumero = document.querySelector("#inputNumeroEj12");
    const numMaximoACalcular = Number(inputNumero.value);
    const inputResultado = document.querySelector("#inputRespEj12");
    inputResultado.value = "";
    const centrosNumericos = [];
    let acumuladorPrev = 0;
    let acumuladorPost = 0;
    for (let i = 1; i <= numMaximoACalcular; i++){
        for (let j = 1; j < i; j++){
            acumuladorPrev += j;
        }
        for (let k = i+1; k <= acumuladorPrev; k++){
            acumuladorPost += k;
            if (acumuladorPost == acumuladorPrev) centrosNumericos.push(i);
            else if(acumuladorPost > acumuladorPrev) break;
        }
        acumuladorPost = 0;
        acumuladorPrev = 0;
    }
    for (let i = 0; i < centrosNumericos.length; i++){
        i == centrosNumericos.length - 1 ?
        inputResultado.value += ` ${centrosNumericos[i]}` :
        inputResultado.value += ` ${centrosNumericos[i]},`;
    }
});
document.querySelector("#btnReiniciarEj12").addEventListener("click", () => {
    document.querySelector("#inputNumeroEj12").value = "";
    document.querySelector("#inputRespEj12").value = "...";
});

/*
    13. Se debe pedir el ingreso del valor hora, el nombre, la antigüedad (en años) y 
    la cantidad de horas trabajadas en el mes de N cantidad de empleados de una fábrica.
    Se pide calcular el importe a cobrar teniendo en cuenta que el total (que resulta de multiplicar el valor hora 
    por la cantidad de horas trabajadas), hay que sumarle la cantidad de años trabajados multiplicados por $150, 
    y al total de todas esas operaciones restarle el 13% en concepto de descuentos.

    Mostrar el recibo correspondiente con el nombre, la antigüedad, el valor hora, el total a cobrar en bruto 
    y el total a cobrar neto de todos los empleados ingresados.
*/
/* Lógica del ejercicio 13 */
const arrayEmpleadosEj13 = [];
const inputNombre = document.querySelector("#inputNombreEmpEj13");
const inputAntiguedad = document.querySelector("#inputAntigEmpEj13");
const inputHoras = document.querySelector("#inputHorasTrabEmpEj13");
const inputValorHoras = document.querySelector("#inputValorHoraEmpEj13");
const svgEj13 = document.querySelector("#svgInfoEj13");
const tooltipEj13 = new bootstrap.Tooltip(svgEj13, {
    boundary: document.querySelector("#modalEjercicio13"),
    animation: true,
    title: 'Más info del ejercicio',
    placement: 'top',
    trigger: 'manual'
});
document.querySelector("#contenedorSvgInfoEj13").addEventListener("click", () => {
    setTimeout(() => {
        tooltipEj13.toggle()
    }, 235);
});
const limpiar_ej13 = () => {
    inputNombre.value = "";
    inputAntiguedad.value = "";
    inputHoras.value = "";
    inputValorHoras.value = "";
}
document.querySelector("#btnAgregarEj13").addEventListener("click", () => {
    const mensajeEmpAgregado = document.querySelector("#txtEmpAgregadoEj13");
    if (inputNombre.value == "" || inputAntiguedad.value == "" || inputHoras.value == "" || inputValorHoras.value == ""){
        mensajeEmpAgregado.classList.add("text-danger");
        mensajeEmpAgregado.textContent = "Todos los campos deben completarse para agregar un empleado.";
        setTimeout(() => {
            mensajeEmpAgregado.classList.remove("text-danger");
            mensajeEmpAgregado.textContent = "";
        }, 3000);
    } else if (Number(inputAntiguedad.value) < 0 || Number(inputHoras.value) < 0 || Number(inputValorHoras.value) < 0){
        mensajeEmpAgregado.classList.add("text-danger");
        mensajeEmpAgregado.textContent = "Error: No se aceptan valores negativos.";
        setTimeout(() => {
            mensajeEmpAgregado.classList.remove("text-danger");
            mensajeEmpAgregado.textContent = "";
        }, 3000);
    } else if (Number(inputAntiguedad.value) >= 100){
        mensajeEmpAgregado.classList.add("text-danger");
        mensajeEmpAgregado.textContent = "Error: La antiguedad no puede superar los 99 años.";
        setTimeout(() => {
            mensajeEmpAgregado.classList.remove("text-danger");
            mensajeEmpAgregado.textContent = "";
        }, 3000);
    } else{
        arrayEmpleadosEj13.push({
            0: inputNombre.value,
            1: Number(inputAntiguedad.value),
            2: Number(inputHoras.value),
            3: Number(inputValorHoras.value)
        });
        mensajeEmpAgregado.classList.add("text-success");
        mensajeEmpAgregado.textContent = "Empleado agregado exitósamente.";
        limpiar_ej13();
        setTimeout(() => {
            mensajeEmpAgregado.classList.remove("text-success");
            mensajeEmpAgregado.textContent = "";
        }, 4000);
        console.log(arrayEmpleadosEj13);
    }
});
document.querySelector("#btnReiniciarEj13").addEventListener("click", () => {
    limpiar_ej13();
    arrayEmpleadosEj13.length = 0;
});
document.querySelector("#btnCalcularEj13").addEventListener("click", () => {
    if (arrayEmpleadosEj13.length == 0){
        const mensajeEmpAgregado = document.querySelector("#txtEmpAgregadoEj13");
        mensajeEmpAgregado.classList.add("text-danger");
        mensajeEmpAgregado.textContent = "Se debe agregar al menos un empleado antes.";
        limpiar_ej13();
        setTimeout(() => {
            mensajeEmpAgregado.classList.remove("text-danger");
            mensajeEmpAgregado.textContent = "";
        }, 3000);
    } else{
        const tabla = createElementCustom("table", ["table", "table-striped", "table-dark", "mb-0"], "", {});
        const thead = createElementCustom("thead", [], "", {});
        const tbody = createElementCustom("tbody", [], "", {});
        const theadTr = createElementCustom("tr", [], "", {"id":"theadRowEj13"});
        theadTr.appendChild(createElementCustom("th", [], "Nombre", {}));
        theadTr.appendChild(createElementCustom("th", [], "Antigüedad", {}));
        theadTr.appendChild(createElementCustom("th", [], "Horas Trabajadas", {}));
        theadTr.appendChild(createElementCustom("th", [], "Valor x hora", {}));
        theadTr.appendChild(createElementCustom("th", [], "Importe a cobrar (13% Desc)", {}));
        thead.appendChild(theadTr);
        tabla.appendChild(thead);

        for (let i = 0; i < arrayEmpleadosEj13.length; i++){
            let tr = createElementCustom("tr", ["tr-table-responsive"], "", {});
            for (let j = 0; j <= Object.keys(arrayEmpleadosEj13[i]).length; j++){
                /* El índice [2] es la cantidad de horas, el [3] es el valor de cada hora, y el [1] es la antiguedad*/
                let importeACobrar = (arrayEmpleadosEj13[i][2] * arrayEmpleadosEj13[i][3]) + (arrayEmpleadosEj13[i][1] * 150);
                let importeFinal = importeACobrar - (importeACobrar * 0.13);
                let td = j == 4 ?
                createElementCustom("td", ["text-center"], `$${importeFinal}`, {}) :
                createElementCustom("td", ["text-center"], arrayEmpleadosEj13[i][j].toString(), {});
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);
        /* Para limpiar el contenido de la tabla anterior en caso de agregar más empleados */
        const divRespEj13 = document.querySelector("#divResultadoEj13");
        if (divRespEj13.hasChildNodes()){
            divRespEj13.removeChild(divRespEj13.firstElementChild);
        }
        document.querySelector("#divResultadoEj13").appendChild(tabla);
    }
});

/*
    14. Generar una tabla en HTML (con CSS y Bootstrap) que muestre la tabla de multiplicar de un número que 
    se ingresa por input.
    Debe ser cualquier número natural sin límite.
*/
/* Lógica del ejercicio 14 */
document.querySelector("#btnGenerarEj14").addEventListener("click", () => {
    const inputNumero = document.querySelector("#inputNumeroEj14");
    const divResultado = document.querySelector("#divResultadoEj14");
    if (Number(inputNumero.value) <= 0){
        const pTemp = createElementCustom("p", ["text-center", "text-danger", "fw-bolder"], "El número ingresado debe ser natural (<= 1).", {});
        divResultado.appendChild(pTemp);
        setTimeout(() => {
            divResultado.removeChild(divResultado.firstElementChild);
        }, 3000);
    } else{
        limpiar_ej14();
        const tabla = createElementCustom("table", ["table", "table-striped", "table-sm", "mb-0"], "", {});
        const thead = createElementCustom("thead", [], "", {});
        const tbody = createElementCustom("tbody", [], "", {});
        const theadTr = createElementCustom("tr", [], "", {});

        theadTr.appendChild(createElementCustom("th", ["text-center"], `Tabla del ${inputNumero.value}`, {"colspan":"2"}));
        thead.appendChild(theadTr);
        tabla.appendChild(thead);

        for (let i = 1; i <= 10; i++){
            let tr = createElementCustom("tr", [], "", {});
            for (let j = 1; j <= 2; j++){
                let td = j == 1 ?
                createElementCustom("td", ["text-center", "pe-3", "px-3"], `${Number(inputNumero.value)} x ${i}`) :
                createElementCustom("td", ["text-center", "pe-3", "px-3"], `${Number(inputNumero.value) * i}`);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);
        divResultado.appendChild(tabla);
    }
});
const limpiar_ej14 = () => {
    const divResultadoEj14 = document.querySelector("#divResultadoEj14");
    if (divResultadoEj14.hasChildNodes()){
        divResultadoEj14.removeChild(divResultadoEj14.firstElementChild);
    }
}

document.querySelector("#btnReiniciarEj14").addEventListener("click", () => {
    document.querySelector("#inputNumeroEj14").value = "";
    limpiar_ej14();
});

/*
    15. Desarrollar un algoritmo que permita realizar el cálculo del monto a pagar de la factura de consumo
    de internet de clientes de una empresa. Para ello, el programa debe solicitar por teclado dos datos:
    DNI cliente, y tipo de servicio.
    Los tipos de servicio son 3:
    a. Internet 30 megas (valor de $7.5/h - 10% de descuento a la suma final)
    b. Internet 50 megas (valor $9.3/h - 5% descuento a la suma final)
    c. Internet 100 megas (valor fijo de $12/h)
    Se debe realizar el cálculo durante 30 días y mostrar en una tabla el monto a pagar y si se aplicó un descuento.
*/
/* Lógica del ejercicio 15 */
const listaClientesEj15 = [];
const svgEj15 = document.querySelector("#svgInfoEj15");
const tooltipEj15 = new bootstrap.Tooltip(svgEj15, {
    boundary: document.querySelector("#modalEjercicio15"),
    animation: true,
    title: 'Más info del ejercicio',
    placement: 'top',
    trigger: 'manual'
});
document.querySelector("#contenedorSvgInfoEj15").addEventListener("click", () => {
    setTimeout(() => {
        tooltipEj15.toggle()
    }, 245);
});
document.querySelector("#btnAgregarEj15").addEventListener("click", () => {
    const inputDNI = document.querySelector("#inputDNIEj15");
    const selectServicio = document.querySelector("#selectServCliEj15");
    const pMensajeCliente = document.querySelector("#txtClienteAgregadoEj15");
    if (selectServicio.options.selectedIndex == 0){
        selectServicio.classList.add("is-invalid");
        pMensajeCliente.classList.add("text-danger");
        pMensajeCliente.textContent = "Debe elegir un servicio válido.";
        setTimeout(() => {
            selectServicio.classList.remove("is-invalid");
            pMensajeCliente.classList.remove("text-danger");
            pMensajeCliente.textContent = "";
        }, 2000);
    } else if (Number(inputDNI.value) < 0 || Number(inputDNI.value) > 99999999){
        inputDNI.classList.add("is-invalid");
        pMensajeCliente.classList.add("text-danger");
        pMensajeCliente.innerText = "Se debe ingresar un DNI válido.\n(Valores: 0 - 99.999.999)";
        setTimeout(() => {
            inputDNI.classList.remove("is-invalid");
            pMensajeCliente.classList.remove("text-danger");
            pMensajeCliente.textContent = "";
        }, 2500);
    } else{
        let existente = false;
        if (listaClientesEj15.length > 0){
            for (let i = 0; i < listaClientesEj15.length; i++){
                if (listaClientesEj15[i][0] == inputDNI.value){
                    existente = true;
                    break;
                }
            }
        }
        if (existente == false){
            listaClientesEj15.push({
                0: inputDNI.value,
                1: selectServicio.options.selectedIndex.toString()
            });
            pMensajeCliente.classList.add("text-success");
            pMensajeCliente.innerText = "Se agregó exitosamente un cliente.";
            setTimeout(() => {
                pMensajeCliente.classList.remove("text-success");
                pMensajeCliente.textContent = "";
            }, 2000);
        } else{
            inputDNI.classList.add("is-invalid");
            pMensajeCliente.classList.add("text-danger");
            pMensajeCliente.innerText = "Error. DNI ya registrado.\n";
            setTimeout(() => {
                inputDNI.classList.remove("is-invalid");
                pMensajeCliente.classList.remove("text-danger");
                pMensajeCliente.textContent = "";
            }, 2000);
        }
    }
});
document.querySelector("#btnCalcularEj15").addEventListener("click", () => {
    const pMensajeCliente = document.querySelector("#txtClienteAgregadoEj15");
    if (listaClientesEj15.length == 0){
        pMensajeCliente.classList.add("text-danger");
        pMensajeCliente.innerText = "Se debe ingresar al menos un cliente antes.";
        setTimeout(() => {
            pMensajeCliente.classList.remove("text-danger");
            pMensajeCliente.textContent = "";
        }, 2000);
    } else{
        const tabla = createElementCustom("table", ["table", "table-striped", "table-sm", "mb-0"], "", {});
        const thead = createElementCustom("thead", [], "", {});
        const tbody = createElementCustom("tbody", [], "", {});
        const theadTr = createElementCustom("tr", [], "", {});
        theadTr.appendChild(createElementCustom("th", ["text-center"], "DNI Cliente", {}));
        theadTr.appendChild(createElementCustom("th", ["text-center"], "Servicio elegido", {}));
        theadTr.appendChild(createElementCustom("th", ["text-center"], "Total a pagar", {}));
        thead.appendChild(theadTr);
        tabla.appendChild(thead);
        
        limpiar_tablaEj15();
        for (let i = 0; i < listaClientesEj15.length; i++){
            let tr = createElementCustom("tr", [], "", {});
            for (let j = 0; j < Object.keys(listaClientesEj15[i]).length + 1; j++){
                let td;
                // Verifico si j == 2, por lo que será la columna con el valor a calcular
                if (j == 2){
                    let calculo = 0;
                    if(listaClientesEj15[i][1] == "1"){
                        calculo = (7.5*24)*30;
                        calculo = calculo - calculo * 0.1;
                        td = createElementCustom("td", ["text-center"], `$${calculo}`, {});
                    } else if(listaClientesEj15[i][1] == "2"){
                        calculo = (9.3*24)*30;
                        calculo = calculo - calculo * 0.05;
                        td = createElementCustom("td", ["text-center"], `$${calculo.toFixed(2)}`, {});
                    } else{
                        td = createElementCustom("td", ["text-center"], `$${(12*24)*30}`, {});
                    }
                } else if(j == 1){
                    // Le asigno el contenido del texto del SELECT según el valor del índice que tiene el elemento en ese momento
                    // EJ: listaClientesEj15[i]['1'] == 3 => option.value = 3 => "Internet 100 Mb"
                    td = createElementCustom("td", ["text-center"], document.querySelector("#selectServCliEj15").options[listaClientesEj15[i]['1']].textContent, {});
                } else{
                    td = createElementCustom("td", ["text-center"], listaClientesEj15[i][j], {});
                }
                tr.appendChild(td);            
            }
            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);
        document.querySelector("#divResultadoEj15").appendChild(tabla);
    }
});
const limpiar_tablaEj15 = () => {
    const divResultadoEj15 = document.querySelector("#divResultadoEj15");
    if (divResultadoEj15.hasChildNodes()){
        divResultadoEj15.removeChild(divResultadoEj15.firstElementChild);
    }
}
document.querySelector("#btnReiniciarEj15").addEventListener("click", () => {
    document.querySelector("#inputDNIEj15").value = "";
    document.querySelector("#selectServCliEj15").options.selectedIndex = 0;
    listaClientesEj15.length = 0;
    limpiar_tablaEj15();
});

/*
    16. Diseña un programa que a partir de un número natural N y un máximo M, calcule cuantos números
    N existen desde el 1 hasta el M.
    Ej: "¿Cúantas veces está escrito el número 6 del 1 al 1000? Respuesta: 309"
*/

/*
    17. 
*/

/*
    18. 
*/

/*
    19. 
*/

/*
    20. 
*/

/* Activación de tooltips de Bootstrap */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));