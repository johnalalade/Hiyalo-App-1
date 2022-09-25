import './heroe.css'
import NavBar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Heroe = () => {

  const [search_data, setSearchData] = useState("")

  // const navigate = useNavigate();


  const search = (ev) => {
    ev.preventDefault()
    let data = {
      search: search_data
    }

    axios.post('https://hiyalo-backend.herokuapp.com/houses/house-gateway/search-houses', data)
      .then(res => {
        if (res.data.message === "success") {
          console.log(res.data)
        }
      })
  } 


  return (
    <header className="heroe-section">
      <NavBar />
      <main>
        <h1>Pay Your Rent Monthly With Hiyalo</h1>
        <form class="heroe-form">

          <input type="text" placeholder="Search based on your loaction" 
          onChange={(ev) => setSearchData(ev.target.value)}
          />

          <button type="submit" onClick={(ev) => search(ev)} >
            <iconify-icon
              class="location-icon"
              icon="lucide:locate-fixed"
            ></iconify-icon>
            <p>Search</p>
          </button>

        </form>
      </main>
    </header>
  );
};
export default Heroe;
