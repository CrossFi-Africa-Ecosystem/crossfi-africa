// import "../config/connection"; comment in after adding the connect button to the interface
import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="relative  items-center justify-center min-h-screen bg-black text-white overflow-hidden">
              <Navbar/>
            <Animation/>
            <Hero/>
            <Footer/>
            
       
      </div>
    </>
  );
}

export default App;
