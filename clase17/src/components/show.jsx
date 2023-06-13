import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import './show.css';


export const Show = () => {
    // Primero: configurar los hooks
    const [players, setPlayers] = useState([]);
    // Segundo: referenciar la db de firestore
    const playersCollection = collection(db, "players"); /* Con esta línea obtengo los documentos de la db de firestore */
    // Tercero: crear función para mostrar los docs
    // const getPlayers = async () => {
    //     const data = await getDocs(playersCollection);
    //     setPlayers(
    //         data.docs.map(doc => ({
    //         ...doc.data(),
    //             id: doc.id
    //         })));
    // };
    // Cuatro: crear función para eliminar un doc
    const removePlayer = async (id) => {
        const playerDoc = doc(db, "players", id);
        return await deleteDoc(playerDoc);
    };
    // Cinco: crear función para confirmar con Sweet Alert
    const confirmRemove = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                // Llamo a la función removePlayer
                removePlayer(id);
                // Notificar que se ha eliminado
                Swal.fire(
                '¡Eliminado!',
                'El jugador se ha eliminado.',
                'success'
              )
            }
          })
    };
    // Seis: utilizar useEffect
    useEffect(() => {
        const getPlayers = async () => {
            const data = await getDocs(playersCollection);
            setPlayers(
                data.docs.map(doc => ({
                ...doc.data(),
                    id: doc.id
                })));
        };
        getPlayers();
    }, [playersCollection]);
    // Siete: devolver el estado de los docs
    if (players.length === 0){
        return (
            <div>Loading...</div>
        )
    }
    return(
        // Hacer la tabla, utilizar bootstrap, Link y mostrando cada uno de los documentos
        <div className='container-fluid' id="contenedorTabla">
            <Table bordered hover responsive id="tablaJugadores">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Número</th>
                        <th>Posición</th>
                        <th>Edición</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td>{ player.name }</td>
                            <td>{ player.lastname }</td>  
                            <td>{ player.number }</td>
                            <td>{ player.position }</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <Link to={`/edit/${player.id}`}>
                                        <Button variant="warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 1 23 23" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1="16" y1="5" x2="19" y2="8" />
                                        </svg>
                                        </Button>
                                    </Link>
                                    <Button variant="danger" onClick={()=> confirmRemove(player.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 1 23 23" strokeWidth="2" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}                    
                </tbody>
            </Table>
            <Link to='/create'>
                <Button variant="success" className="mt-2 mb-2">Agregar</Button>
            </Link>
        </div>
    )
}