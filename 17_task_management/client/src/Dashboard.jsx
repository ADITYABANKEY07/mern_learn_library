import React from 'react'
import AdminNavbar from './components/AdminNavbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Dashboard = () => {
  let navigate = useNavigate()
  let userAuthenticate = async () => {
    if(!localStorage.getItem("admin")){
      navigate("/home")
    } 
  }
  useEffect(()=>{
    userAuthenticate()
  },[])
  return (
    // min-h-screen ensures it fills the page height
    // flex-row (default) puts sidebar and content side-by-side
    <div className="flex min-h-screen bg-blue-50">
      
      {/* LEFT SIDE: Sidebar */}
      <AdminNavbar />

      {/* RIGHT SIDE: Main Content */}
      <main className="flex-grow p-8">
        <Outlet />
      </main>

    </div>
  )
}

export default Dashboard