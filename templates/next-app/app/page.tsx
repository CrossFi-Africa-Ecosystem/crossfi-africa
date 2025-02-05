import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import AnimatedBackground from "./src/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedBackground />
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              CrossFi Chain AppKit
            </h1>
            <p className="text-lg md:text-2xl font-light text-white">
              Empowering the future of decentralized finance.
            </p>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-white mb-6">
              This is a template interface designed to help you get started
              quickly. All necessary folders and files are preconfigured,
              allowing you to customize and build your application as you see
              fit. Dive into the code, explore, and create something amazing!
            </p>

            <code className="text-[#fff] text-2xl ">
              Visit{" "}
              <a href="https://www.cloud.reown.com" className="underline">
                Reown Cloud
              </a>{" "}
              to completely configure your wallet connection
            </code>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
