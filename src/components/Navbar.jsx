import './scss components/Navbar.scss'
import Logo from './logo/Logo.png'


function Navbar() {
  return (
   <nav className="navbar">
  <a href="#home">Home</a>
  <a href="#profile">Profil</a>
   <img src={Logo} alt="logo sakura" />
  <a href="#projects">Projets</a>
  <a href="#contact">Contact</a>
</nav>
  );
}

export default Navbar;