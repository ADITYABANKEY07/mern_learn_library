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
          <th className='uppercase' >empno</th>
          <th className='uppercase' >name</th>
          <th className='uppercase' >designation</th>
          <th className='uppercase' >salary</th>
        </thead>
        <tbody>
          {mydata.map((item, index)=>{
            return(
              <tr key={index}>
                <td>{item.empno}</td>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Display