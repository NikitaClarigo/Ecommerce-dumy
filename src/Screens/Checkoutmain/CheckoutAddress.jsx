import React from 'react';
import { Link } from 'react-router-dom';
import './Checkoutmain.css';
import footerbank1 from '../../Assets/footer-bank1.png';
import footerbank2 from '../../Assets/footer-bank2.png';
import footerbank3 from '../../Assets/footer-bank3.png';
import footerbank4 from '../../Assets/footer-bank4.png';
import footerbank5 from '../../Assets/footer-bank5.png';
import footerbank6 from '../../Assets/footer-bank6.png';
import footerbank7 from '../../Assets/footer-bank7.png';
import footerbank8 from '../../Assets/footer-bank8.png';
import footerbank9 from '../../Assets/footer-bank9.png';
import footerbank10 from '../../Assets/footer-bank10.png';

export default function CheckoutAddress() {
    return (
        <div className='container'>
            {/* <h2 className='text-center'>Bag</h2>
            <hr /> */}
            <div className='row'>
                <div className='col-md-7'>
                    <div className='checkoutmain-col row'>
                        <div className='col-md-12 address-page'>
                            <p className='form-heading'><b>CONTACT DETAILS</b></p>
                            <form>
                                <input type="text" placeholder="Name*" required />
                                <input type="tel" placeholder="Mobile No*" required />
                            </form>
                            <p className='form-heading'><b>ADDRESS</b></p>
                            <form>
                                <input type="tel" placeholder="Pin Code*" required />
                                <input type="text" placeholder="Address (House No, Building, Street, Area)*" row="3" required />
                                <input type="text" placeholder="Locality/Town*" required />
                            </form>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="text" placeholder="City/District*" required />
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" placeholder="State*" required />
                                </div>
                            </div>
                            <Link to={"/CheckoutAddress1"}>
                                <button className='add-address-button'>Add Address</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-4 price-col'>
                    <div className='row'>
                        <p>PRICE DETAILS (1 Item)</p>
                        <table className='p-text-small'>
                            <tbody>
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
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td><b>Total Amount</b></td>
                                    <td className='float-end'><b>₹619</b></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <div className='footer-payment'>
                <img src={footerbank1} alt="something" width="70" height="40" />
                <img src={footerbank2} alt="something" width="70" height="40" />
                <img src={footerbank3} alt="something" width="70" height="40" />
                <img src={footerbank4} alt="something" width="70" height="40" />
                <img src={footerbank5} alt="something" width="70" height="40" />
                <img src={footerbank6} alt="something" width="70" height="40" />
                <img src={footerbank7} alt="something" width="70" height="40" />
                <img src={footerbank8} alt="something" width="70" height="40" />
                <img src={footerbank9} alt="something" width="70" height="40" />
                <img src={footerbank10} alt="something" width="70" height="40" />
            </div>
        </div >
    )
}
