import "./App.css"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Main from "./components/main/main"
import PokemonBox from "./components/pokemonbox/pokemonbox"
import AnimalBox from "./components/animalbox/animalbox"

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <PokemonBox />
      <AnimalBox />
      <Footer />
    </>
  )
}

export default App
