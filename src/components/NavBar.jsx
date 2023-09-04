function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
  
    const handlePrevClick = () => {setPokemonIndex( pokemonIndex- 1);};
   
    const handleNextClick = () => {
          setPokemonIndex(pokemonIndex + 1);
    };
   
    return ( 
          <div className='buttons-container'>
          {pokemonIndex > 0 ? <button onClick={handlePrevClick}>Back</button> : null}
          {pokemonIndex < pokemonList.length - 1 ? <button className="button" onClick={handleNextClick}>Next</button> : null}
          </div>
          ) 
         }
    export default NavBar