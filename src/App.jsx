import React from "react"
import { Routes, Route } from "react-router-dom"
// import Texto from "./components/Texto"

import CrudAPI from "./components/crud/CrudAPI";

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./components/Index";
import Login from "./components/Login";
import MapView from "./components/map/MapView";

const App = () => {

  return ( 
  
      <Routes>
        <Route path='/crudAPI' element={<CrudAPI />}/>
        <Route path='/index' element={<Index />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/map' element={<MapView/>}/>
        
      </Routes>
    
  )
}

export default App;