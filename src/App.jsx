import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx"
import Profil from "./components/Profil.jsx"
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <div>
          <BrowserRouter>
           <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Profil />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>

  );
}

export default App;