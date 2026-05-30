import coton from './logo/coton.png'
import "./scss components/Projects.scss"

function Projects() {
  return (
    <div class="container">
            <div class="image-box">
        <img className='coton' src={coton} alt="Disques démaquillants lavables"></img>
      </div>
      <div class="text-box">
        <h1>Projet n°1 - Brin d'Atila</h1>
        <p class="slogan">Innover selon votre envie !
          Brin d'Atila crée des accessoires écoresponsables et personnalisables. Chaque pièce est faite avec soin, dans une démarche durable, pour proposer des créations uniques, utiles et adaptées à chacun.
        </p>
      </div>
    </div>
  );
}

export default Projects;
