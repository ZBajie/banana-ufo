import AnimalList from "./animal_list/animal_list"
import animals from "./animals.json"
import "./animalbox.css"

const AnimalBox = () => {
  const animalsData = animals.data
  return (
    <section className="animal-box">
      <h3>Animals</h3>
      <AnimalList animals={animalsData} />
    </section>
  )
}

export default AnimalBox
