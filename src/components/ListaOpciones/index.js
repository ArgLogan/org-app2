import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                <option>Programción</option>
                <option>Front End</option>
                <option>Data Science</option>
                <option>Devops</option>
                <option>Ux y Diseño</option>
                <option>móvil</option>
                <option>Innovación y Gestión</option>

            </select>

    </div>

}
export default ListaOpciones