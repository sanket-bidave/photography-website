import "./App.css";
import "./index.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Portfolio from "./Routes/Portfolio";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";
import { Toast } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Componant/ScrollToTop";
import WhatsApp from "./Componant/WhatsApp";
import Navbar from "./Componant/Navbar"
import Footer from "./Componant/Footer"
function App() {
  return (
    
    <>
    
      <ScrollToTop />
      <ToastContainer />
      <WhatsApp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
     
    </>
  );
}

export default App;
