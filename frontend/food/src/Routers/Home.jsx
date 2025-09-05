import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Food App</h1>
      <Link to="/user/register" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">Get Started</Link>
    </div>
  )
}

export default Home
