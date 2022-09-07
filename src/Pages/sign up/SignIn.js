import { useState} from 'react';
import './sign-up.css';
import SignNavBar from '../../components/sign up navbar/SignUpNavbar';

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const { userName, password } = formData;



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const onSubmit = (e) => {
    e.preventDefault()

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
          <form class="sign-up-form" onSubmit={onSubmit}>
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="enter your email"
              id="email"
              name="userName"
              value={userName}
              onChange={onChange}
            />

            <label for="password">Password</label>
            <input
              type="passworld"
              placeholder="enter your password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <div class="forgot-password-text">
              <p>
                forgot password? <a href="www.google.com">click here</a>{' '}
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

export default SignIn;
