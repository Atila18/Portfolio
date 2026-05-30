import './scss components/Tarifs.scss'

export default function Tarifs() {
  return (
    <div className="tarifs-bloc">
      <div className="tarifs-container">
        <h6 className="tarifs-intro">Tarifs</h6>
        <ul className="tarifs-list">
          <li className="tarif-item">
            <span className="tarif-title">Portfolio - à partir de 590€</span>
            <p className="tarif-desc">1 à 3 pages, design responsive, formulaire de contact, SEO basique, mise en ligne.</p>
          </li>
          <li className="tarif-item">
            <span className="tarif-title">Site vitrine - à partir de 1 190€</span>
            <p className="tarif-desc">Jusqu'à 5 pages, design personnalisé, responsive, SEO basique, formulaire, Google Maps, mise en ligne.</p>
          </li>
          <li className="tarif-item">
            <span className="tarif-title">Premium - à partir de 2 490€</span>
            <p className="tarif-desc">Design sur mesure, SEO optimisé, animations, blog, performances améliorées, accompagnement.</p>
          </li>
          <li className="tarif-item">
            <span className="tarif-title">Maintenance - à partir de 39€/mois</span>
            <p className="tarif-desc">Mises à jour, support, petites modifications.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}