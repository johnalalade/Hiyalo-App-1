import React, { useState } from 'react';
import './add-new-apartment.css';

export const ApartmentAmmenities = ({ nextStep, prevStep, handleChange, ammenities, finish }) => {

  const [amenity, setAmenity] = useState(ammenities)

  const continu = (e) => {
    // e.preventDefault();
    nextStep();
    handleChange({
      target: {
        value: amenity,
        name: "ammenities"
      }
    })
    console.log(ammenities)
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();

    handleChange({
      target: {
        value: amenity,
        name: "ammenities"
      }
    })
  };

  const draft = () => {

    handleChange({
      target: {
        value: amenity,
        name: "ammenities"
      }
    })

    handleChange({
      target: {
        value: "draft",
        name: "status"
      }
    })

    finish()
  }

  const add = (number, name) => {

    if (amenity.filter(a => a.name === name).length !== 0) {
      console.log("f!")
      let xx = amenity.indexOf(amenity.find(o => o.name === name))

      setAmenity(amenity.map((obj, ix) => {
        return ix === xx ? {
          name,
          number
        } : obj
      }))


    } else {
      if (number !== 0) {
        console.log("ggg")
        setAmenity([...amenity, {
          name,
          number
        }])
      }
      if (number === 0) {
        setAmenity(amenity.filter(a => a.name !== name))
      }
    }

  }

  return (
    <main class="add-new-property-container">
      <header>
        <h4>Add New Apartment:</h4>
        <div class="add-property-cta">
          <button type="submit" onClick={() => draft()}>Save as Draft</button>
          <button type="submit" onClick={() => finish()} >Completed</button>
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

        <div class="step-connector"></div>
        <div class="step">
          <p>Gallery</p>
          <span>03</span>
        </div>

        <div class="step-connector active-connector"></div>
        <div class="step">
          <p>Address</p>
          <span>04</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Payment</p>
          <span>05</span>
        </div>
      </div>

      <div class="add-propery-form-container">
        <div class="step-title">
          <h4>Apartment Amenties</h4>
        </div>
        <form action="" class="amenities-info-form">

          <div className="amenity">
            <iconify-icon
              className="amenity-icons"
              icon="fluent:bed-16-regular"
            ></iconify-icon>
            <p>Bedroom</p>
            <input type="number" 
            value={ammenities.find(o => o.name === "Bedroom") && ammenities.find(o => o.name === "Bedroom").number} placeholder="0" 
            onChange={(ev) => {
              add(ev.target.value, "Bedroom")
            }} />
          </div>

          <div className="amenity">
            <iconify-icon
              className="amenity-icons"
              icon="cil:bathroom"
            ></iconify-icon>
            <p>Bathroom</p>
            <input type="number" 
            placeholder="0" 
            value={ammenities.find(o => o.name === "Bathroom") && ammenities.find(o => o.name === "Bathroom").number} 
            onChange={(ev) => {
              add(ev.target.value, "Bathroom")
            }} />
          </div>

          <div className="amenity">
            <iconify-icon
              className="amenity-icons"
              icon="fe:kitchen-cooker"
            ></iconify-icon>
            <p>Kitchen</p>
            <input type="number" 
            placeholder="0" 
            value={ammenities.find(o => o.name === "Kitchen") && ammenities.find(o => o.name === "Kitchen").number} 
            onChange={(ev) => {
              add(ev.target.value, "Kitchen")
            }} />
          </div>

          <div className="amenity">
            <iconify-icon
              className="amenity-icons"
              icon="material-symbols:dining-outline"
            ></iconify-icon>
            <p>Dining Room</p>
            <input type="number" 
            placeholder="0" 
            value={ammenities.find(o => o.name === "Dining Room") && ammenities.find(o => o.name === "Dining Room").number} onChange={(ev) => {
              add(ev.target.value, "Dining Room")
            }} />
          </div>

          <div className="amenity">
            <iconify-icon
              className="amenity-icons"
              icon="icon-park-outline:swimming-pool"
            ></iconify-icon>
            <p>Swimming pool</p>
            <input type="number" 
            value={ammenities.find(o => o.name === "Swimming pool") && ammenities.find(o => o.name === "Swimming pool").number} 
            placeholder="0" 
            onChange={(ev) => {
              add(ev.target.value, "Swimming pool")
            }} />
          </div>

          <div className="amenity">
            <iconify-icon
              className="amenity-icons"
              icon="bx:store"
            ></iconify-icon>
            <p>Store room</p>
            <input type="number" 
            value={ammenities.find(o => o.name === "Store room") && ammenities.find(o => o.name === "Store room").number} 
            placeholder="0" 
            onChange={(ev) => {
              add(ev.target.value, "Store room")
            }} />
          </div>

          <div className="amenity">
            <iconify-icon
              className="amenity-icons"
              icon="maki:parking-garage"
            ></iconify-icon>
            <p>Parking Space</p>
            <input type="number"
             value={ammenities.find(o => o.name === "Parking Space") && ammenities.find(o => o.name === "Parking Space").number} placeholder="0" 
             onChange={(ev) => {
              add(ev.target.value, "Parking Space")
            }} />
          </div>

        </form>
        <div class="property-form-cta">
          <button type="submit" onClick={back}>
            previous
          </button>
          <button onClick={continu} type="submit">
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

export default ApartmentAmmenities;
