import { FaGithub, FaGoogle } from "react-icons/fa";
import "./scss components/Footer.scss";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Colonne de gauche : À propos */}
        <div className="footer-col">
          <h3>Mon Portfolio</h3>
          <p>Développeur web passionné</p>
        </div>
        {/* Colonne de droite : Réseaux */}
        <div className="footer-col">
          <h3>Réseaux</h3>
          <ul className="footer-links">
            <li><a href="#"><FaGithub /> Github</a></li>
            <li><a href="#"><FaGoogle /> Indeed</a></li>
          </ul>
        </div>
      </div>
      {/* Barre inférieure */}
      <div className="footer-bottom">
        <p>© 2026 Tous droits réservés</p>
      </div>
      <div className='center'>
      <button className='btn-pro'
      onClick={() => navigate("/tarifs")}
    >
      Tarifs
    </button>
    </div> 
    </footer>
  );
}