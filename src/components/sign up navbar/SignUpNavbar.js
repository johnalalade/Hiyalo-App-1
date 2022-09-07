import React from "react" 
import './sign-up-navbar.css'
import logo from '../../images/logo.svg'
import SearchIcon from '../../images/search-normal.svg'

function SignNavBar() {

    return (
        <nav class="nav-bar">
        <div class="logo">
            <img src={logo} alt="" />
        </div>
        
        <div class="cta-btn">
            <img src={SearchIcon} alt="" />
            <button type="button">Login</button>
        </div>
        <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
    )
}

export default SignNavBar;