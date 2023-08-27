import PropTypes from "prop-types";
import colors from "./Type"

function PokemonCard ({ pokemon })  {

  return (
    <figure classeName= "card" style={{backgroundColor : colors[pokemon.types]}}>
      {pokemon.imgSrc == undefined  ? 
      <p> ???</p> 
      :
      (
        <>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        </> ) 
      } 
      </figure>
  
    );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
};
export default PokemonCard;