import React from 'react'
import samplepic from '../assets/samplepic.png'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' >
      <p id='user-name' >{props.name}</p>
      <img id='user-img' src={samplepic}alt='image'></img>
      <p id='user-desc' >Description of Harsh Jagtap</p>
    </div>
  )
}

export default UserCard;
