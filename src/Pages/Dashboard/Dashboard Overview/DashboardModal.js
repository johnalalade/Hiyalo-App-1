import { Link } from 'react-router-dom';
import VerifySuccess from '../../../images/verify.svg';
import './dashboardmodal.css'
const DashboardModal = ({ setModal }) => {
  return (
    <section className="apartment-added-modal-container">
      <div className="apartment-added-modal">
        <img src={VerifySuccess} alt="" />

        <h4>Welcome to Hiyalo, Comrade</h4>

        <p>
          Now that you are here lets get your first apartment on Hiyalo uploaded
        </p>

        <span className="apartment-added-modal-cta">
          <Link to="/apartments/add-new-apartment" className="modal-cta">
            <span>Upload Apartment</span>
          </Link>
          <div onClick={() => setModal(false)} className="modal-cta">
            <>Go to dashboard</>
          </div>
        </span>
      </div>
    </section>
  );
};

export default DashboardModal;
