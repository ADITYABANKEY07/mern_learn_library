import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Insert from './Insert'
import Display from './Display'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<Insert/>} />
        <Route path="/insert" element={<Insert/>} />
        <Route path="/display" element={<Display/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App