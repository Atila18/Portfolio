import { Link } from "react-router-dom"
import './scss components/Navbar.scss'
import Logo from './logo/Logo.png'
import ('https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap')


function Navbar() {
  return (
  <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">Profil</Link>
      <img src={Logo} alt="logo sakura"></img>
      <Link to="/projects">Projets</Link>
      <Link to="/contact">Contact</Link>
        </nav>
  );
}

export default Navbar;