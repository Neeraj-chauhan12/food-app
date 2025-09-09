
import React from 'react';


const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-2">
      <div className="w-full h-screen max-w-2xl bg-white rounded-2xl shadow-lg p-4 space-y-6">
        {/* Header/Profile */}
        <div className="rounded-2xl bg-red-900 p-4 flex flex-col items-center mb-2">
          <div className="flex w-full items-center justify-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-green-900 flex items-center justify-center text-white text-xl font-bold">Logo</div>
            <div className="flex flex-col gap-2">
              <div className="bg-green-800 rounded-lg px-4 py-2 text-white font-semibold text-center">business name</div>
              <div className="bg-green-800 rounded-lg px-4 py-2 text-white font-semibold text-center">Address</div>
            </div>
          </div>
          <div className="flex w-full justify-around items-center mt-2 mb-2">
            <div className="flex flex-col items-center">
              <span className="text-white text-base">total meals</span>
              <span className="text-white text-xl font-bold">43</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-base">customer serve</span>
              <span className="text-white text-xl font-bold">15K</span>
            </div>
          </div>
          <hr className="border-gray-300 w-full my-2" />
        </div>
        {/* Video Grid */}
        <div className="bg-blue-900 min-h-screen  w-full  rounded-xl p-4">
          <div className=" flex flex-wrap  gap-4">
            {[...Array(9)].map((_, idx) => (
              <div key={idx} className="aspect-video bg-blue-700 rounded-lg flex items-center h-64 w-32 justify-center text-white font-semibold text-lg shadow">
                video
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile