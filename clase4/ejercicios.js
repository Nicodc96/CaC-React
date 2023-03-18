/* 
    EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
    UTILIZAMOS SWITCH
*/
const recomendarPelicula = (pelicula) =>{
    const res_pelicula = (pelicula) => {
        switch(pelicula){
            case "Volver al futuro":
                return "¿¡1.21 Gigowatts!?";
            case "Matrix":
                return "Esquivá esta.";
            case "IT":
                return "Todos flotan.";
            case "Spiderman":
                return "Un gran poder conlleva una gran responsabilidad.";
            default:
                return "Esa peli no me la conozco...";
        }
    }
    return pelicula ? res_pelicula(pelicula) : "¡Debe ingresar un dato!";
}

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "sarasa";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 73;

// Crea una variable booleana:
const nuevoBool = !true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - Number("5") === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

/**
 * Tomna un valor y devuelve su equivalente en string.
 * @param {*} str 
 * @returns {string}
 */
const devolverString = str => str.toString();

/**
 * Suma 2 números.
 * @param {Number} x primer número
 * @param {Number} y segundo número
 * @returns {Number | 'NaN'} El resultado de la suma, en caso de que alguno de los valores no
 * sea un número, devuelve *NaN*
 */
const suma = (x, y) => Number(x) + Number(y);

// function resta(x, y) {
//   // Resta "x" de "y" y devuelve el valor
//   // Tu código:
// }
/**
 * Resta 2 números.
 * @param {Number} x primer número
 * @param {Number} y segundo número
 * @returns {Number | 'NaN'} El resultado de la resta, en caso de que alguno de los valores no
 * sea un número, devuelve *NaN*
 */
const resta = (x, y) => Number(x) - Number(y);

/**
 * Realiza una multiplicación de 2 números.
 * @param {Number} x primer número
 * @param {Number} y segundo número
 * @returns {Number | 'NaN'} El resultado de la multiplicación, en caso de que alguno de los valores no
 * sea un número, devuelve *NaN*
 */
const multiplica = (x, y) => Number(x) * Number(y);

// function divide(x, y) {
//   // Divide "x" entre "y" y devuelve el valor
//   // Tu código:
// }
/**
 * Realiza una divisón de 2 números.
 * @param {Number} x primer número
 * @param {Number} y segundo número
 * @returns {Number | 'NaN'} El resultado de la divisón, en caso de que alguno de los valores no
 * sea un número o el valor de **y** sea 0, devuelve *NaN*
 */
const divide = (x, y) => Number(y) !== 0 ? Number(x) / Number(y) : NaN;

/**
 * Verifica si dos valores son iguales.
 * @param {*} x primer valor
 * @param {*} y segundo valor
 * @returns {Boolean} **true** si se verifica, de lo contrario **false**.
 */
const sonIguales = (x, y) => x == y;

/**
 * Verifica si dos strings poseen la misma longitud.
 * @param {string} str1 
 * @param {string} str2 
 * @returns {Boolean} **true** si se verifica, de lo contrario **false**.
 */
const tienenMismaLongitud = (str1, str2) => str1.length == str2.length;

/**
 * Verifica si el número por parámetro es exclusivamente menor a 90.
 * @param {number} num 
 * @returns {Boolean} **true** si se verifica, de lo contrario o si no es número **false**.
 */
const menosQueNoventa = (num) => !isNaN(num) && num < 90;

/**
 * Verifica si el número por parámetro es exclusivamente mayor a 50.
 * @param {number} num 
 * @returns {Boolean} **true** si se verifica, de lo contrario o si no es número **false**.
 */
const mayorQuecincuenta = (num) => !isNaN(num) && num > 50;

/**
 * Obtiene el valor decimal resultado de una división entre 2 números (máximo 3 dígitos).
 * @param {Number} x primer número
 * @param {Number} y segundo número
 * @returns {Number | 'NaN'} El valor decimal sin el entero. Si alguno de los parámetros no es un número
 * o no tiene valor decimal devuelve **NaN**
 */
const obtenerResto = (x, y) => Number(`0.${divide(x, y).toString().split(".")[1]}`).toFixed(3);

/**
 * Verifica si un número es par. No se considera 0 como valor par.
 * @param {Number} num 
 * @returns {Boolean} **true** si se verifica, de lo contrario **false**
 */
const esPar = num => Number(num) !== 0 && Number(num) % 2 == 0;

/**
 * Verifica si un número es impar. No se considera 0 como valor impar.
 * @param {Number} num 
 * @returns {Boolean} **true** si se verifica, de lo contrario **false**
 */
const esImpar = num => !esPar(num);

/**
 * Eleva un número al cuadrado.
 * @param {Number} num 
 * @returns {Number | 'NaN'} El resultado de la potencia. Si el valor no es número
 * devuelve **NaN**
 */
const elevarAlCuadrado = num => Math.pow(Number(num), 2);

/**
 * Eleva un número al cubo.
 * @param {Number} num 
 * @returns {Number | 'NaN'} El resultado de la potencia. Si el valor no es número
 * devuelve **NaN**
 */
const elevarAlCubo = num => Math.pow(Number(num), 3);

/**
 * Eleva un número.
 * @param {Number} num base
 * @param {Number} exponent exponente  
 * @returns {Number | 'NaN'} El resultado de la potencia. Si uno o más valores no son números
 * devuelve **NaN**
 */
const elevar = (num, exponent) => Math.pow(Number(num), Number(exponent));

/**
 * Redondea un número al entero más cercano.
 * @param {Number} num 
 * @returns {Number | 'NaN'} El valor del entero más cercano, si el número por parámetro
 * no es un número devuelve **NaN**
 */
const redondearNumero = num => Math.round(num);

/**
 * Redondea un número al entero más cercano hacia arriba.
 * @param {Number} num 
 * @returns {Number | 'NaN'} El valor del entero más cercano, si el número por parámetro
 * no es un número devuelve **NaN**
 */
const redondearHaciaArriba = num => Math.ceil(num);

/**
 * Devuelve un pseudo número aleatorio entre 0 y 1. 
 */
const numeroRandom = () => Math.random();
/**
 * Verifica si el valor es un número positivo, negativo o 0.
 * @param {Number} num 
 * @returns {String | Boolean | 'NaN'} El mensaje correspondiente, **false** si es valor es 0 ó
 * **NaN** si el valor no es un número.
 */
const esPositivo = num => isNaN(num) ? NaN : (num == 0 ? false : (num > 0 ? "Es positivo." : "Es negativo."));

/**
 * Agrega una exclamación al final del parámetro enviado.
 * @param {*} str 
 * @returns {string} El valor string del parámetro con '!' al final.
 */
const agregarSimboloExclamacion = str => `${str}!`;

/**
 * Combina dos parámetros string y los devuelve formateado de la siguiente manera: "Nombre Apellido"
 * @param {*} nombre 
 * @param {string} apellido 
 * @returns {undefined | string} String formateado con la primera letra en mayúscula y un espacio entre mensajes. En
 * caso de recibir otro valor devuelve **undefined**
 */
const combinarNombres = (nombre, apellido) => !isNaN(nombre) || !isNaN(apellido) ? undefined : (`${nombre[0].toUpperCase()}${nombre.split(nombre[0])[1].toLowerCase()} 
${apellido[0].toUpperCase()}${apellido.split(apellido[0])[1].toLowerCase()}`);

/**
 * Obtiene un string y devuelve un mensaje saludando.
 * @param {string} nombre 
 * @returns {undefined | string} El saludo formateado, si el parámetro no es un string devuelve
 * **undefined**
 */
const obtenerSaludo = nombre => !isNaN(nombre) || !isNaN(apellido) ? undefined :
(`Hola ${nombre[0].toUpperCase()}${nombre.split(nombre[0])[1].toLowerCase()}!`);

/**
 * Obtiene el area de un rectángulo a partir de su alto y su ancho.
 * @param {Number} alto 
 * @param {Number} ancho 
 * @returns {Number | NaN} El resultado correspondiente, si alguno de los parámetros no es un número
 * devuelve **NaN**
 */
const obtenerAreaRectangulo = (alto, ancho) => multiplica(alto, ancho);

/**
 * Calcula el perímetro de un cuadrado según su lado.
 * @param {Number} lado 
 * @returns {Number | 'NaN'} El valor del perímetro, si el valor del lado no es un número
 * devuelve **NaN**
 */
const retornarPerimetro = lado => multiplica(lado, 4);

/**
 * Calcula el area de un triángulo a partir de su base y su altura.
 * @param {Number} base 
 * @param {Number} altura 
 * @returns {Number | 'NaN'} El valor del area. si alguno de los parámetros no es un número
 * devuelve **NaN**
 */
const areaDelTriangulo = (base, altura) => divide(multiplica(base, altura), 2);

/**
 * Convierte el valor de Euros (€) a su equivalente en dólares (uSd$) (1€ = 1.2uSd$)
 * @param {number} euro 
 * @returns {undefined | string} Un mensaje indicando el valor del cambio, si el valor no es un número
 * devuelve **undefined**
 */
const deEuroADolar = euro => isNaN(euro) ? undefined : `Tu cambio en dolares es: $${multiplica(euro, 1.2).toFixed(2)}`;

/**
 * Verifica si una letra es una vocal (mayúsculas, acentos y caracteres especiales incluídos).
 * @param {string} letra 
 * @returns {string} El mensaje en string indicando si es vocal, en caso de no poder verificarse
 * devuelve el mensaje informándolo.
 */
const esVocal = letra => letra.length == 1 && /^[aeiouáéíóúü]{1}.*/i.test(letra) ? "Es Vocal." : "Dato incorrecto";