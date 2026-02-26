import React, { useState } from 'react'
import axios from "axios"

const App = () => {
  let [myimage, setMyImage] = useState("")
  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setMyImage(e.target.files[0]);
  }
  const handleSubmit = async () => {
    let api = "http://localhost:8003/student/upload"
    let formData = new FormData()
    formData.append("myimage", myimage)
    let res = await axios.post(api, formData)
    console.log(res.data);
  }
  return (
    <div>
      <h1>File uploading</h1>
      Upload Image:<input type="file" onChange={handleImage} />
      <button 
      disabled={!myimage}
      style={{ backgroundColor: !myimage ? 'grey' : 'blue' }}
      onClick={handleSubmit} >Upload!!!</button>
    </div>
  )
}

export default App