import React from 'react'

const Footer = () => {
    return (
      <footer className=" p-4 text-center flex flex-col md:flex-row justify-between items-center border-t border-black">
        <p className="text-gray-900 font-medium"></p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-white text-2xl"></a>
          <a href="#" className="text-white text-1xl pr-[900px]">   © {new Date().getFullYear()} CrossFi Chain. All rights reserved.</a>
        </div>
      </footer>
    );
  };


export default Footer