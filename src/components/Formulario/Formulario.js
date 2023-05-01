import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const  Formulario = (props)=>{  
     const [nombre, actualizarNombre] = useState("")
     const [puesto, actualizarPuesto] = useState("")
     const [foto, actualizarFoto] = useState("")
     const [equipo, actualizarEquipo] = useState("")

     const manejarEnvio =(e) =>{
          e.preventDefault()
          let datosAEviar = {
               nombre: nombre,
               puesto: puesto,
               foto: foto,
               equipo

          }
          console.log(datosAEviar)

     } 
     
     return <section className="formulario">
             <form onSubmit={manejarEnvio}>
               <h2>Rellena el formulario para crear el colaborador.</h2>
               <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required={true} 
                    valor={nombre} 
                    actualizarValor={actualizarNombre}
               />
               <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
               />
               <CampoTexto 
                    titulo="Foto" 
                    placeholder="Ingresar emlace de foto" 
                    required
                    valor={foto} 
                    actualizarValor={actualizarFoto }
               />
               <ListaOpciones
                    valor={equipo} 
                    actualizarValor={actualizarEquipo }
                    equipos={props.equipos}
               />
               <Boton>
                    crear
               </Boton>
          </form>
     </section>
}

export default Formulario