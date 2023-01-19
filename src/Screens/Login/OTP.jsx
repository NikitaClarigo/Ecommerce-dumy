import React from 'react';
import Logo from '../../Assets/logo.png';
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import otp from '../../Assets/otp.png';

export default function OTP() {
    return (
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
