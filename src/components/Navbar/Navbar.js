import React from "react" 
import './navbar.css'
import logo from '../../images/logo.svg'
import SearchIcon from '../../images/search-normal.svg'

function NavBar() {

    return (
        <nav class="nav-bar">
        <div class="logo">
            <img src={logo} alt="" />
        </div>
        <ul class="nav-links">
        <li>
                    <a href="https://www.google.com">Home</a>
            </li>
            <li>
                    <a href="https://www.google.com">Agent</a>
            </li>
            <li>
                    <a href="https://www.google.com">Rent</a>
            </li>
            <li>
                    <a href="https://www.google.com">Rent Loan</a>
            </li>
            <li>
                    <a href="https://www.google.com">FAQ</a>
            </li>
        </ul>
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

export default NavBar;