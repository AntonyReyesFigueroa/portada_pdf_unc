import { useState } from 'react'
import './App.css'
import usePDF from './hooks/usePDF'
import EnviarPdf from './Components/EnviarPdf'
import { useForm } from 'react-hook-form'




function App() {

  const [data, setData] = useState()

  const { register, handleSubmit } = useForm();
  const [portada, setPortada] = useState(false)

  const onSubmit = (data) => {
    setData(data)
    console.log(data);
  }

  const { documento, handlePrint} = usePDF(<EnviarPdf data={data}/>, 'portada')




  return (
    <>
      <div>
        <h3>Lista de nombre de profesores recomendados</h3>
        <ul>
          <li>Ing. Roger Manuel Sánchez Chávez</li>
          <li>Ing. Carlos Eduardo Mendoza Santos</li>
          <li>Dra. Amalia Fernández Vargas</li>
          <li>Dra. Karim Ivette Cruzado Villar</li>
          <li>Dr. Ing. Oscar Zocón Alva</li>
          <li>Dr. Ing. Ena Mirella Cacho Chávez</li>
          <li>MBA. Cinthya Vilchez Alfaro</li>
          <li>Mg Cs Ing. Karina Aguilar Julca</li>
          <li>Ing. Carlos Alfonso Pérez Cerna</li>
        </ul>

        <h3>Lista de nombre de cursos recomendados</h3>
        <ul>
          <li>Ingeniería de Software II</li>
          <li>Dinámica de Sistemas</li>
          <li>Gestión de Proyectos de Sistemas I</li>
          <li>Marketing</li>
          <li>Planeamiento de Sistemas de Información II</li>
          <li>Redes I</li>

      
        </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
          <li>Ingrese nombre alumno</li>
        <input {...register("name")} required/>
        <li>Ingrese nombre de profesor :</li>
        <input {...register("name_teacher")} required/>
        <li>Ingrese nombre de trabajo :</li>
        <input {...register("name_work")} required/>
        <li>Ingrese nombre de curso :</li>
        <input {...register("name_curse")} required/>

        <button onClick={handlePrint}>imprimir</button>
        <button onClick={() => setPortada(!portada)}>Editar portada</button>
        </form>
        {
          portada?
          documento
          :
          null
        }

      </div>
    </>
  )
}

export default App
