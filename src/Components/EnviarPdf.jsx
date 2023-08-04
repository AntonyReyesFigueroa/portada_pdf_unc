import React from 'react'
import './Portada.css'
import EscudoUnc from './img/EscudoUnc.png'

const EnviarPdf = ({ data }) => {
    console.log(data);
    return (
        <div className='contendedor__general_portada'>
            <div className="contenedor_portada" contenteditable="true">
                <div className='direction__portada'>
                    <h2>UNIVERSIDAD NACIONAL DE CAJAMARCA</h2>
                    <h2>FACULTAD DE INGENIERÍA </h2>
                    <h4>ESCUELA ACADÉMICO PROFESIONAL DE INGENIERÍA DE SISTEMAS </h4>
                    <img src={EscudoUnc} alt="" width={120} />


                    <h3>{
                        data ?
                            `" ${data.name_work} "`
                            :
                            'sin nombre de  trabajo'
                    } </h3>

                    <h3>ALUMNO</h3>
                    <b>{
                        data ?
                            data.name
                            :
                            'sin nombre'
                    } </b>

                    <h3>ASIGNATURA</h3>
                    <b>{
                        data ?
                            data.name
                            :
                            'sin nombre'
                    } </b>

                    <h3>DOCENTE</h3>
                    <b>{
                        data ?
                            data.name_teacher
                            :
                            'sin nombre'
                    } </b>

                    <h4>CAJAMARCA – PERÚ</h4>
                    <h3>2023</h3>

                </div>
            </div>

        </div>
    )
}

export default EnviarPdf