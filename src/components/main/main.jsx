import "./main.css"
import Article from "./article/article"
import PokemonBox from "./../pokemonbox/pokemonbox"
import AnimalBox from "./../animalbox/animalbox"
const Main = () => {
  return (
    <main className="main">
      <section className="articles">
        <Article />
        <Article />
      </section>
      <section className="pokmones-animals">
        <PokemonBox />
        <AnimalBox />
      </section>
    </main>
  )
}

export default Main
