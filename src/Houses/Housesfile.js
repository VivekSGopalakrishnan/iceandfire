import { useState , useEffect} from 'react';
import Houses from './Houses';
import axios from 'axios';
import Pagination from './Pagination';
import "./Housesfile.css"
function Housesfile() {
const [houses,setHouses] = useState([]);
const [loading,setLoading] = useState(false);
const [currrentPage, setCurrentPage] = useState(1);
const [housesPerPage] = useState(5);


useEffect(()=> {
  const fetchHouses = async () => {
    setLoading(true);
    const res = await axios.get("https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50");
    setHouses(res.data);
    setLoading(false)
  }
  fetchHouses();
},[]);

 const lastHouse = currrentPage*housesPerPage;
 const firstHouse = lastHouse-housesPerPage;
 const currentHouses = houses.slice(firstHouse,lastHouse);

 const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="Housesfile">
    
         <h1  className="houses-title my-5" id="houses"> Houses</h1>
        <Houses houses={currentHouses} loading={loading}></Houses>
       <Pagination housesPerPage = {housesPerPage} totalHouses={houses.length} paginate={paginate}/>
    </div>
  );
}

export default Housesfile;
