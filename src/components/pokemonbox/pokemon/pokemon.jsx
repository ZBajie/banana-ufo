import "./pokemon.css"

const Pokemon = ({ name, size, id }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imageUrl} alt="Pokemon image" />
      <p>Size: {size}</p>
    </div>
  )
}
export default Pokemon
