import React, { useRef } from 'react'

const videos = [
  {
    src: "https://ik.imagekit.io/lwbkulh9u/bd10575c-2fa3-4f00-9d44-d7cb01e5e0cb_TSkhHF_je",
    description: 'Welcome to our food store! Discover delicious meals and amazing offers. Scroll for more mouth-watering options and visit our store for exclusive deals.'
  },
    {
    src: "https://ik.imagekit.io/lwbkulh9u/bd10575c-2fa3-4f00-9d44-d7cb01e5e0cb_TSkhHF_je",
    description: 'Welcome to our food store! Discover delicious meals and amazing offers. Scroll for more mouth-watering options and visit our store for exclusive deals.'
  },
    {
      src:"https://ik.imagekit.io/lwbkulh9u/bd10575c-2fa3-4f00-9d44-d7cb01e5e0cb_TSkhHF_je",
    description: 'Welcome to our food store! Discover delicious meals and amazing offers. Scroll for more mouth-watering options and visit our store for exclusive deals.'
  },
  // Add more video objects here if available
];

const Home = () => {


        


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
            src={video.src}
            controls
            autoPlay
            loop
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full flex flex-col items-center z-10 px-4 pt-6 pointer-events-none">
            <div className="w-full max-w-lg">
              <p className="text-white text-base font-medium line-clamp-2 mb-3 bg-black/60 rounded px-3 py-2 pointer-events-auto" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                {video.description}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex flex-col items-center z-10 px-4 pb-8 pointer-events-none">
            <div className="w-full max-w-lg">
              <button className="w-full py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors pointer-events-auto">Visit Store</button>
            </div>
          </div>
        </div>
      ))}



    </div>
  );
}

export default Home
