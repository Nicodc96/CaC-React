/* 
    EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
    UTILIZAMOS SWITCH
*/
// reemplaza `null` por la respuesta
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

// function devolverString(str) {
//   // "Return" la string provista: str
//   // Tu código:
//     return str;
// }
const devolverString = str => str.toString();

// function suma(x, y) {
//   // "x" e "y" son números
//   // Suma "x" e "y" juntos y devuelve el valor
//   // Tu código:
// }
const suma = (x, y) => Number(x) + Number(y);

// function resta(x, y) {
//   // Resta "x" de "y" y devuelve el valor
//   // Tu código:
// }
const resta = (x, y) => Number(x) - Number(y);

// function multiplica(x, y) {
//   // Multiplica "x" por "y" y devuelve el valor
//   // Tu código:
// }
const multiplica = (x, y) => Number(x) * Number(y);

// function divide(x, y) {
//   // Divide "x" entre "y" y devuelve el valor
//   // Tu código:
// }
const divide = (x, y) => Number(y) !== 0 ? Number(x) / Number(y) : NaN;

// function sonIguales(x, y) {
//   // Devuelve "true" si "x" e "y" son iguales
//   // De lo contrario, devuelve "false"
//   // Tu código:utilizar if y else
// }
const sonIguales = (x, y) => x == y;

// function tienenMismaLongitud(str1, str2) {
//   // Devuelve "true" si las dos strings tienen la misma longitud
//   // De lo contrario, devuelve "false"
//   // Tu código:

// }
const tienenMismaLongitud = (str1, str2) => str1.length == str2.length;

// function menosQueNoventa(num) {
//   // Devuelve "true" si el argumento de la función "num" es menor que noventa
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }
const menosQueNoventa = (num) => num < 90;

// function mayorQueCincuenta(num) {
//   // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }
const mayorQuecincuenta = (num) => num > 50;

// function obtenerResto(x, y) {
//   // Obten el resto de la división de "x" entre "y"
//   // Tu código:
// }
const obtenerResto = (x, y) => Number(`0.${divide(x, y).toString().split(".")[1]}`);

// function esPar(num) {
//   // Devuelve "true" si "num" es par
//   // De lo contrario, devuelve "false"
//   // Tu código:  
// }
const esPar = num => Number(num) % 2 == 0;

// function esImpar(num) {
//   // Devuelve "true" si "num" es impar
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }
const esImpar = num => !esPar(num);

// function elevarAlCuadrado(num) {
//   // Devuelve el valor de "num" elevado al cuadrado
//   // ojo: No es raiz cuadrada!
//   // Tu código:
// }
const elevarAlCuadrado = num => Math.pow(Number(num), 2);

// function elevarAlCubo(num) {
//   // Devuelve el valor de "num" elevado al cubo
//   // Tu código:
// }
const elevarAlCubo = num => Math.pow(Number(num), 3);

// function elevar(num, exponent) {
//   // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//   // Tu código:
// }
const elevar = (num, exponent) => Math.pow(Number(num), Number(exponent));

// function redondearNumero(num) {
//   // Redondea "num" al entero más próximo y devuélvelo
//   // Tu código:
// }
const redondearNumero = num => Math.round(num);

// function redondearHaciaArriba(num) {
//   // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
//   // Tu código:
// }
const redondearHaciaArriba = num => Math.ceil(num);

// function numeroRandom() {
//   //Generar un número al azar entre 0 y 1 y devolverlo
//   //Pista: investigá qué hace el método Math.random()
// }
const numeroRandom = () => Math.random();

// function esPositivo(numero) {
//   //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//   //Si el número es positivo, devolver ---> "Es positivo"
//   //Si el número es negativo, devolver ---> "Es negativo"
//   //Si el número es 0, devuelve false
// }
const esPositivo = num => num > 0 ? "Es positivo" : "Es negativo";

// function agregarSimboloExclamacion(str) {
//   // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
//   // Ejemplo: "hello world" pasaría a ser "hello world!"
//   // Tu código:
// }
const agregarSimboloExclamacion = str => `${str}!`;

// function combinarNombres(nombre, apellido) {
//   // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
//   // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
//   // Tu código:
// }
const combinarNombres = (nombre, apellido) => `${nombre[0].toUpperCase()}${nombre.split(nombre[0])[1].toLowerCase()} 
${apellido[0].toUpperCase()}${apellido.split(apellido[0])[1].toLowerCase()}`;

// function obtenerSaludo(nombre) {
//   // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
//   // "Martin" -> "Hola Martin!"
//   // Tu código:
// }
const obtenerSaludo = nombre => `Hola ${nombre[0].toUpperCase()}${nombre.split(nombre[0])[1].toLowerCase()}!`;

// function obtenerAreaRectangulo(alto, ancho) {
//   // Retornar el area de un cuadrado teniendo su altura y ancho
//   // Tu código:
// }
const obtenerAreaRectangulo = (alto, ancho) => multiplica(alto, ancho);

// function retornarPerimetro(lado){
//   //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//   //Escribe tu código aquí
// }
const retornarPerimetro = lado => multiplica(lado, 4);

// function areaDelTriangulo(base, altura){
//   //Desarrolle una función que calcule el área de un triángulo.
//   //Escribe tu código aquí
// }
const areaDelTriangulo = (base, altura) => divide(multiplica(base, altura), 2);

// function deEuroAdolar(euro){
//   //Supongamos que 1 euro equivale a 1.20 dólares. 
//   //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
//   //Escribe tu código aquí
// }
const deEuroADolar = dolar => `Tu cambio en dolares es: $${multiplica(dolar, 1.2).toFixed(2)}`;

// function esVocal(letra){
//   //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
//   //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
//   //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//     //si ingresa una consonante muestre en pantalla dato incorrecto
//   //Escribe tu código aquí
// }
const esVocal = letra => letra.length == 1 && /^[aeiouáéíóúü]{1}.*/i.test(letra) ? "Es Vocal." : "Dato incorrecto";