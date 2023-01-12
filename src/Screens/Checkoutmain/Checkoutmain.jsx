import React from 'react';
import './Checkoutmain.css';
import { TbDiscount2 } from "react-icons/tb";
import { HiOutlineBookmark } from "react-icons/hi";
import { GrFormNext } from "react-icons/gr";
import { IoMdPricetag } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import indian1 from '../../Assets/indian1.jpg';

export default function Checkoutmain() {
    return (
        <div className='container'>
            {/* <h2 className='text-center'>Bag</h2>
            <hr /> */}
            <div className='row'>
                <div className='col-md-8'>
                    <div className='checkoutmain-col row'>
                        <div className='col-md-9 d-flex align-items-center'>
                            <b>Check Delivery time & services</b>
                        </div>
                        <div className='col-md-3'>
                            <button className='float-end pin-button'>Enter Pin Code</button>
                        </div>
                    </div>
                    <div className='checkoutmain-col row'>
                        <div className='col-md-1'>
                            <TbDiscount2 className='discount-icon' />
                        </div>
                        <div className='col-md-11'>
                            <b>Available Offers</b>
                        </div>
                        <ul className='offer-list'>
                            <li>15% Instant Discount on OneCard Credit Cards on a min spend of Rs 2,000. TCA</li>
                            <li>Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1,000. TCA</li>
                            <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
                            <li>10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA</li>
                        </ul>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <input type="checkbox" checked /><span><b>  1/1 ITEMS SELECTED </b></span>
                        </div>
                        <div className='col-md-4'>
                            <span className='inner-content text-right'> Remove | </span>
                            <span className='inner-content'> Move to Wishlist</span>
                        </div>
                    </div>
                    <div className='checkoutmain-col row'>
                        <div className='col-md-1 d-flex left'>
                            <input type="checkbox" checked />
                        </div>
                        <div className='col-md-3'>
                            <img src={indian1} className="cart-product" alt="something" />
                        </div>
                        <div className='col-md-8'>
                            <p className='product-des'>Ethluxis Men's Silk Blend Kurta, Churidar Pyjama With Nehru Jacket (ETH-TRI-FLR_Navy Blue_42)</p>
                            <p className='inner-content text-danger'>Only 3 left in stock</p>
                            <p className='inner-content'>Eligible for FREE Shipping</p>
                            <p className='inner-content'><b>Size : 42 </b></p>
                            <p className='inner-content'><b>Quantity : 1 </b></p>
                        </div>
                    </div>
                    <Link to={"/Wishlist"}>
                        <div className='checkoutmain-col row'>
                            <div className='col-md-11 d-flex align-items-center'>
                                <b><HiOutlineBookmark className='wishlist-icon' /> Add more from Wishlist</b>
                            </div>
                            <div className='col-md-1'>
                                <GrFormNext className='next-icon' />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-md-4'>
                    <div className='right-col row'>
                        <p>COUPONS</p>
                        <div className='col-md-2'>
                            <IoMdPricetag className='discount-icon' />
                        </div>
                        <div className='col-md-8'>
                            <b>Apply Coupons</b>
                        </div>
                        <div className='col-md-2'>
                            <button className='float-end apply-button'>Apply</button>
                        </div>
                        <p>PRICE DETAILS (1 Item)</p>
                        <table className='p-text-small'>
                            <tr>
                                <td>Total MRP</td>
                                <td className='float-end'>₹999</td>
                            </tr>
                            <tr>
                                <td>Discount on MRP</td>
                                <td className='float-end text-success'>₹-380</td>
                            </tr>
                            <tr>
                                <td>Coupon Discount</td>
                                <td className='float-end text-danger'>Apply Coupon</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><b>Total Amount</b></td>
                                <td className='float-end'><b>₹619</b></td>
                            </tr>
                        </table>
                        <Link to={"/CheckoutAddress"}>
                            <button className='place-order-button'>PLACE ORDER</button>
                        </Link>

                    </div>
                    
                </div>
            </div>
        </div >
    )
}
