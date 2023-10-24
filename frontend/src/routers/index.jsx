import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from '../pages/App'
import Edit from "../pages/Edit"
import Add from "../pages/Add"
import Layout from '../layouts'

function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<App />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </HashRouter>

  )
}

export default Routers