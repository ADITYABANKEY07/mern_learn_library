import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* flex-grow: This tells the main content area to take up all 
         available remaining space, pushing the footer to the bottom.
      */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout