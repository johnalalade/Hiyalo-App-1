import React from 'react';
import './another-sign-in.css';
import AnotherSignInForm from './AnotherSignInForm';
import AnotherSignInSide from './AnotherSignInSide';

const AnotherSignInContainer = () => {
  return (
    <section className="sign-up-page">
      <AnotherSignInForm />
      <AnotherSignInSide />
    </section>
  );
};

export default AnotherSignInContainer;
