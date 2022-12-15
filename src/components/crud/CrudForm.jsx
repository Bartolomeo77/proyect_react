import React, { useState } from 'react'
import { useEffect } from 'react'

const CrudForm = ({ addNombre, editNombre, editData }) => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    usuario: '',
    password: '',
    id: null
  })

  useEffect(() => {
    if (editData !== null){
      setFormData(editData)
    } else {
      setFormData({
        nombre: '',
        correo: '',
        usuario: '',
        password: '',
        id: null
      })
    }
  }, [editData])


  
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que se recarge la página
    
    if (formData.nombre !== '' && formData.correo !== ''&& formData.usuario !== ''&& formData.password !== '') {
      if (editData !== null) {
        editNombre(formData)
      } else { 
        formData.id = Date.now()
        addNombre(formData)
        setFormData({
          nombre: '',
          correo: '',
          usuario: '',
          password: '',
          id: null
        })
      }
    } else {
      alert("Falta datos para rellenar.")
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return <>
    <form className='m-3' onSubmit={handleSubmit}>
      <label htmlFor="nombre">nombre:</label>
      <input type="text" name="nombre" onChange={handleChange} value={formData.nombre}/>
      <label htmlFor="correo">correo:</label>
      <input type="text" name="correo" onChange={handleChange} value={formData.correo}/>
      <label htmlFor="usuario">usuario:</label>
      <input type="text" name="usuario" onChange={handleChange} value={formData.usuario}/>
      <label htmlFor="password">password:</label>
      <input type="text" name="password" onChange={handleChange} value={formData.password}/>
      <input className='btn btn-success mx-1' type="submit" value="Enviar" />
      <input className='btn btn-danger mx-1' type="reset" value="Cancelar" />
    </form>
  </>
}

export default CrudForm