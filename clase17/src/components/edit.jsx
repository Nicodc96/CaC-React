import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useParams, redirect } from 'react-router-dom';
import { db } from '../firebaseConfig/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export const Edit = () => {
    const [player, setPlayer] = useState(null);
    const { playerId } = useParams();
    const dataDB = doc(db, "players", playerId);

    useEffect(() => {
        const getPlayer = async () => {
            const infoPlayer = await getDoc(await dataDB);
            setPlayer({...infoPlayer.data()});
            db.ref()
        };
        getPlayer();
    }, [dataDB]);

    /**
     * Verifica el contenido de 'position' de cada jugador de fútbol pasado por parámetro. Esta
     * función está hecha específicamente para el input de tipo 'select' diseñado en edit.jsx
     * @param {Object} player El objeto jugador
     * @returns {Number} El número que corresponde al option-list
     */
    const checkOptionNumber = (player) => {
        if (player){
            switch(player.position){
                case "Arquero":
                    return 1;
                case "Defensor":
                    return 2;
                case "Mediocampista":
                    return 3;
                case "Delantero":
                    return 4;
                default:
                    return 0;
            }
        } else return 0;
    }

    const modifyPlayer = () => {
        const inputNameValue = document.getElementById('formName').value;
        const inputLastnameValue = document.getElementById('formLastname').value;
        const inputNumberValue = document.getElementById('formNumber').value;
        const inputPositionValue = document.getElementById('formPosition');
        const positionString = inputPositionValue.options[inputPositionValue.value].text;

        if (inputLastnameValue && inputNameValue && inputNumberValue && positionString){
            return updateDoc(dataDB, {
                name: inputNameValue,
                lastname: inputLastnameValue,
                number: Number(inputNumberValue),
                position: positionString
            });
        } else return Promise.reject("Uno o más inputs vacíos.");
    }

    const confirmModify = () => {
        Swal.fire({
            title: '¿Confirma modificación?',
            text: "¡Esta acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Modificar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                modifyPlayer()
                .then(() => {
                    Swal.fire(
                        'Modificado.',
                        'El jugador ha sido modificado exitosamente.',
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

    if (!player){
        return (
            <div>Loading...</div>
        )
    }
    return (
        <section className="d-flex justify-content-center mt-4">
            <article className='d-flex flex-column align-items-center border border-2 rounded px-5 pe-5 pb-3'>
                <h2 className='mt-4 mb-3 fs-4'>Modificar un jugador</h2>
                <Form>
                    <Form.Group className="mb-3 d-flex align-items-center gap-3" controlId="formName">
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control type="text" defaultValue={player.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center gap-3" controlId="formLastname">
                        <Form.Label>Apellido: </Form.Label>
                        <Form.Control type="text" defaultValue={player.lastname} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center gap-3" controlId="formNumber">
                        <Form.Label className='text-center'>Número de jugador: </Form.Label>
                        <Form.Control type="number" min="1" max="99" defaultValue={player.number} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center gap-3" controlId="formPosition">
                        <Form.Label>Posición: </Form.Label>
                        <Form.Select defaultValue={checkOptionNumber(player)}>
                            <option value="0">Elija una opción</option>
                            <option value="1">Arquero</option>
                            <option value="2">Defensor</option>
                            <option value="3">Mediocampista</option>
                            <option value="4">Delantero</option>
                        </Form.Select>
                    </Form.Group>
                    <div className='d-flex justify-content-evenly mt-4'>
                        <Button variant='success' onClick={() => confirmModify()}>Modificar</Button>
                        <Link to="/">                        
                            <Button variant='secondary'>Cancelar</Button>
                        </Link>
                    </div>
                </Form>
            </article>
        </section>
    )
}