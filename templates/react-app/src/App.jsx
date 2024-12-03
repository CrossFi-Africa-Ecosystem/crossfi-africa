import "../config/connection";
function App() {
  return (
    <>
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin-slow w-96 h-96 border-[20px] border-t-transparent border-blue-800 rounded-full opacity-30"></div>
            <div className="absolute animate-spin-reverse w-64 h-64 border-[15px] border-b-transparent border-cyan-500 rounded-full opacity-50"></div>
          </div>

          <div className="z-10 text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-text-glow">
              Welcome to CrossFi Chain
            </h1>
            <p className="text-lg md:text-2xl font-light">
              Empowering the future of decentralized finance.
            </p>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto">
              This is a template interface designed to help you get started
              quickly. All necessary folders and files are preconfigured,
              allowing you to customize and build your application as you see
              fit. Dive into the code, explore, and create something amazing!
            </p>
          </div>
        </div>
    </>
  );
}

export default App;
