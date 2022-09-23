import './market-place.css';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Apartment from '../../components/Apartment/Apartment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

const MarketPlace = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.post('https://hiyalo-backend.herokuapp.com/houses/house-gateway/get-houses')
    .then(data => {
      console.log(data.data.houses)
      setData(data.data.houses)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="spinner">
          <ClipLoader color='#4733AC' loading={loading} size={150} />
      </div>
    )
  }

  return (
    <body className="sign-up-body">
      <NavBar />

      <section className="available-spaces-container">
        <main class="available-spaces">
          <header>
            <h3>Available Spaces</h3>
            <button class="filter-btn">
              <iconify-icon
                class="iconify"
                icon="material-symbols:filter-list"
              ></iconify-icon>
              <p>Filter</p>
            </button>
          </header>

          <div className='apartments market-apartments'>
          {data.map((apartment) => (
            <Apartment apartment={apartment} />
            ))}
          </div>
        </main>
      </section>
      <Footer />
    </body>
  );
};

export default MarketPlace;
