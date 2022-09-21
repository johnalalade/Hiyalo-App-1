import React, { Component } from 'react';
import ApartmentBasicInfo from './ApartmentBasicInfo';
import ApartmentAmmenities from './ApartmentAmmenities';
import ApartmentAddress from './ApartmentAddress';

import ApartmentPaymentDetails from './ApartmentPaymentDetails';
import ApartmentGallery from './ApartmentGallery';

class AddNewApartment extends Component {
  state = {
    step: 1,
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
    // Handle fields change
    handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <ApartmentBasicInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}

          />
        );
      case 2:
        return (
          <ApartmentAmmenities
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}

          />
        );
      case 3:
        return (
          <ApartmentGallery
            nextStep={this.nextStep}
            prevStep={this.prevStep}

          />
        );
      case 4:
        return (
          <ApartmentAddress
            nextStep={this.nextStep}
            prevStep={this.prevStep}

          />
        );
      case 5:
        return (
          <ApartmentPaymentDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}

          />
        );
      // case 6:
      //   return <Success />;
      default:
        console.log('This is a multi-step form built with React.');
    }
  }
}

export default AddNewApartment;
