import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBanner from './components/TopBanner'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
const Layout = () => {
  return (
    <div>
        <TopBanner/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout