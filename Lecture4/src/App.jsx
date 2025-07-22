import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count , setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="Click Me">
        <h1>{count}</h1> 
      </Button>






      {/* <Card name="Harsh Jagtap">
        <h1>Best WEB DEV in India</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the react series soon</p>
      </Card>
      <Card children="Hello i am a children">
        Hello i am in a new card 
      </Card> */}
    </div>
  )
}

export default App
