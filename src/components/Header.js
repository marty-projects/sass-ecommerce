import { MdShoppingBasket, MdOutlineSearch } from "react-icons/md";
import React from "react";
import {Link} from "react-router-dom";
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
        <nav>
            <ul className="ul-items">
                <li className="li-items">
                    <Link to='/women'>Women</Link>
                    <Link to='/men'>Men</Link>
                    
                </li>
            </ul>
            <div className="logo">
                <h1>E-Shop</h1>
            </div>

            <div className="right">
                <div className="search">
                    <MdOutlineSearch className="search-icon"/>
                    <button className="sch-btn">Search</button>
                </div>
                <div className="right-buttons">
                    <button className="btn">
                        <Link to='/login'>
                        Log In
                        </Link>
                    </button>
                    <button className="btn">
                        <Link to='/sign-up'>
                            Sign Up
                        </Link>
                    </button>
                    <MdShoppingBasket className="basket"/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header