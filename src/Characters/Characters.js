import React from 'react';
import "./Characters.css"
const Characters = ({characters,loading}) => {
    if(loading)
    {
     return <div>loading...</div>;}
  return (
<div className="container">
    <ul className='characters-group mb-4'>
    {characters.map(characters => (
        <li key={characters.id} className='characters-group-item'>
           <h6> Name: {characters.name}<br/>
            <br/></h6>
        </li>
        
    ))}
    </ul>
</div>
  )
}

export default Characters