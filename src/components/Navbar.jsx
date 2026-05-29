import { Link } from "react-router-dom";
import './scss components/Navbar.scss'
import Logo from './logo/Logo.png'


function Navbar() {
  return (
  <nav className="navbar">
   <img src={Logo} alt="logo sakura" /> 
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projets</Link>
        </nav>
  );
}

export default Navbar;