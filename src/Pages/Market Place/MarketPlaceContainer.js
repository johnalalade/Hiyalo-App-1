import React from 'react';
import './market-place.css';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Apartment from '../../components/Apartment/Apartment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PageLoader from '../../components/Loader/PageLoader';
import states from '../../components/states';

const MarketPlace = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all")
  const [state, setState] = useState("Choose State")
  const [search_data, setSearchData] = useState("")

  
  const search = (ev) => {
    ev.preventDefault()
    let data = {
      search: search_data
    }

    axios.post('https://hiyalo-backend.herokuapp.com/houses/house-gateway/search-houses', data)
      .then(res => {
        if (res.data.message === "success") {
          setData(res.data.houses)
        }
      })
  } 

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        'https://hiyalo-backend.herokuapp.com/houses/house-gateway/get-houses'
      )
      .then((data) => {
        console.log(data.data.houses);
        setData(data.data.houses);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <PageLoader />
      </div>
    );
  }

  return (
    <section className="sign-up-body market-place-body">
      <NavBar />

      <section className="available-spaces-container">
        <main class="available-spaces">

          <header>
            <h3>Available Spaces</h3>
            <button className="filter-btn">
              <iconify-icon
                class="iconify"
                icon="material-symbols:filter-list"
              ></iconify-icon>
              <p>Filter</p>
            </button>
          </header>

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

          <div className="filter-form">

            {/* <div className="filter-inputs">
              <label for="#">Location</label>
              <input type="text" placeholder="your preferred location" />
            </div> */}

            <div className="filter-inputs">
              <label for="#">Apartment Type</label>
              <select onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="Flat">Flat</option>
                <option value="Duplex">Duplex</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Condo">Condo</option>
                <option value="Pent House">Pent House</option>
              </select>
            </div>

            {/* <div className="filter-inputs">
              <label for="#">Minimum Price</label>
              <input type="number" placeholder="&#8358;0.00" />
            </div> */}
            <div className="filter-inputs">
              <label for="#">Location</label>
              <select name='state' value={state} onChange={(e) => setState(e.target.value)} className="input-selection" id='house-type-option' >
                {
                  states.map(st => <option value={st} >{st}</option>)
                }
              </select>
            </div>

            {/* <div className="filter-inputs">
              <label for="#">Maximum Price</label>
              <input type="text" placeholder="&#8358;0.00" />
            </div> */}

          </div>

          <div className="apartments market-apartments">
            {/* {data.map((apartment) => (
            <Apartment apartment={apartment} /> */}

            <div className="apartments market-apartments">
              {data.filter(h => filterStatus === "all" ? h : h.house_type === filterStatus).filter(h2 => state === "Choose State" ? h2 : h2.state === state).slice(0, 4).map((apartment) => (
                <Apartment apartment={apartment} />
              ))}
            </div>
          </div>


        </main>
        <div>

        </div>

        <div class="get-listed-container">
          <p>Are You An Agent/Realtor?</p>
          <h3>Get Your Apartment Listed On Hyalo</h3>
          <Link to="/sign-up-agent" type="button">
            <button>Get Started</button>
          </Link>
        </div>
      </section>


      <Footer />
    </section>
  );
};

export default MarketPlace;
