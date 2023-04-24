import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const  Formulario = ()=>{  
     const manejarEnvio =(e) =>{
          e.preventDefault()
          console.log(e)

     } 
     
     return <section className="formulario">
             <form onSubmit={manejarEnvio}>
               <h2>Rellena el formulario para crear el colaborador.</h2>
               <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required={true}/>
               <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
               <CampoTexto titulo="Foto" placeholder="Ingresar emlace de foto" required/>
               <ListaOpciones/>
               <Boton>
                    crear
               </Boton>
          </form>
     </section>
}

export default Formulario