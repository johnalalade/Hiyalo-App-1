import { useState } from 'react';
import Axios from 'axios';
import './sign-up.css';
import SignNavBar from '../../components/sign up navbar/SignUpNavbar';

const SignUp = () => {
    const url = 'https://hiyalo-backend.herokuapp.com/agents/agent-gateway/register';
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
  });

  const { full_name, email, phone, password } = formData;

  const handle = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
        console.log(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
          formData,
        }).then((res) => {
          console.log(res);
    });
  };

  return (
    <section className="sign-up-body">
      <SignNavBar />
      <div class="sign-up-form-container">
        <header>
          <h3>Welcome To Hiyalo</h3>
          <p>
            Let’s get you started. Already have an account?{' '}
            <a href="www.google.com">Sign Up</a>
          </p>
        </header>
        <main>
          <form className="sign-up-form"
           onSubmit={(e) => submit(e)}>
           
           <label for='fullName'> Full Name </label>
            <input
              type="text"
              placeholder="John"
              id="fullName"
              name="full_name"
              value={full_name}
              onChange={(event) => handle(event)}
            />

            <label for="email">Email</label>
            <input
              type="email"
              placeholder="enter your email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => handle(event)}
            />

            <label for="phone number">Phone Number</label>
            <span class="phone-number">
              <input
                type="tel"
                placeholder="800000000"
                id="tel"
                name="phone"
                value={phone}
                onChange={(event) => handle(event)}
              />
              <p>+234 &nbsp; |</p>
            </span>

            <label for="password">Password</label>
            <input
              type="password"
              placeholder="enter your password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => handle(event)}
            />

            <div class="policy-checkbox">
              <input type="checkbox" id="policy-check" onChange={(event) => handle(event) } />
              <p>
                By creating an account you agree to the terms of and privacy
                policy?
              </p>
            </div>
            <button type="submit">Get Started</button>
          </form>

          <div class="or-container">
            <div></div>
            <p>OR</p>
            <div></div>
          </div>

          <div class="sign-up-google">
            <button type="submit">
              <iconify-icon
                class="google-icon"
                icon="flat-color-icons:google"
              ></iconify-icon>
              <p>Sign Up with Google</p>
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignUp;
