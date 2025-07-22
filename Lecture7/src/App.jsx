import './App.css'

function handleClick(){
  alert("I am clicked")
}
function mouseHover() {
  alert("Why hovering mouse over it stupid")
}

function App() {

  return (
   <div>
    <button onClick={handleClick}>
      Hello Harsh Jagtap
    </button>
    <p onMouseOver={mouseHover}>
      Just a para
    </p>
   </div>
  )
}

export default App
