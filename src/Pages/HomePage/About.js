import React from 'react';
import './about.css'
import aboutPattern from '../../images/about-pattern.svg'
const About = () => {
  return (
    <div>
         <section class="about-container">
        <main class="about-text">
            <h2>
                We make your living experience a dream come true by providing: financial solutions to help you secure your dream home, <span>
                 the structure and technology to help you manage your home conveniently.
               </span> 
            </h2>
        </main>

        <div class='about-cta'>
            <button id="secure">
                Secure Rent Loan
            </button>
            <button id="start">
                Get Started
            </button>
        </div>
        <div class="about-pattern">
            <img src={aboutPattern}alt="" />
        </div>
    </section>
    </div>
  )
}

export default About;
