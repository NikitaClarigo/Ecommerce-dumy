import React from 'react';
import login from './Login.css';
import Logo from '../../Assets/logo.png';
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';



export default function Login() {
  return (
    <div>
      <div className='main'>
        <div className='header login-header'>
          <img src={Logo} className='logo' />
          <div>
            <ul>
              <li>
                <NavLink to="/Dashboard">Home
                </NavLink>
              </li>
              <li >
                <NavLink to="/Men">Men
                </NavLink>
              </li>
              <li>
                <NavLink to="/Women">Women
                </NavLink>
              </li>
              <li>
                <NavLink to="/Kids">Kids
                </NavLink>
              </li>
              <li>
                <NavLink to="/HomeandLiving">Home & Living
                </NavLink>
              </li>
              <li>
                <NavLink to="/Beauty">Beauty
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <form>
              <div className="form-group has-search">
                <BiSearch className='search' />
                <input type="search" placeholder="Search" aria-describedby="button-addon1" />
              </div>
            </form>
          </div>
          <div className='icon'>
            <AiOutlineHeart className='icon-size' />
            <HiOutlineShoppingBag className='icon-size' />
          </div>
        </div>
        <div className="Login-main">
          <h4>Flat ₹500 OFF + Free Shipping</h4>
          <p>On First Order</p><br />
          <h5>Code : <span className="coupon-code">Emart005</span></h5>
          <div className="login">
            <h5>Login or Signup</h5>
            <form>
              <input type="tel" id="phone" name="phone" placeholder="Mobile No." pattern="[0-9]{3}[0-9]{2}[0-9]{3}" required />
              <p className='login-terms'>By Continuing, I agree to the terms of use & Privacy Policy.</p>
              <button>Continue</button>
              <p className='login-terms text-center'>Have trouble logging in? Get help </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
