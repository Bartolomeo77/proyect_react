import React from 'react'

const CrudTable = ({ usuarios, setEditData, deleteNombre }) => {

  return <>
    <h3>Usuarios actuales</h3>
    <table className='table'>
      <thead>
        <tr>
          <td>nombre</td>
          <td>correo</td>
          <td>usuario</td>
          <td>password</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      {
        usuarios.length === 0 ? <tr><td>No hay datos</td></tr>
        : usuarios.map((nombre, index) => {
          return <tr key={index}>
                  <td>{nombre.nombre}</td>
                  <td>{nombre.correo}</td>
                  <td>{nombre.usuario}</td>
                  <td>{nombre.password}</td>
                  <td>
                    <button className='btn btn-outline-warning mx-1'
                    onClick={() => setEditData(nombre)}>Editar</button>
                    <button className='btn btn-outline-danger mx-1'
                    onClick={() => deleteNombre(nombre.id)}>Eliminar</button>
                  </td>
                </tr>
        })
      }
      </tbody>
    </table>
  </>
}

export default CrudTable