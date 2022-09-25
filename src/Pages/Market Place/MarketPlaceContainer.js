import './market-place.css';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Apartment from '../../components/Apartment/Apartment';
import apartments from './apartments';

const MarketPlace = () => {
  return (
    <section className="sign-up-body">
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

          <div className="filter-form">
            <div className="filter-inputs">
              <label for="#">Location</label>
              <input type="text" placeholder="your preferred location" />
            </div>
            <div className="filter-inputs">
              <label for="#">Apartment Type</label>
              <select>
                <option value="">Choose Apartment Type</option>
                <option value="">Duplex</option>
                <option value="">Bungalow</option>
              </select>
            </div>
            <div className="filter-inputs">
              <label for="#">Minimum Price</label>
              <input type="number" placeholder="&#8358;0.00" />
            </div>
            <div className="filter-inputs">
              <label for="#">Maximum Price</label>
              <input type="text" placeholder="&#8358;0.00" />
            </div>
          </div>

          <div className="apartments market-apartments">
            {apartments.map((apartment) => (
              <Apartment apartment={apartment} />
            ))}
          </div>
        </main>
        <div class="get-listed-container">
            <p>Are You An Agent/Realtor?</p>
            <h3>Get Your Apartment Listed On Hyalo</h3>
            <button type="button">Get Started</button>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default MarketPlace;
