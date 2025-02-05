import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-[#fff] ">CrossFi Appkit</Link>

      </div>
    </nav>
  );
}
