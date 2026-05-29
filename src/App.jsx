import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx"
import Profil from "./components/Profil.jsx"
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx"


function App() {
  return (
    <div>
          <BrowserRouter>
           <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Profil />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;