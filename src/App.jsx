import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import HospitalListing from './pages/HospitalListing'
import Booking from './pages/Booking'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/hospitals" element={<HospitalListing/>}/>
            <Route exact path='/my-bookings' element={<Booking/>}/>
        </Route>
    </Routes>
  )
}
export default App