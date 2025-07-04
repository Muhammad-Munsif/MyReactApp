import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";

function App() {
 return (
  <div  className="min-h-screen bg-[#151C25] sm:w-full overflow-hidden">
    <Navbar />
   <Header />
   <About />
   <Project />
   <Contact />
   <Footer />
  </div>
 );
}

export default App;
