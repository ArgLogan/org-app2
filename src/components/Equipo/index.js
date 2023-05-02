import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    //Destructuracion
    const{colorPrimario, titulo} = props.datos
    const {colaboradores, eliminarColabordor,actualizarColor} = props

    const obj = {backgroundColor: hexToRgba(colorPrimario, 0.6)}
    const estiloTitulo ={borderColor: colorPrimario}
    
    return <>
     {
        colaboradores.length >0 &&
            <section className="equipo" style={obj}>
                <input 
                    className="input-color"
                    type="color"  
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, titulo)
                    }}
                
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index)=> <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario = {colorPrimario}
                            eliminarColabordor={eliminarColabordor}
                                      
                        />)
                    }
                </div>
            </section>
    }
    </>
}
export default Equipo