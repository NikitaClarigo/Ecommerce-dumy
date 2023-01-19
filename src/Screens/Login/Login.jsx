/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import './Login.css';
import Logo from '../../Assets/logo.png';
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';



export default function Login() {
  const [loginName, setloginName] = useState('')

  return (
    <div>
      <div className='main'>
        <div className='header login-header'>
          <Link to={"/Dashboard"} className='logo-container'>
            <img src={Logo} className='logo' alt="something" />
          </Link>
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
        </div>
        <div className="Login-main">
          <h4>Flat ₹500 OFF + Free Shipping</h4>
          <p>On First Order</p><br />
          <h5>Code : <span className="coupon-code">Emart005</span></h5>
          <div className="login">
            <h5>Login or Signup</h5>
            <form>
              <input value={loginName} onChange={(e) => setloginName(e.target.value)} type="tel" id="phone" name="phone" placeholder="Mobile No." pattern="[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}" required />
              <p className='login-terms'>By Continuing, I agree to the terms of use & Privacy Policy.</p>
             
              {!(loginName.length < 10||loginName.length>10) ?<Link to={"/OTP"}>
                <button type="button">Continue</button>
                </Link>:<button type="button">Continue</button>}
              <p className='login-terms text-center'>Have trouble logging in? Get help </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
