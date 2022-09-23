import React from 'react';
import './add-new-apartment.css';
import ClipLoader from "react-spinners/ClipLoader";

export const ApartmentPaymentDetails = ({ prevStep, annual_fee, agency_fee, caution_fee, stamp_fee, handleChange, finish, loading }) => {

  // let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");

  const continu = (e) => {
    // e.preventDefault();
    // nextStep();
    
    finish()
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const draft = () => {

    handleChange({
      target: {
        value: "draft",
        name: "status"
      }
    })

    finish()
  }
  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color='#4733AC' loading={loading} size={150} />
      </div>
    )
  }
  return (
    <main class="add-new-property-container">
      <header>
        <h4>Add New Apartment:</h4>
        <div class="add-property-cta">
          <button type="submit" onClick={() => draft()}>Save as Draft</button>
          <button type="submit" onClick={() => finish()}>Completed</button>
        </div>
      </header>

      <div class="steps-filters">
        <div class="step active-step">
          <p>Basic Info</p>
          <span>01</span>
        </div>
        <div class="step-connector active-connector"></div>
        <div class="step active-step">
          <p>Amenities</p>
          <span>02</span>
        </div>

        <div class="step-connector active-connector"></div>
        <div class="step active-step">
          <p>Gallery</p>
          <span>03</span>
        </div>

        <div class="step-connector active-connector"></div>
        <div class="step active-step">
          <p>Address</p>
          <span>04</span>
        </div>

        <div class="step-connector active-connector"></div>
        <div class="step active-step">
          <p>Payment</p>
          <span>05</span>
        </div>
      </div>

      <div class="add-propery-form-container">
        <div class="step-title">
          <h4>Payment Details</h4>
        </div>
        <form action="" class="basic-info-form">
          <div class="col-1">
            <label for="payment"> Annual Rent Fee (&#8358;) </label>
            <input type="number" name='annual_fee' value={annual_fee} placeholder="enter annual rent fee" onChange={(e) => handleChange(e)} />

            <label for="agency fee">Agency & Agreement Fee (&#8358;)</label>
            <input
              type="number"
              placeholder="enter the angency fee & Agreement Fee"
              name='agency_fee' value={agency_fee} onChange={(e) => handleChange(e)}
            />

            <label for="caution fee">Caution Fee (&#8358;)</label>
            <input type="number" placeholder="enter the caution fee" name='caution_fee' value={caution_fee} onChange={(e) => handleChange(e)} />

          </div>
          <div class="col-2">
            <label for="stamp duty">Stamp Duty Fee (&#8358;)</label>
            <input type="number" placeholder="stamp duty fee" name='stamp_fee' value={stamp_fee} onChange={(e) => handleChange(e)} />

            <aside>Total Fee is (&#8358;){(Number(annual_fee) + Number(agency_fee) + Number(caution_fee) + Number(stamp_fee)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</aside>
          </div>
        </form>

        <div class="property-form-cta">
          <button type="submit" onClick={back}>previous</button>
          <button onClick={continu} type="button">
            Finish
          </button>
        </div>
      </div>
    </main>
  );
}

export default ApartmentPaymentDetails;
