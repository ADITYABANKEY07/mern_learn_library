import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Insert from './pages/Insert'
import Update from './pages/Update'
import Search from './pages/Search'
import Contact from './pages/Contact'
import AddBook from './pages/AddBook'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/insert' element={<Insert/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/addbook/:id' element={<AddBook/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App