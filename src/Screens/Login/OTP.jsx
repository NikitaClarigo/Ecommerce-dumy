import React, { useState } from 'react';
import Logo from '../../Assets/logo.png';
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import otp from '../../Assets/otp.png';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi";

export default function OTP() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
      setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
      setNavbarOpen(false)
    }
    const link = () => {
  
    }
    return (
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
            <div className="Login-main otp-main">
                <img src={otp} alt="something" width={"20%"} />
                <h4>Verify with OTP</h4>
                <div className="login">
                    <form>
                        <div className='UserInput'>
                            <input Type="Text" Id='Ist' Maxlength="1" Onkeyup="ClickEvent(This,'Sec')" />
                            <input Type="Text" Id="Sec" Maxlength="1" Onkeyup="ClickEvent(This,'Third')" />
                            <input Type="Text" Id="Third" Maxlength="1" Onkeyup="ClickEvent(This,'Fourth')" />
                            <input Type="Text" Id="Fourth" Maxlength="1" Onkeyup="ClickEvent(This,'Fifth')" />
                            <input Type="Text" Id="Fifth" Maxlength="1" />
                        </div>
                        <p className='text-center'><b>Resend OTP</b></p>
                        {/* <Link to={"/Dashboard"}>
                            <button>Continue</button>
                        </Link> */}
                        <p className='login-terms text-center'>Have trouble logging in? Get help </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
