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
import Dropdown from 'react-bootstrap/Dropdown';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import axios from "axios";



export default function Login() {
  const [username, setloginName] = useState('')
  const [password, setpassword] = useState('')
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const link = () => {

  }

  const login=()=> {
    axios.post('https://dummyjson.com/auth/login',{
      username,
      password
    }).then(
      (res)=>{
        console.log(res)
      },
      err=>console.log(err)
    )
  }

  return (
    <div>
      <div className='main'>
        {/* Dextop & Laptop Header */}
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
        {/* Mobile & Tablet Header */}
        <nav className="navBar login-mobile-navbar">
          <button onClick={handleToggle}>{navbarOpen ? (
            <MdClose className='close-button' style={{ color: "black", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu className='hamburger-icon' style={{ color: "#7b7b7b" }} />
          )}</button>
          <NavLink
            to={link.path}
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            {link.text}
          </NavLink>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li>
              <NavLink to="/Dashboard" onClick={() => closeMenu()}>Home
              </NavLink>
            </li>
            <li >
              <NavLink to="/Men" onClick={() => closeMenu()}>Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/Women" onClick={() => closeMenu()}>Women
              </NavLink>
            </li>
            <li>
              <NavLink to="/Kids" onClick={() => closeMenu()}>Kids
              </NavLink>
            </li>
            <li>
              <NavLink to="/HomeandLiving" onClick={() => closeMenu()}>Home & Living
              </NavLink>
            </li>
            <li>
              <NavLink to="/Beauty" onClick={() => closeMenu()}>Beauty
              </NavLink>
            </li>
          </ul>
          <div>
            <form>
              <div className="form-group has-search">
                <BiSearch className='search' />
                <input type="search" placeholder="Search" aria-describedby="button-addon1" />
              </div>
            </form>
          </div>
          {/* <div className='icon'>
                    <Dropdown className='profile'>
                        <Dropdown.Toggle>
                            <CgProfile className='icon-size' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='profile-dropdown'>
                            <Dropdown.Item>
                                <h6><b>Welcome</b></h6>
                                <h6>To access account and manage orders</h6>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="Login">
                                    <button className='text-centre login-button'>Login / signup</button>
                                </Link>
                            </Dropdown.Item>
                            <hr className='hr1' />
                            <Dropdown.Item>
                                <Link to="Order">
                                    <p>Profile</p>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <Link to="Wishlist"><p>Wishlist</p></Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <p>Contact Us</p>
                            </Dropdown.Item>
                            <hr className='hr2' />
                            <Dropdown.Item href="#">
                                <p>Emart Credits</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <p>Coupons</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <p>Saved Cards</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <p>Saved VPA</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <p>Saved Addresses</p>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to={"./Wishlist"}>
                        <AiOutlineHeart className='icon-size' />
                    </Link>
                    <Link to={"./Cart"}>
                        <HiOutlineShoppingBag className='icon-size' />
                    </Link>
                </div> */}

        </nav>
        <div className="Login-main">
          <h4>Flat ₹500 OFF + Free Shipping</h4>
          <p>On First Order</p><br />
          <h5>Code : <span className="coupon-code">Emart005</span></h5>
          <div className="login">
            <h5>Login or Signup</h5>
            <form>
            {/* onChange={(e) => setloginName(e.target.value)} */}
              <input value={username} type="text" onInput={(e)=>setloginName(e.target.value)} id="phone" name="username" placeholder="Username" required />
              <input value={password} type="password" onInput={(e)=>setpassword(e.target.value)} id="phone" name="password" placeholder="Password" required />
              <p className='login-terms'>By Continuing, I agree to the terms of use & Privacy Policy.</p>

              {/* {!(loginName.length < 10 || loginName.length > 10) ? <Link to={"/OTP"}> */}
                <button type="button" onClick={login}>Continue</button>
               {/* <button type="button" onClick={() => alert('please enter valid Mobile No.')}>Continue</button> */}
              <p className='login-terms text-center'>Have trouble logging in? Get help </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
