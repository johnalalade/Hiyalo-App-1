import './market-place.css';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Apartments from './Apartments';
import Apartment from '../../components/Product/Apartment';
const MarketPlace = () => {
  return (
    <>
      <NavBar />

      {Apartments.map((apartment) => {
        <div className="apartment">
          <img src={apartment.productImg} alt="" />
          <div className="apartment-location">
            <p>{apartment.productLocation}</p>
          </div>
          <div className="core-amenities">
            <span>
              <iconify-icon
                class="iconify"
                icon="emojione-monotone:bed"
              ></iconify-icon>
              <p>{apartment.numberOfBeds}Bed(s)</p>
            </span>
            <span>
              <iconify-icon
                class="iconify"
                icon="emojione-monotone:bed"
              ></iconify-icon>
              <p>{apartment.numberOfBaths}Bath(s)</p>
            </span>
          </div>
          <div class="apartment-prices">
            <span>
              <p>
                &#8358; {apartment.ProductPriceYearly}
                <small>/year</small>
              </p>
              <p>
                &#8358;{apartment.ProductPriceMonthly}
                <small>/month</small>
              </p>
            </span>
            <a href="#">
              <iconify-icon icon="bx:right-arrow-alt"></iconify-icon>
            </a>
          </div>
        </div>;
      })}

      <Footer />
    </>
  );
};

export default MarketPlace;
