/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Header.css';
import Logo from '../../Assets/logo.png';
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
    return (
        <div className='main'>
            <div className='header'>
                <img src={Logo} className='logo' alt="something" />
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
                                <Link to="Login" className='text-centre login-button'>Login / signup</Link>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="#">
                                <p>Orders</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <p>Wishlist</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <p>Gift Cards</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <p>Contact Us</p>
                                <hr />
                            </Dropdown.Item>
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
                </div>
            </div>
        </div>
    )
}
