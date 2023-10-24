import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='container w-full flex flex-col justify-center items-center py-12 box-border'>
        <Outlet />
    </div>
  )
}

export default Layout