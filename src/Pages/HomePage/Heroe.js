import './heroe.css'
import NavBar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import PageLoader from '../../components/Loader/PageLoader.js'

const Heroe = ({ executeScroll, setHouses, setSearch }) => {

  const [search_data, setSearchData] = useState("")
  const [load, setLoad] = useState(false)
  // const navigate = useNavigate();


  const search = (ev) => {
    setLoad(true)
    ev.preventDefault()
    let data = {
      search: search_data
    }

    axios.post('https://hiyalo-backend.herokuapp.com/houses/house-gateway/search-houses', data)
      .then(res => {
        setLoad(false)
        if (res.data.message === "success") {
          console.log(res.data)
          executeScroll()
          setSearch(search_data)
          setHouses(res.data.houses.slice(0, 4))
        }
      })
      .catch(err => {
        setLoad(false)
        console.log(err)
      })
  } 

  if (load) {
    return (
      <PageLoader />
    )
  }

  return (
    <header className="heroe-section">
      <NavBar />
      <main>
        <h1>Home is where the heart is, at Hiyalo we give the first beat...</h1>
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
