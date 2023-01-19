/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Footer.css';
import playStore from '../../Assets/play-store.png';
import appStore from '../../Assets/ap-store.png';
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div className='row footer'>
                <div className='col-md-3'>
                    <p className='footer-head'>Online Shopping</p>
                    <ul>
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
                <div className='col-md-3'>
                    <p className='footer-head'>Customer Policies</p>
                    <ul>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            FAQ
                        </li>
                        <li>
                            T&C
                        </li>
                        <li>
                            Terms of Use
                        </li>
                        <li>
                            Track Orders
                        </li>
                        <li>
                            Shipping
                        </li>
                        <li>
                            Cancellation
                        </li>
                        <li>
                            Returns
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <p className='footer-head'>Useful links</p>
                    <ul>
                        <li>
                            Blog
                        </li>
                        <li>
                            careers
                        </li>
                        <li>
                            Site Map
                        </li>
                        <li>
                            Coorporate Information
                        </li>
                        <li>
                            whitehat
                        </li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <p className='footer-head'>Experience emart app on mobile</p>
                    <img src={playStore} className="store" alt="something" />
                    <img src={appStore} className="store" alt="something" />
                    <div className='social-icon'>
                        <FaFacebook className='footer-icon' />
                        <BsTwitter className='footer-icon' />
                        <BsYoutube className='footer-icon' />
                        <AiFillInstagram className='footer-icon' />
                    </div>
                </div>
                <hr />
                <p className='text-center'>© 2023 www.emart.com. All rights reserved.</p>
            </div>
        </div >
    )
}
