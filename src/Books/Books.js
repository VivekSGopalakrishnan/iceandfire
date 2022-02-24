import React from 'react';
import "./Books.css"
const Books = ({books,loading}) => {
    if(loading)
    {
     return <div>loading...</div>;}
  return (
<div className="container">
    <ul className='books-group mb-4'>
    {books.map(books => (
        <li key={books.id} className='books-group-item'>
            <h6>Name: {books.name}<br/>
            <div className='book-author'>
            Author: {books.authors}</div></h6>
            <br/>
        </li>
        
    ))}
    </ul>
</div>
  )
}

export default Books