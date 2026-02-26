import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DisplayTwo = () => {
  let [mydata, setMyData] = useState([])
  useEffect(()=>{
    let api = "http://localhost:6001/employee/bookbydisplay"
    axios.get(api).then((res)=>{
      setMyData(res.data)
     console.log("Data from backend:", res.data); // Look at the first item here!
    })
  },[])

  return (
    <div>
    <h1
    style={{
      fontSize:"40px"
    }}
    >Display Employee Data</h1>
<table>
  <thead>
    <tr> {/* Don't forget the <tr> tag inside thead */}
      <th className='uppercase'>bookname</th>
      <th className='uppercase'>price</th>
      <th className='uppercase'>authorname</th>
      <th className='uppercase'>email</th>
    </tr>
  </thead>
  <tbody>
    {mydata.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.bookname}</td>
          <td>{item.price}</td>
          <td>{item.authorId?.authorname}</td> 
          <td>{item.authorId?.email}</td>
        </tr>
      )
    })}
  </tbody>
</table>
    </div>
  )
}

export default DisplayTwo