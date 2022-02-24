import React from 'react'
import "./Houses.css"
const Houses = ({houses,loading}) => {
    if(loading)
   {
    return <div>loading...</div>;}
  return(
    <div className="container">
      <ul className='group mb-4'>
          {houses.map(houses => (
              <li key={houses.id} className='group-item'>
                  <h6>{houses.name}
                  {houses.founded}</h6>
                  <br/>
              </li>
              
          ))}
      </ul>
    </div>
  );
};

export default Houses