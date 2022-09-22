import './market-place.css';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Apartment from '../../components/Apartment/Apartment';
import apartments from './apartments';

const MarketPlace = () => {
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
          {apartments.map((apartment) => (
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
