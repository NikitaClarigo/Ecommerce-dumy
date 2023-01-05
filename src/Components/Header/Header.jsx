import React from 'react';
import './Header.css';
import Logo from '../../Assets/logo.png';
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='main'>
            <div className='header'>
                <img src={Logo} className='logo' />
                <div>
                    <ul>
                        <li>
                            <NavLink to="/">Home
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
                    <CgProfile className='icon-size' />
                    <AiOutlineHeart className='icon-size' />
                    <HiOutlineShoppingBag className='icon-size' />
                </div>
            </div>
        </div>
    )
}
