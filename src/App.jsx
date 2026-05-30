import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx"
import Profil from "./components/Profil.jsx"
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Tarifs from "./components/Tarifs.jsx"
import "./components/scss components/App.scss"


function App() {
  return (
    <BrowserRouter>
      {/* Wrapper global qui gère la hauteur de la page */}
      <div className="page-wrapper"> 
        <Navbar />
        {/* C'est ce conteneur qui va occuper l'espace libre pour pousser le footer */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Profil />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tarifs" element={<Tarifs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;