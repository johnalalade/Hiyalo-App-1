import './about.css'
import aboutPattern from '../../images/about-pattern.svg'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
         <section class="about-container">
        <main class="about-text">
            <h2>
                There's an easy way to secure your dream property. <span>
                 At Hiyalo, we automate the process of finding you a perfect space, making it convenient, stress-free and affordable.
               </span> 
            </h2>
        </main>

        <div class='about-cta'>
            {/* <button id="secure">
                Secure Rent Loan
            </button> */}
            <Link to='/sign-up-agent' className='button' id="start">
                Get Started
            </Link>
        </div>
        <div class="about-pattern">
            <img src={aboutPattern}alt="" />
        </div>
    </section>
    </div>
  )
}

export default About;
