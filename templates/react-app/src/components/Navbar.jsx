import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4 border-b border-black shadow-lg rounded-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        
        <img 
          src="https://crossfi.org/src/assets/img/logo-text.svg" 
          alt="logo" 
          className="h-8 sm:h-10"
        />

        
        <div className="hidden sm:flex space-x-8">
          <a href="#home" className="text-gray-300 text-lg font-medium hover:text-white transition">
            Home
          </a>
        </div>

        
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition">
          Connect Wallet
        </button>

        
        <button 
          className="sm:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      
      {menuOpen && (
        <div className="sm:hidden mt-4 space-y-2">
          <a href="#home" className="block text-gray-300 text-lg font-medium hover:text-white px-4 py-2">
            Home
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar
