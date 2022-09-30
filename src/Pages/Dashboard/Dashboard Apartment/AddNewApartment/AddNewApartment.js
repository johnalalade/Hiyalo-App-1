import React, { useState } from 'react';
import ApartmentBasicInfo from './ApartmentBasicInfo';
import ApartmentAmmenities from './ApartmentAmmenities';
import ApartmentAddress from './ApartmentAddress';
// import { useNavigate } from 'react-router-dom';
import ApartmentPaymentDetails from './ApartmentPaymentDetails';
import ApartmentGallery from './ApartmentGallery';
import axios from 'axios';
import ApartmentAddedModal from './ApartmentAddedModal';

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };


const AddNewApartment = () => {
  const [houseData, setHousesData] = useState({

    property_type: "",
    house_type: "",
    description: "",
    ammenities: [],
    address: "",
    state: "",
    city: "",
    longitude: "",
    latitude: "",
    annual_fee: "0",
    agency_fee: "0",
    caution_fee: "0",
    stamp_fee: "0",
    available_payment_scheme: "",
    available_payment_duration: "",
    agent_id: localStorage.getItem("id"),
    status: "vacant",
    images: []
  })
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  // const navigate = useNavigate();

  const {
    property_type,
    house_type,
    description,
    ammenities,
    address,
    state,
    city,
    longitude,
    latitude,
    annual_fee,
    agency_fee,
    caution_fee,
    stamp_fee,
    // available_payment_scheme,
    // available_payment_duration,
    status,
    agent_id,
    images
  } = houseData

  const nextStep = () => {

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle fields change
  const handleChange = (e) => {
    setHousesData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(e.target.value)
  };

  const finish = () => {
    setLoading(true)
    if (images.length < 4) {
      setLoading(false)
      setStep(3)
      return false
    }
    if (property_type === "" || house_type === "" || description === "") {
      setLoading(false)
      setStep(1)
      return false
    }
    if (ammenities.length === 0) {
      setLoading(false)
      setStep(2)
      return false
    }
    if (address === "" || state === "" || city === "") {
      setLoading(false)
      setStep(4)
      return false
    }
    if (annual_fee === "0" || agency_fee === "0") {
      setLoading(false)
      setStep(5)
      return false
    }

    console.log(houseData)

    let dat = new FormData()

    dat.append("property_type", property_type)
    dat.append("house_type", house_type)
    dat.append("description", description)
    for (let i = 0; i < ammenities.length; i++) {
    dat.append("ammenities[]", JSON.stringify(ammenities[i]))
    // dat.append("ammenities[number]", ammenities[i].number)
  }
    dat.append("address", address)
    dat.append("state", state)
    dat.append("city", city)
    dat.append("annual_fee", annual_fee)
    dat.append("agency_fee", agency_fee)
    dat.append("caution_fee", caution_fee)
    dat.append("stamp_fee", stamp_fee)
    dat.append("agent_id", agent_id)
    dat.append("status", status)

    for (let i = 0; i < images.length; i++) {
      dat.append("files", images[i])
    }
    for (let i = 0; i < ammenities.length; i++) {
      console.log(ammenities[i])
    }

    console.log(dat)

    axios.post('https://hiyalo-backend.herokuapp.com/houses/house-gateway/register', dat, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(res => {
        console.log(res.data)
        if (res.data.message === "success") {
          localStorage.setItem("house_id", res.data.house._id)
          setStep(6)
            // navigate('/apartments');
        }
        setLoading(false)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })

  }




  switch (step) {
    case 1:
      return (
        <ApartmentBasicInfo
          nextStep={nextStep}
          handleChange={handleChange}
          property_type={property_type}
          house_type={house_type}
          description={description}
          finish={finish}
          agent_id={agent_id}
          
        />
      );
    case 2:
      return (
        <ApartmentAmmenities
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          ammenities={ammenities}
          finish={finish}
          agent_id={agent_id}

        />
      );
    case 3:
      return (
        <ApartmentGallery
          nextStep={nextStep}
          prevStep={prevStep}
          images={images}
          handleChange={handleChange}
          finish={finish}
          agent_id={agent_id}

        />
      );
    case 4:
      return (
        <ApartmentAddress
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          address={address}
          state={state}
          city={city}
          longitude={longitude}
          latitude={latitude}
          finish={finish}
          agent_id={agent_id}

        />
      );
    case 5:
      return (
        <ApartmentPaymentDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          annual_fee={annual_fee}
          agency_fee={agency_fee}
          caution_fee={caution_fee}
          stamp_fee={stamp_fee}
          finish={finish}
          agent_id={agent_id}
          loading={loading}
        />
      );
    case 6:
      return <ApartmentAddedModal />;
    default:
      console.log('This is a multi-step form built with React.');
  }
}

export default AddNewApartment;
