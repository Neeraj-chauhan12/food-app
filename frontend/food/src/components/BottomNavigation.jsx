import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const BottomNavigation = () => {
  return (
    
                  <div className="w-full bg-gray-500 flex gap-16 px-8 py-3 border-t border-gray-700">
                    <Link to={'/'} className="flex flex-col items-center text-white flex-1">
                      <IoHome className="w-7 h-7 mb-1"/>
                      <span className="text-xs">home</span>
                    </Link>
                    <Link to={'/save'} className="flex flex-col items-center text-white flex-1">
                      <FaRegBookmark className="w-7 h-7 mb-1"/>
                      <span className="text-xs">saved</span>
                    </Link>
                  </div>
    
  )
}

export default BottomNavigation
