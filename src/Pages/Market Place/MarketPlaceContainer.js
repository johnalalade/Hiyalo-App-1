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
  const [filterActive, setfitlerActive] = useState(null);
  let i = 0;
  const toggle = (i) => {
    if (filterActive === i) {
      return setfitlerActive(null);
    }
    setfitlerActive(i);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [state, setState] = useState('Choose State');
  const [search_data, setSearchData] = useState('');
  const [indexA, setIndexA] = useState(0)

  const search = (ev) => {
    ev.preventDefault();
    let data = {
      search: search_data,
    };

    axios
      .post(
        'https://hiyalo-backend.herokuapp.com/houses/house-gateway/search-houses',
        data
      )
      .then((res) => {
        if (res.data.message === 'success') {
          setData(res.data.houses);
        }
      });
  };

  const fwd = () => {
    setIndexA(indexA + 4)
  }

  const back = () => {
    setIndexA(indexA - 4)
  }

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        'https://hiyalo-backend.herokuapp.com/houses/house-gateway/get-houses'
      )
      .then((data) => {
        setData(data.data.houses);
        setLoading(false);
      })
      .catch((err) => {
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
          <form class="heroe-form">
            <input
              type="text"
              placeholder="Search based on your loaction"
              onChange={(ev) => setSearchData(ev.target.value)}
            />

            <button type="submit" onClick={(ev) => search(ev)}>
              <iconify-icon
                class="location-icon"
                icon="lucide:locate-fixed"
              ></iconify-icon>
              <p>Search</p>
            </button>
          </form>
          <header>
            <h3>Available Spaces:</h3>
            <button className="filter-btn" onClick={() => toggle(i)}>
              {filterActive === i ? (
                <iconify-icon
                  class="filter-iconify filter-close-icon"
                  icon="ic:baseline-filter-list"
                ></iconify-icon>
              ) : (
                <iconify-icon
                  class="filter-iconify"
                  icon="ic:baseline-filter-list"
                ></iconify-icon>
              )}

              <p>Filter</p>
            </button>
          </header>

          <div
            className={
              filterActive === i
                ? 'filter-form active-filter-form'
                : 'filter-form'
            }
          >
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
              <select
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                {states.map((st) => (
                  <option value={st}>{st}</option>
                ))}
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
              {data
                .filter((h) =>
                  filterStatus === 'all' ? h : h.house_type === filterStatus
                )
                .filter((h2) =>
                  state === 'Choose State' ? h2 : h2.state === state
                )
                .slice(indexA, indexA + 4)
                .map((apartment) => (
                  <Apartment apartment={apartment} />
                ))}
            </div>
          </div>
        </main>
        {/* <div></div> */}

        <div className='next-prev'>
          {indexA !== 0 && <span className='prev' onClick={() => back()}>
            <iconify-icon icon="eva:arrow-ios-back-outline"></iconify-icon>
          </span> }

          {indexA + 4 < data.length && <span className='next' onClick={() => fwd()}>
            <iconify-icon icon="eva:arrow-ios-forward-fill"></iconify-icon>
          </span> }
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
