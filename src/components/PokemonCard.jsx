import PropTypes from "prop-types";

function PokemonCard({name, imgSrc}) {

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired
  };
  return (
    <div>
   <figure> { imgSrc === undefined ? "???": <img src= {imgSrc}  alt= {name} /> } 
   <figcaption> {name}</figcaption>
  </figure>
  </div>
  );
}


export default PokemonCard