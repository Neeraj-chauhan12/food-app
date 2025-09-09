import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';






const Home = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
  axios.get("http://localhost:3000/api/auth/food/data",{
    withCredentials:true

  }).
  then(res=>{
    console.log(res.data.foodItems)
    setVideos(res.data.foodItems)
    
    })
    .catch(err=>{
      console.log(err)
    }
  )
  
},[])   


  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-black"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {videos.map((video, idx) => (
        <div
          key={idx}
          className="h-screen w-screen flex items-center justify-center snap-center relative"
        >
          <video
            src={video.video}
            controls
            autoPlay
            loop
            className="h-full w-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 w-full flex flex-col items-center z-10 px-4 pb-8 pointer-events-none">
            <div className="w-full max-w-lg">
              <p className="text-white text-base font-medium line-clamp-2 mb-3  rounded px-3 py-2 pointer-events-auto" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                {video.description}
              </p>
              <Link to={"/profile"} className="w-full py-2 px-5 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors pointer-events-auto">Visit Store</Link>
                    </div>
                  </div>
                </div>
      ))}



              </div>
            );
          }

export default Home
