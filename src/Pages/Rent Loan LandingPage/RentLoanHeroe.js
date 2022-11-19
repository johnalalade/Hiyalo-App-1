import React from 'react';
import './rent-loan.css';
import NavBar from '../../components/Navbar/Navbar';
import Heroe1 from '../../images/rent-loan-heroe-3.jpg';
import Heroe2 from '../../images/rent-loan-heroe-2.jpg';
import CircleSvg from '../../images/Big Circle.svg';

const RentLoanHeroe = () => {
  return (
    <section className="rent-loan-heroe">
      <NavBar />

      <main className="rent-loan-heroe-content">
        <div className="rent-loan-heroe-img">
          <img src={Heroe1} alt="" />
        </div>

        <div className="rent-loan-heroe-img">
          <img src={Heroe2} alt="" />
        </div>

        <div className="rent-loan-heroe-text">
          <span id="money-cont-1">
            <span id="money-cont-2">&#8358;</span>
          </span>
          <img className="circle-img" src={CircleSvg} alt="" />
          <h2>
            Hiyalo Rent Now Pay <span>Later</span>Is Here!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eget vel risus ante morbi
            urna. Feugiat nulla elementum vitae dolor tellus nunc volutpat
            lorem. Blandit leo quisque tristique risus enim molestie at
            scelerisque. Non ornare orci.
          </p>

          <button>
            <p>Proceed</p>
            <span className="proceed-arrow">
              <iconify-icon icon="akar-icons:arrow-right"></iconify-icon>
            </span>
          </button>
        </div>
      </main>
    </section>
  );
};

export default RentLoanHeroe;
