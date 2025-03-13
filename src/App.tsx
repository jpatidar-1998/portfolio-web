import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="root">
          <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/home" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
