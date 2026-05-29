import "./scss components/Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Mon Site</h3>
          <p>© 2026 Tous droits réservés.</p>
        </div>

        <div className="footer-section">
          <h4>Réseaux</h4>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
}