import { Form, Button } from 'react-bootstrap';
import { Link, redirect } from 'react-router-dom';
import { db } from '../firebaseConfig/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export const Create = () => {
    const dataDB = collection(db, "players");

    /**
     * Crea un documento jugador utilizando los datos del formulario renderizado.
     * @returns {Promise} Promesa que determinará si el proceso se realizó bien o si
     * ocurrió un error. En caso de que uno o más inputs estén vacíos y se intenta crear
     * devolvéra un *Promise.reject()* indicando el error.
     */
    const createPlayer = () => {
        const inputNameValue = document.getElementById('formName').value;
        const inputLastnameValue = document.getElementById('formLastname').value;
        const inputNumberValue = document.getElementById('formNumber').value;
        const inputPositionValue = document.getElementById('formPosition');
        const positionString = inputPositionValue.options[inputPositionValue.value].text;

        if (inputLastnameValue && inputNameValue && inputNumberValue && positionString){
            return addDoc(dataDB, {
                name: inputNameValue,
                lastname: inputLastnameValue,
                number: Number(inputNumberValue),
                position: positionString
            });
        } else return Promise.reject("Uno o más inputs vacíos.");
    }

    const confirmCreate = () => {
        Swal.fire({
            title: '¿Confirma crear un jugador?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Crear',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                createPlayer()
                .then(() => {
                    Swal.fire(
                        '¡Creado!',
                        `Se ha creado un nuevo jugador exitosamente.`,
                        'success'
                    ).then(() => redirect('/'));
                })
                .catch((error) => {
                    Swal.fire(
                        'Ha ocurrido un error.',
                        `Razón: ${error}`,
                        'error'
                    )
                })         
            }
          })
    }
    return (
        <section className="d-flex justify-content-center mt-4">
            <article className='d-flex flex-column align-items-center border border-2 rounded px-5 pe-5 pb-3'>
                <h2 className='mt-4 mb-3 fs-4'>Crear un jugador</h2>
                <Form>
                    <Form.Group className="mb-3 d-flex align-items-center gap-3" controlId="formName">
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center gap-3" controlId="formLastname">
                        <Form.Label>Apellido: </Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center gap-3" controlId="formNumber">
                        <Form.Label className='text-center'>Número de jugador: </Form.Label>
                        <Form.Control type="number" min="1" max="99"/>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center gap-3" controlId="formPosition">
                        <Form.Label>Posición: </Form.Label>
                        <Form.Select>
                            <option value="0">Elija una opción</option>
                            <option value="1">Arquero</option>
                            <option value="2">Defensor</option>
                            <option value="3">Mediocampista</option>
                            <option value="4">Delantero</option>
                        </Form.Select>
                    </Form.Group>
                    <div className='d-flex justify-content-evenly mt-4'>
                        <Button variant='success' onClick={() => confirmCreate()}>Crear</Button>
                        <Link to="/">                        
                            <Button variant='secondary'>Cancelar</Button>
                        </Link>
                    </div>
                </Form>
            </article>
        </section>
    )
}