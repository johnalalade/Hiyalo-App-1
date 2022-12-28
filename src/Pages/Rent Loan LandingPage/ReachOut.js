import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/contact-us">
          <button>Contact Us</button>
        </Link>
    </section>
  );
};

export default ReachOut;
