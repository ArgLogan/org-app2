//import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{
    //Estado - hooks
    //UseState
    //useState()
    //const [nombreVrible, funcionActualizar] = useState(valorInicial)
    //const [nombre,actualizarNombre] = useState("dato")
    //const [mostrar,actualizarMostrar] = useState(true)
    
    /*const manejarClick = () =>{
        props.actualizarMostrar

    }*/

    return <section className="org-section">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg 