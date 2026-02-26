import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {
  let [mydata, setMyData] = useState({})
  let handleChange = async (e) => {
    let {name, value} = e.target
    setMyData(prev=>({
      ...prev, [name]:value
    }))
    console.log(mydata);
  }
  let handleSubmit = async (e) => {
    e.preventDefault()
    let api = "http://localhost:8000/students/save"
    let response = await axios.post(api, mydata)
    console.log(response)
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your rollno' name='rollno' onChange={handleChange} /> <br />
      <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} /> <br />
      <input type="text" placeholder='Enter your city' name='city' onChange={handleChange} /> <br />
      <input type="text" placeholder='Enter your fees' name='fees' onChange={handleChange} /> <br />
      <button type='submit' >Insert</button>
    </form>
    </div>
  )
}

export default App