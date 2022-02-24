import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Books from './Books';
import "./Booksfile.css";
const Booksfile = () => {
  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState([]);

  useEffect(()=> {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await axios.get("https://www.anapioficeandfire.com/api/books");
      setBooks(res.data);
      setLoading(false)
    }
    fetchBooks();
  },[]);
console.log(books);
  return (
    <div className='booksfile' id="books">          

      <h2 className="books-title my-5">Some of the Popular Books</h2>
        <Books books={books} loading={loading}></Books>
        </div>

  )
}

export default Booksfile