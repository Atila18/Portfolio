import './scss components/Home.scss'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bloc">
  <div className="box-text">
    <h6 className='intro'>"Développeur web passionné par l'art du détail."</h6>
    <p className="titre">
      "De l'idée à la ligne de code, j'aime construire des projets numériques qui ont du sens. Découvrez mes réalisations — à l'image de Brin d'Atila — et explorez comment je marie design créatif et développement web."
    </p>
    <div className='center'>
      <button className='btn-pro'
      onClick={() => navigate("/projects")}
    >
      Voir mes projets
    </button>
    </div>
  </div>
</div>
    
  );
}
  