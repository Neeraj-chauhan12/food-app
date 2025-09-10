import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReelsPart from '../components/ReelsPart';



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

const handlelikes = async (video) => {
      const response = await axios.post(
         "http://localhost:3000/api/auth/food/like",
          { foodId: video._id },
          { withCredentials: true }
         );
        if(response.data.like){
            console.log("Video liked");
            setVideos((prev) => prev.map((v) => v._id === video._id ? { ...v, likeCount: v.likeCount + 1 } : v))
        }else{
            console.log("Video unliked");
            setVideos((prev) => prev.map((v) => v._id === video._id ? { ...v, likeCount: v.likeCount - 1 } : v))
        }
}

const handlesaves= async (item) =>{
  const response = await axios.post(
    "http://localhost:3000/api/auth/food/save",
    { foodId: item._id },
    { withCredentials: true }
  );

  console.log(response.data);
  if(response.data.newSaved){
    console.log("Video saved");
    setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, saveCount: v.saveCount + 1 } : v))
  }
  else{
    console.log("Video unsaved");
    setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, saveCount: v.saveCount - 1 } : v))
  }
}

  return (
    
    
        <ReelsPart videos={videos} onLike={handlelikes} onSave={handlesaves} emptyMessage="No Reels Yet!" />

            );
          }

export default Home
