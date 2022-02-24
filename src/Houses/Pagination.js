import React from 'react'
import "./pagination.css"
const Pagination = ({housesPerPage , totalHouses , paginate}) => {
    const pageNumbers= [];

    for (let i = 1; i<= Math.ceil(totalHouses/housesPerPage); i++){
       pageNumbers.push(i);
        
    }
  return (
    <div className="paginate">
      <nav>
          <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className="item">
                    <a onClick={()=>paginate(number)} href='#houses' className="link">
                    {number}
                    </a>
                </li>))}
          </ul>
      </nav>
    </div>
  )
}

export default Pagination