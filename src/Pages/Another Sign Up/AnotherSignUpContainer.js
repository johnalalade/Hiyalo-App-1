import React from 'react';
import AnotherSignUpForm from './AnotherSignUpForm';
import SignUpSide from './SignUpSide';
import './another-sign-up.css';
const AnotherSignUpContainer = () => {
  return (
    <section className="sign-up-page">
      <AnotherSignUpForm />
      <SignUpSide />
    </section>
  );
};

export default AnotherSignUpContainer;
