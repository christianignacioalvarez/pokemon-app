import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';

function Header() {
  return (
    <header className="bg-primary text-white py-3 text-center">
      <h1 className='display-4'>Pokémon App</h1>
    </header>
  );
}

export default Header;