import React from 'react'

const Animation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
    <div className="animate-spin-slow w-96 h-96 border-[20px] border-t-transparent border-blue-800 rounded-full opacity-30"></div>
    <div className="absolute animate-spin-reverse w-64 h-64 border-[15px] border-b-transparent border-cyan-500 rounded-full opacity-50"></div>
  </div>
  )
}

export default Animation