import PropTypes from "prop-types";

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
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })
};
export default PokemonCard;