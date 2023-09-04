import PropTypes from "prop-types";

function PokemonCard({ name, imgSrc }) {


  return (
      <>
          <div>
              <h2>{name}</h2>
              <img src={imgSrc} alt={name} />
          </div>
      </>
  )
}

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired
}
export default PokemonCard