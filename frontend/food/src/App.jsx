import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserRegister from './Auth/UserRegister'
import UserLogin from './Auth/UserLogin'
import FoodPartnerRegister from './Auth/FoodPartnerRegister'
import FoodPartnerLogin from './Auth/FoodPartnerLogin'
import {Toaster} from 'react-hot-toast'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import CreateReel from './Pages/CreateReel'
import SavedReel from './components/SavedReel'

// Check if user has authentication token
const isAuthenticated = () => {
  const token = localStorage.getItem('user')
  return !!token
}

// Protect routes that require authentication
function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/user/login" replace />
}

// Redirect authenticated users away from login/register pages
function PublicRoute({ children }) {
  return isAuthenticated() ? <Navigate to="/" replace /> : children
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes - redirect to / if already logged in */}
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/partner/register" element={<FoodPartnerRegister />} />
        <Route path="/partner/login" element={<FoodPartnerLogin />} />

        {/* Protected routes - redirect to login if not authenticated */}
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/profile/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/create-food" element={<PrivateRoute><CreateReel /></PrivateRoute>} />
        <Route path="/save" element={<PrivateRoute><SavedReel /></PrivateRoute>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
