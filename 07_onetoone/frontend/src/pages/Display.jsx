import axios from 'axios'
import { useEffect, useState } from 'react'

const Display = () => {
  let [mydata, setMyData] = useState([])
  useEffect(()=>{
    let api = "http://localhost:6001/employee/display"
    axios.get(api).then((res)=>{
      setMyData(res.data)
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
          <th className='uppercase' >username</th>
          <th className='uppercase' >email</th>
          <th className='uppercase' >firstname</th>
          <th className='uppercase' >lastname</th>
        </thead>
        <tbody>
          {mydata.map((item, index)=>{
            return(
              <tr key={index}>
                <td>{item.userId.username}</td>
                <td>{item.userId.email}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Display