import { useState, useEffect } from "react";
import Atila from "../components/logo/Atila.png"
import "./scss components/Profil.scss"

export default function ProfileCard() {
  const [followed, setFollowed] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  // 📊 followers init localStorage
  const [followers, setFollowers] = useState(() => {
    const saved = localStorage.getItem("followers");
    return saved ? JSON.parse(saved) : 0 ;
  });

  // 💾 save followers
  useEffect(() => {
    localStorage.setItem("followers", JSON.stringify(followers));
  }, [followers]);

  // 💾 save follow state
  useEffect(() => {
    localStorage.setItem("followed", JSON.stringify(followed));
  }, [followed]);

const handleFollow = () => {
  setFollowed(prev => {
    const newState = !prev;

    setFollowers(f =>
      newState ? f + 1 : Math.max(0, f - 1)
    );

    return newState;
  });

  setShowHeart(true);
  setTimeout(() => setShowHeart(false), 800);
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