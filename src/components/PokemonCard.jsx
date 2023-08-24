
function PokemonCard ({ pokemon })  {

  return (
    <div>
      {pokemon.imgSrc == undefined  ? 
      <p> ???</p> 
      :
      (
        <figure>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        </figure> ) 
      } 
    </div>
    );
};


export default PokemonCard;