import {useEffect} from 'react'
import UserNavbar from './components/UserNavbar'
import { Outlet, useNavigate } from 'react-router-dom'

const UserDashboard = () => {
    let navigate = useNavigate()
  let userAuthenticate = async () => {
    if(!localStorage.getItem("userEmail")){
      navigate("/home")
    } 
  }
  useEffect(()=>{
    userAuthenticate()
  },[])
  return (
    <div>
      <UserNavbar/>
      <Outlet/>
    </div>
  )
}

export default UserDashboard