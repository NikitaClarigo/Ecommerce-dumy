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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function CheckoutAddress1() {
  return (
    <div className='container checkout-address1'>
      {/* <h2 className='text-center'>Bag</h2>
            <hr /> */}
      <div className='row'>
        <div className='col-md-7'>
          <div className='checkoutmain-col row'>
            <div className='col-md-12 address-page'>
              <p className='form-heading'><b>ADDRESS</b></p>
              <div className='checkoutmain-col address-col'>
                <p>Adam Johnson</p>
                <p>403 Oakland Ave Street, A city, Florida, 32104,</p>
                <p>United states of America</p>
              </div>
            </div>
            <div className='col-md-12 payment-method'>
              <p className='form-heading'><b>PAYMENT METHOD</b></p>
              <div className='checkoutmain-col'>
                <div className='row d-flex align-items-center'>
                  <div className='col-md-2'>
                    <img src={footerbank2} alt="something" width="70" height="40" />
                  </div>
                  <div className='col-md-8'>
                    <h6>Visa Payment</h6>
                  </div>
                  <div className='col-md-2'>
                    <input type="radio" />
                  </div>
                </div>
              </div>
              <div className='checkoutmain-col'>
                <div className='row d-flex align-items-center'>
                  <div className='col-md-2'>
                    <img src={footerbank9} alt="something" width="70" height="40" />
                  </div>
                  <div className='col-md-8'>
                    <h6>PayPal</h6>
                  </div>
                  <div className='col-md-2'>
                    <input type="radio" />
                  </div>
                </div>
              </div>
              <div className='checkoutmain-col'>
                <div className='row d-flex align-items-center'>
                  <div className='col-md-2'>
                    <img src={footerbank3} alt="something" width="70" height="40" />
                  </div>
                  <div className='col-md-8'>
                    <h6>Master Card</h6>
                  </div>
                  <div className='col-md-2'>
                    <input type="radio" />
                  </div>
                </div>
              </div>
              <Link to={""}>
                <button className='add-address-button'>BUY NOW</button>
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
    </div >
  )
}
