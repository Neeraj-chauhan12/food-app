import React from 'react'
import { BrowserRouter, Route,Routes, Router } from 'react-router-dom'
import UserRegister from './Auth/UserRegister'
import UserLogin from './Auth/UserLogin'
import FoodPartnerRegister from './Auth/FoodPartnerRegister'
import FoodPartnerLogin from './Auth/FoodPartnerLogin'
import {Toaster} from 'react-hot-toast'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import CreateReel from './Pages/CreateReel'


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/partner/register" element={<FoodPartnerRegister />} />
          <Route path="/partner/login" element={<FoodPartnerLogin />} />
          <Route path='/create-food' element={<CreateReel />} />
          
          
          

      </Routes>
      <Toaster />
    </BrowserRouter>
  
  )
}

export default App
