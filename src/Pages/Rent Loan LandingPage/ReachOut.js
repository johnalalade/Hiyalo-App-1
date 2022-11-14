import React from 'react';
import './rent-loan.css';
import ReachOutBg from '../../images/reachout.svg';
const ReachOut = () => {
  return (
    <section className="reach-out-container">
      <img src={ReachOutBg} alt="" />
      <img src={ReachOutBg} alt="" />
      <img src={ReachOutBg} alt="" />
      <img src={ReachOutBg} alt="" />

      <p>Reach Out To Us</p>
      <h3>Do You Want To Make More Enquires</h3>
      <button>Contact Us</button>
    </section>
  );
};

export default ReachOut;
