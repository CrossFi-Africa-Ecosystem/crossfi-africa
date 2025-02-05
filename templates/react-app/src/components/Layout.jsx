import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md flex justify-between items-center px-6">
        <a href="crossfi.org">
          <img
            src="https://crossfi.org/src/assets/img/logo-text.svg"
            alt="logo"
            className="h-8 sm:h-10 cursor-pointer"
          />
        </a>
        <appkit-button size="md" />
      </header>

      <main className="flex-grow bg-black">{children}</main>

      <footer className="bg-black text-white py-4">
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
