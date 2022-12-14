import React, { useState, useEffect } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'
import { helpFetch } from '../../helpers/helpFetch'

const CrudAPI = () => {

  const API = helpFetch()
  const [editData, setEditData] = useState(null)
  const [usuarios, setUsuarios] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    setLoading(true)
    API.get("usuarios").then((response) => {
      if (!response.error) {
        setUsuarios(response)
        setErrorMessage(null)
      } else {
        setUsuarios(null)
        setErrorMessage(response.statusText)
      }

      setLoading(false)
    })    
  }, [])

  // inserción de datos
  const addNombre = (nombre) => {
    setLoading(true)
    const options = {
      body: nombre
    }

    API.post("usuarios", options).then(response => {
      if (!response.error) {
        setUsuarios([...usuarios, nombre])
        setErrorMessage(null)
      } else {
        setUsuarios(null)
        setErrorMessage(response.statusText)
      }

      setLoading(false)
    })
  }

  // editar un usuarios
  const editNombre = (nombre) => {
    setLoading(true)
    const options = {
      body: nombre
    }

    API.put("usuarios", options, nombre.id).then(response => {
      if (!response.error) {
        const newUsusarios = usuarios.map(el => el.id === nombre.id ? nombre : el)
        setUsuarios(newUsusarios)
        setEditData(null)
        setErrorMessage(null)
      } else {
        setUsuarios(null)
        setErrorMessage(response.statusText)
      }

      setLoading(false)
    })
  }

  // Eliminar un usuarios
  const deleteNombre = id => {
    setLoading(true)
    const isDelete = window.confirm(`¿Deseas eliminar el registro con id: ${id}?`)

    if (isDelete) {
      API.del("usuarios", id).then( response => {
        if (!response.error) {
          const newUsusarios = usuarios.filter(el => el.id !== id)
          setUsuarios(newUsusarios)
          setErrorMessage(null)
        } else {
          setUsuarios(null)
          setErrorMessage(response.statusText)
        }
  
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }

  return <>
    <h2>CRUD API de usuarios</h2>
    <CrudForm addNombre={addNombre} editNombre={editNombre} editData={editData}/>
    { 
      loading
      ? <Loader />
      : usuarios && <CrudTable usuarios={usuarios} setEditData={setEditData} deleteNombre={deleteNombre}/> 
    }
    { errorMessage && <Message text={errorMessage}/> }
  </>
}

export default CrudAPI