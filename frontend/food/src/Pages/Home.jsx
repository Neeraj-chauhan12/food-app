import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



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


  const videoRefs = useRef(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (!(video instanceof HTMLVideoElement)) return
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => { /* ignore autoplay errors */ })
          } else {
            video.pause()
          }
        })
      },
      { threshold: [0, 0.25, 0.6, 0.9, 1] }
    )

    videoRefs.current.forEach((vid) => observer.observe(vid))
    return () => observer.disconnect()
  }, [videos])


  const setVideoRef = (id) => (el) => {
    if (!el) { videoRefs.current.delete(id); return }
    videoRefs.current.set(id, el)
  }

const handlelikes=async(e)=>{
  const response=await axios.post("http://localhost:3000/api/auth/food/like",{ foodId: e._id },{
    withCredentials:true
  })
  console.log(response.data.like)

  if(response.data.like){
  
    setVideos((prevVideos) =>
      prevVideos.map((vid) =>
        vid._id === e._id ? { ...vid, likeCount: vid.likeCount + 1 } : vid
      )
    )
  }
  else{
    setVideos((prevVideos) =>
      prevVideos.map((vid) =>
        vid._id === e._id ? { ...vid, likeCount: vid.likeCount - 1 } : vid
      )
    )
  }

}

const handlesaves=async(e)=>{
  console.log("saved")
}
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
          ref={setVideoRef(video._id)}
            src={video.video}
            controls
            autoPlay
            loop
            className="h-full w-full object-cover"
          />
          {/* Right side icons */}
          <div className="absolute right-4 bottom-32 flex flex-col gap-4 items-center z-20">
            <div className="flex flex-col items-center">
              <button onClick={handlelikes} className="bg-black/60 rounded-full p-2 mb-1 border border-gray-700">
                <FaRegHeart className="w-8 h-8 text-white" />
              </button>
              <span className="text-white text-xs">{video.likeCount ? video.likeCount : 0}</span>
            </div>


              <div className="flex flex-col items-center">
              <button  className="bg-black/60 rounded-full p-2 mb-1 border border-gray-700">
                <FaRegCommentDots className="w-8 h-8 text-white" />
              </button>
              <span className="text-white text-xs">{video.comments}</span>
            </div>

            <div className="flex flex-col items-center">
              <button onClick={handlesaves} className="bg-black/60 rounded-full p-2 mb-1 border border-gray-700">
                <FaRegBookmark className="w-8 h-8 text-white" />
              </button>
              <span className="text-white text-xs">{video.saveCount ? video.saveCount : 0}</span>
            </div>
            
            
          </div>
          {/* ...existing code for description and visit store... */}
          <div className="absolute bottom-16 left-0 w-full flex flex-col items-center z-10 px-4 pb-8 pointer-events-none">
            <div className="w-full max-w-lg">
              <p className="text-white text-base font-medium line-clamp-2 mb-3  rounded px-3 py-2 pointer-events-auto" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                {video.description}
              </p>
              <Link to={`/profile/`+video.foodPartner} className="w-full py-2 px-5 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors pointer-events-auto">Visit Store</Link>
            </div>
          </div>
          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 w-full flex justify-center items-center z-50">
            <div className="w-full bg-gray-500 flex gap-16 px-8 py-3 border-t border-gray-700">
              <Link to={'/'} className="flex flex-col items-center text-white flex-1">
                <IoHome className="w-7 h-7 mb-1"/>
                <span className="text-xs">home</span>
              </Link>
              <button className="flex flex-col items-center text-white flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 mb-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
                <span className="text-xs">saved</span>
              </button>
            </div>
          </div>
        </div>
      ))}



              </div>
            );
          }

export default Home
