

import React from 'react'
import {Routes , Route , Navigate} from "react-router-dom"

import Dashbord from '../../pages/Dashbord'
import Bookings from '../../pages/Bookings'
import SellCar from '../../pages/SellCar'
import Settings from '../../pages/Settings'
const Router = () => {
  return (
    
  <Routes>
    <Route path='/' to="/dashbord" element={<Dashbord/>}/>
     <Route path='/dashbord' element={<Dashbord/>}/>
     <Route path='/bookings' element={<Bookings/>}/>
     <Route path='/sell-car' element={<SellCar/>}/>
     <Route path='/settings' element={<Settings/>}/>
  </Routes>
  )
}

export default Router