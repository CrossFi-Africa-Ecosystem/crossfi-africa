import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold">CrossFi Chain</h1>
        </div>

        {/* You can add navigation or other header content here + connect wallet button */}
      </header>

      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>

      <footer className="bg-black text-white py-4 mt-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} CrossFi Chain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
