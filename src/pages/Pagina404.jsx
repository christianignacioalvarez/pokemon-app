function Pagina404() {
  return (
    <div className="text-center" style={{ padding: '20px' }}>
      <h1>Error 404</h1>
      <p>¡El Pokémon que estás buscando no existe o no se encuentra disponible!</p>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu triste"
        style={{ maxWidth: '300px', marginTop: '20px' }}
      />
    </div>
  );
}

export default Pagina404;
