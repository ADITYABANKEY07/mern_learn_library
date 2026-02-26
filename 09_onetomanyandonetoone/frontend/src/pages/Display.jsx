import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Display = () => {
let navigate = useNavigate()
  let [mydata, setMyData] = useState([])
  useEffect(()=>{
    let api = "http://localhost:6001/employee/display"
    axios.get(api).then((res)=>{
      setMyData(res.data)
      console.log(res.data);
    })
  },[])
  let addMore = (id) => {
    navigate(`/addbook/${id}`)
  }
  return (
    <div>
    <h1
    style={{
      fontSize:"40px"
    }}
    >Display Employee Data</h1>
      <table>
        <thead>
          <th className='uppercase' >authorname</th>
          <th className='uppercase' >email</th>
          <th className='uppercase' >bookname</th>
          <th className='uppercase' >price</th>
        </thead>
        <tbody>
          {mydata.map((item, index)=>{
            return(
              <tr key={index}>
                <td>{item.authorname}</td>
                <td>{item.email}</td>
                <td>{item.books?.map(book=>book.bookname)}</td>
                <td>{item.books?.map(book=>book.price)}</td>
                <td onClick={()=>{
                  addMore(item._id)
                }} >Add More</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Display