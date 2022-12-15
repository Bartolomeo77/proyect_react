import React, { useState, useEffect } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const CrudApp = () => {

  const [editData, setEditData] = useState(null);
  const [usuarios, setUsuarios] = useState(() => {
    const saveUsuarios = window.localStorage.getItem("usuariosData");
    if (saveUsuarios) {
      return JSON.parse(saveUsuarios);
    } else {
      return []
    }
  });

  useEffect(() => {
    window.localStorage.setItem("usuariosData", JSON.stringify(usuarios))
  }, [usuarios])

  // inserción de datos
  const addNombre = (nombre) => {
    setUsuarios([
      ...usuarios,
      nombre
    ])
  }

  // editar un nombre
  const editNombre = (nombre) => {
    const newUsuarios = usuarios.map(el => el.id === nombre.id ? nombre : el)
    setUsuarios(newUsuarios)
    setEditData(null)
  }

  // Eliminar un usuarios
  const deleteNombre = id => {
    const isDelete = window.confirm(`¿Deseas eliminar el registro con id: ${id}?`)

    if (isDelete) {
      const newUsuarios = usuarios.filter(el => el.id !== id)
      setUsuarios(newUsuarios);
    }
  }

  return <>
    <h2>CRUD de usuarios...</h2>
    <CrudForm addNombre={addNombre} editNombre={editNombre} editData={editData}/>
    <CrudTable usuarios={usuarios} setEditData={setEditData} deleteNombre={deleteNombre}/>
  </>
}

export default CrudApp