import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import homeImage from '../assets/pokemon.png';

function Header() {
  return (
    <header className="header-custom">
      <div className="image-container">
        <img src={homeImage} alt="Pokémon" />
      </div>
    </header>
  );
}

export default Header;