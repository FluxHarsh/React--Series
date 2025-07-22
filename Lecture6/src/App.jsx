import React, { useState } from 'react';
import './App.css'
import Loginbtn from './components/Loginbtn'
import Logoutbtn from './components/Logoutbtn'

function App() {
  const [isLoggedIn] = useState(false);

  if(!isLoggedIn){
    return(
      <Loginbtn/>
    )
  }

  return(
    <div>
      <h1>Hello just anything</h1>
      <div>
        {isLoggedIn && <Logoutbtn/> }
      </div>
    </div>
  )
   

  // return(
  //   <div>
  //     {isLoggedIn ? <Logoutbtn/> : <Loginbtn/>}
  //   </div>
  // )

  // if(isLoggedIn){
  //   return(
  //     <Logoutbtn/>
  //   )
  // }
  // else{
  //   return(
  //     <Loginbtn/> 
  //   )
  // }

}

export default App
