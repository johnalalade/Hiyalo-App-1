import { useState} from 'react';
import './sign-up.css';
import SignNavBar from '../../components/sign up navbar/SignUpNavbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const { userName, password } = formData;
  const url = 'https://hiyalo-backend.herokuapp.com/agents/agent-gateway/login';


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const submit = (e) => {
    e.preventDefault();

    console.log(formData)
    axios.post(url, formData).then((res) => {
          console.log(res);
          localStorage.setItem("id", res.data.id)
          navigate('/dashboard');
    });
  };

  const navigate = useNavigate();
  return (
    <section className="sign-up-body">
      <SignNavBar />
      <div class="sign-up-form-container">
        <header>
          <h3>Welcome To Hiyalo</h3>
          <p>
            Let’s get you in. Don't have an account?{' '}
            <Link to="/sign-up-agent">Sign Up</Link>
          </p>
        </header>
        <main>
          <form class="sign-up-form">
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
              type="password"
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
            <button type="submit" onClick={submit} >Get Started</button>
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
