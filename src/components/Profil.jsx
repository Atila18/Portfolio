import { useState } from "react";
import Atila from "../components/logo/Atila.png"
import "./scss components/Profil.scss"

export default function ProfileCard() {
  const [followed, setFollowed] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [followers, setFollowers] = useState(0);

  const handleFollow = () => {
  if (followed) {
    setFollowers(followers - 1);
  } else {
    setFollowers(followers + 1);
  }

  setFollowed(!followed);

    // affiche le coeur
    setShowHeart(true);

    // le cache après l'animation
    setTimeout(() => {
      setShowHeart(false);
    }, 800);
  };

  return (
    <section className="layout">
       <div className="card">
      <img src={Atila} className="avatar" />
      <h3 className="name">Atila</h3>

      <button className="follow-btn" onClick={handleFollow}>
        {followed ? "Following" : "Follow"}
      </button>

      {showHeart && <div className="heart">🌸</div>}
       <span className="followers">{followers} followers</span>
    </div>
    <div className="bubble">
          <p>  Jeune femme de 24 ans, je suis diplômée en développement web. Je souhaite lancer mon entreprise d'accessoires écoresponsables faits main en couture. En parallèle, je propose de créer des sites vitrines et des portfolios pour d'autres créateurs, tout en développant mon propre site de vente en ligne pour ma marque.
      </p> 
    </div>
    </section>
  );
}