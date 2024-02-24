import "./animal_list.css"
const AnimalList = ({ animals }) => {
  console.log(animals)

  return (
    <ul>
      {animals.map((Item) => {
        return (
          <li key={Item.name} className="animal-list">
            A {Item.name} have {Item.legs} legs.
          </li>
        )
      })}
    </ul>
  )
}

export default AnimalList
