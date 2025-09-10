import React, { useEffect, useState } from 'react'
import ReelsPart from './ReelsPart';
import axios from 'axios';

const SavedReel = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch saved reels from API
        axios.get('http://localhost:3000/api/auth/food/saved', {
            withCredentials: true
        })
        .then((response) => {
            const savedFoods = response.data.savedFoods.map((item) => ({
                    _id: item.food._id,
                    video: item.food.video,
                    description: item.food.description,
                    likeCount: item.food.likeCount,
                    savesCount: item.food.savesCount,
                    commentsCount: item.food.commentsCount,
                    foodPartner: item.food.foodPartner,
                }))
                setVideos(savedFoods)
            })
        .catch((error) => {
            console.error('Error fetching saved reels:', error);
        });
    }, []);

    const removeSaved = async (item) => {
        try {
            await axios.post("http://localhost:3000/api/food/save", { foodId: item._id }, { withCredentials: true })
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: Math.max(0, (v.savesCount ?? 1) - 1) } : v))
        } catch {
            // noop
        }
    }


  return (
    <ReelsPart videos={videos} onSave={removeSaved} emptyMessage="No Saved Reels Yet!"  />
  )
}

export default SavedReel


