import React from 'react'

const Overview = () => {
  return (
    <div className='' >
      <h1 className='text-3xl font-semibold' >Overview : <span className='font-bold' >{localStorage.getItem("admin")}</span> </h1>
    </div>
  )
}

export default Overview