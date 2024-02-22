import Pokemon from "./pokemon/pokemon"
import Pokemons from "./pokemons.json"
import "./pokemonbox.css"

const PokemonBox = () => {
  const data = Pokemons.data
  console.log(data)

  return (
    <section className="pokemon-box">
      {data.map((PokemonData) => {
        return (
          <Pokemon
            name={PokemonData.name}
            id={PokemonData.id}
            size={PokemonData.size}
          />
        )
      })}
    </section>
  )
}

export default PokemonBox
