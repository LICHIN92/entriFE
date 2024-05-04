import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Ruot = () => {
  return (
    <>
    <div className='rcontainer'>
        <Header/>
        <Outlet/>
    </div>
    </>
    
  )
}

export default Ruot