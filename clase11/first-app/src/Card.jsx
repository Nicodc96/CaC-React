function Card({apellido, fechaNacimiento, mundial, descripcion, clubes}){
    return (
        <div>
            <h2>Jugador: {apellido}</h2>
            <p>Fecha nacimiento: {fechaNacimiento}</p>
            <p>Es campeón mundial: {mundial ? "Si":"No"}</p>
            <section>
                <h3>Resumen:</h3>
                <p>{descripcion}</p>
                <p>Clubes en los que ha jugado: {`${clubes}`}</p>
            </section>
        </div>
    );
}

export default Card