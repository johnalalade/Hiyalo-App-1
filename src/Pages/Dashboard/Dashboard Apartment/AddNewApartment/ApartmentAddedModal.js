import { Link } from 'react-router-dom';
import VerifySuccess from '../../../../images/verify.svg';

const ApartmentAddedModal = () => {
  return (
    <section className="apartment-added-modal-container">
      <div className="apartment-added-modal">
        <img src={VerifySuccess} alt="" />

        <h4>Appartment Added Successfully</h4>

        <p>
          Your appartment has been successfully placed on the market place and
          it's ready to be rented out. Thank you
        </p>

        <span className="apartment-added-modal-cta">
          <Link to="/dashboard">Go To Dashboard</Link>
          <Link to="./dashboard">Apartment Overview</Link>
        </span>
      </div>
    </section>
  );
};

export default ApartmentAddedModal;
