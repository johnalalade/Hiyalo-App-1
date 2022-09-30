import React from "react" 
import './sign-up-navbar.css'
import logo from '../../images/logo.svg'
import SearchIcon from '../../images/search-normal.svg'
import { Link } from "react-router-dom"

function SignNavBar() {

    return (
        <nav class="nav-bar">
        <div class="logo">
            <img src={logo} alt="" />
        </div>
        
        <Link to="/marketplace" class="cta-btn">
            <img src={SearchIcon} alt="" />
            {/* <button type="button">Login</button> */}
        </Link>
        <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
    )
}

export default SignNavBar;