/**
 * Obtiene el mayor de dos números.
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Number | 'NaN'} El mayor de ambos, en caso de iguales devuelve el valor. Si el valor no es un
 * número devuelve NaN.
 */
const obtenerMayor = (x, y) => !isNaN(Number(x)) && !isNaN(Number(y)) && x === y ? x : Math.max(x, y);

/**
 * Determina si la persona es mayor de edad
 * @param {Number} edad 
 * @returns {String | 'NaN'} 'Allowed' si tiene 18 años o más, sino 'Not allowed'. Si el valor no es un número devuelve NaN;
 */
const mayoriaDeEdad = edad => !isNaN(Number(edad)) ? (edad >= 18 ? "Allowed" : "Not allowed") : NaN;

/**
 * Determina el estado de conexión de un usuario a partir de un valor numérico.
 * @param {Number} status 
 * @returns {String} 1: 'Online', 2: 'Away'. De lo contrario 'Offline'.
 */
const conection = status => status === 1 ? 'Online' : (status === 2 ? 'Away' : 'Offline');

/**
 *  Devuelve un saludo en 3 lenguajes distintos 
 * @param {string} idioma
 * @returns {string | undefined} El saludo en el idioma registrado, caso contrario devuelve 'Hola!'
 */
const saludo = idioma => {
    switch(idioma.toLowerCase()){
        case "aleman":
            return "Guten Tag!";
        case "mandarin":
            return "Ni Hao!";
        case "ingles":
            return "Hello!";
        default:
            return "Hola!";
    }
}
/**
 * Recibe un color en ingles y devuelve un mensaje indicando el color en inglés
 * @param {string} color
 * @returns {string} 'This is ...' en caso de color registrado, caso contrario 'Color not found.'
 */
const colors = color => {
    let msj = 'This is ';
    switch(color.toLowerCase()){
        case "blue":
            msj += "blue.";
            break;
        case "red":
            msj += "red.";
            break;
        case "green":
            msj += "green.";
            break;
        case "orange":
            msj += "orange.";
            break;
        default:
            msj = "Color not found.";
    }
    return msj;
}

/**
 * Indica si el valor ingresado es 10 o 5
 * @param {Number} numero 
 * @returns {Boolean} 'true' si se verifica, de lo contrario 'false'.
 */
const esDiezOCinco = numero => !isNaN(Number(numero)) && numero == 10 || numero == 5;

/**
 * Indica si el número enviado por parámetro es menor a 50 y mayor a 20
 * @param {Number} num
 * @returns {Boolean} 'true' si se verifica, de lo contrario 'false'
 */
const estaEnRango = num => num < 50 && num > 20;

/**
 * Verifica si el número enviado por parámetro es un entero (int/integer)
 * @param {Number} num
 * @returns {Boolean} 'true' si se verifica, de lo contrario 'false'
 */
const esEntero = num => !isNaN(parseInt(num)) && num.toString().split(".")[1] == undefined;

/**
 * Devuelve un mensaje según la división. Si es divisible por 3 => 'fizz',
 * Si es divisible por 5 => 'buzz', Si es divisible por 3 y 5 => 'fizzbuzz'
 * @param {number} num 
 * @returns {string | number} El mensaje si se verifica, de lo contrario sólo el número.
 */
const fizzBuzz = num => num % 3 == 0 && num % 5 == 0 ? "fizzbuzz" : (num % 5 == 0 ? "buzz" : (num % 3 == 0 ? 'fizz' : num));

/**
 * Determina el retorno según los valores de los parámetros.
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} num3
 * @returns {string | number | boolean} Si *num1* > *num2* y *num1* > *num3* devuelve *'Número 1 es mayor y positivo.'*. Si hay
 * algún número negativo devuelve *'Hay negativos.'*. Si *num3* > *num1* y *num3* > *num2* retorna *num3* + 1. Si recibe algún
 * 0 devuelve *'Error.'*. Cualquier otro caso devuelve *false*.
 */
const operadoresLogicos = (num1, num2, num3) =>  num1 == 0 || num2 == 0 || num3 == 0 ? "Error."
: ( num1 < 0 || num2 < 0 || num3 < 0 ? "Hay negativos."
: (num1 > num2 && num1 > num3 ? "Número 1 es mayor y positivo.": (num3 > num1 && num3 > num2) ? ++num3 : false));

/**
 * Verifica si el número pasado por parámetro es primo.
 * @param {Number} num
 * @returns {Boolean} *true* si se verifica, de lo contrario *false*.
 */
const esPrimo = (num) => {
    if (isNaN(num) || !esEntero(num) || num < 0) return false;
    for (let i = 2; i < num; i++){
        if (num % i == 0) return false;
    }
    return num != 1;
}
/**
 * Recibe un valor booleano y retorna en string su valor equivalente.
 * @param {Boolean} valor
 * @return {String } El mensaje según corresponda.
 */
const esVerdadero = valor => Boolean(valor) === true ? "Soy verdadero." : "Soy falso.";

/**
 * Crea una tabla de multiplicar.
 * @param {Number} num El valor a indicar la tabla.
 * @returns {Array} Resultados de la tabla
 */
const crearTablaMultiplicar = num => {
    const result = [];
    for (let i = num, j = 1; i <= num * 10; j++, i *= j){
        result.push(i);
        i = num;
    }
    return result;
}
/**
 * Lee un número entero y determina si tiene 3 dígitos.
 * @param {Number} num
 * @returns {Boolean} *true* si se verifica, de lo contrario *false*.
 */
const tieneTresDigitos = num => esEntero(num) && num >= 100 && num <= 999;

/**
 * Recibe un número y lo aumenta en 5 una cantidad de 8 veces.
 * @param {Number} num
 * @returns {Number} El valor final. Si el valor no es un número retorna *NaN*.
 */
const doWhile = num => {
    num = Number(num);
    if (isNaN(num)) return NaN;
    let repeticiones = 1;
    do{
        num += 5;
        repeticiones++;
    }while(repeticiones <= 8)
    return num;
}