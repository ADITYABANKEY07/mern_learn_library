import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {
  let handleHome = async (e) => {
    e.preventDefault()
    let api = "http://localhost:8000/home"
    let response = await axios.post(api)
    console.log(response)
  }
  let handleAbout = async (e) => {
    e.preventDefault()
    let api = "http://localhost:8000/about"
    let response = await axios.post(api)
    console.log(response)
  }
  return (
    <div>
    <button onClick={handleHome} className='px-3 py-2 bg-gray-500 text-white font-semibold ml-2 mt-5' >Home Page</button>
    <button onClick={handleAbout} className='px-3 py-2 bg-gray-500 text-white font-semibold ml-2 mt-5' >About Page</button>
    </div>
  )
}

export default App