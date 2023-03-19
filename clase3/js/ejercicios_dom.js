import { crearModal, crearContenedorModal, crearModalButton } from "./elementos.js";
/**
 * Crea un contenedor con el contenido generado para armar el esqueleto de un ejercicio y un botón para accederlo,
 * luego lo ancla al contenedor de ejercicios general enviado por parámetro.
 * @param {HTMLElement} contenedorEjercicios Referencia del contenedor
 * @param {Number} numEjercicio N° del ejercicio a armar
 * @param {Function} funcionModal Referencia de la función que genera el esqueleto del ejercicio
 */
const cargarElementosEjerciciosAlDom = (contenedorEjercicios, numEjercicio, funcionModal) => {
    const btnEjercicio = crearModalButton(numEjercicio);
    const contenedorEjercicio = crearContenedorModal(numEjercicio);
    contenedorEjercicio.appendChild(btnEjercicio);
    contenedorEjercicio.appendChild(crearModal(numEjercicio, funcionModal));
    contenedorEjercicios.appendChild(contenedorEjercicio);
}

export {cargarElementosEjerciciosAlDom}