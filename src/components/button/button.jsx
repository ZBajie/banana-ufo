import "./button.css"
export const Button = () => {
  const spaceship = () => {
    const spaceship = document.querySelector(".spaceship")
    spaceship.classList.toggle("space-animation")
  }
  return (
    <button onClick={spaceship} className="button">
      Good Bye
    </button>
  )
}
