import { FaGithub, FaGoogle } from "react-icons/fa";
import "./scss components/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-section">
          <h3>Mon Portfolio</h3>
          <p>Développeur web passionné</p>
          <p>© 2026 Tous droits réservés</p>
        </div>
        {/* Réseaux */}
        <div className="footer-section">
          <h4>Réseaux</h4>

          <a href="https://github.com/Atila18" target="_blank" rel="noreferrer">
            <FaGithub /> Github
          </a>
          <a href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage" target="_blank" rel="noreferrer">
            <FaGoogle /> Indeed
          </a>
        </div>
      </div>
    </footer>
  );
}