import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/crossfi-logo.svg"
            alt="CrossFi Logo"
            width={120}
            height={40}
          />
        </div>
   
        {/* <appkit-button/> */}
      </div>
    </nav>
  );
}
