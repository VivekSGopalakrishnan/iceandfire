import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Characters from "./Characters";
import "./Charactersfile.css"
const Charactersfile = () => {
    const [characters,setCharacters] = useState([]);
  const [loading,setLoading] = useState([]);
  useEffect(()=> {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await axios.get("https://www.anapioficeandfire.com/api/characters?page=3&pageSize=10");
      setCharacters(res.data);
      setLoading(false)
    }
    fetchCharacters();
  },[]);
  return (
    <div className='charactersfile' id='characters'>          

    <h2 className="characters-title my-5">Characters</h2>
      <Characters characters={characters} loading={loading}></Characters>
      </div>
  )
}

export default Charactersfile