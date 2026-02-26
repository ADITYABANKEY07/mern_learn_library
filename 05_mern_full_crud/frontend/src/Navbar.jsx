import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around py-3 text-white font-semibold bg-purple-800'>
    <h1 className='text-5xl'>CRUD OP</h1>
    <div className="nav-link flex text-2xl gap-5">
              <Link to={"/home"} >Home</Link>
        <Link to={"/insert"} >Insert</Link>
        <Link to={"/display"} >Display</Link>
        <Link to={"/update"} >Update</Link>
        <Link to={"/search"} >Search</Link>
        <Link to={"/contact"} >Contact</Link>
    </div>
    </div>
  )
}

export default Navbar