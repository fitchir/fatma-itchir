

import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {


  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };


  const handleNextClick = () => {
    
      setPokemonIndex(pokemonIndex + 1)
  };

  return (
    <div>
      {pokemonIndex > 0 ? <button onClick={handlePrevClick}>Previous</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNextClick}>Next</button> : null}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        type:"grass",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        type:"fire",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        type: "water",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        type:"electric",
    },
    {
      name: "mew",
    },
  ];

  export default App
