import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
 return (
  <div  className="min-h-screen bg-[#151C25] sm:w-full">
   <Header />
   <About />
   <Contact />
   <Footer />
  </div>
 );
}

export default App;
