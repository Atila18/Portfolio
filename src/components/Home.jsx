import coton from './logo/coton.png'
import './scss components/Home.scss'

function Home() {
  return (
    <div class="container">
        <div class="image-box">
    <img className='coton' src={coton} alt="Disques démaquillants lavables"></img>
  </div>
  <div class="text-box">
    <p class="slogan">Innover selon votre envie !</p>
  </div>
</div>
  );
}

export default Home;
