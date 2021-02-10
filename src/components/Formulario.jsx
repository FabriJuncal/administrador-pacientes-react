import React, { Fragment, useState } from "react";

const Formulario = () => {

    // Creamos el State de Citas
    const [cita, actualizarCita] = useState({
        mascota:  '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Función que se ejecuta cada vez que el usuario escribe en el input
    const actualizarState = e => {
        // Tomamos el parametro con los datos del evento 
        // y aprovechamos el atributo "name" de los inputs del formulario para mapear los datos (e.target.name)
        // y tomamos el valor del input y lo agregamos al array (e.target.value)

        // Utilizamos la sintaxis de "..." llamado "Spread Operator" para clonar el array "cita"
        // Le pasamos como 1er parametro un array con la copia del array "cita"
        // para que persistan los datos que le vayamos pasando en el 2do parametro
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraemos los valores del array "cita" creado con el "useState"
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();

        alert('Enviando Cita...');
    }

    return ( 
        <Fragment>
            <h2>Crear Citas</h2>

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota} // Agregamos  el valor del array "cita" creado con el "useState"
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario} // Agregamos  el valor del array "cita" creado con el "useState"
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha} // Agregamos  el valor del array "cita" creado con el "useState"
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora} // Agregamos  el valor del array "cita" creado con el "useState"
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas} // Agregamos  el valor del array "cita" creado con el "useState"
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;