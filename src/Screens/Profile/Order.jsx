import React from 'react';
import './Profile.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import profile from '../../Assets/profile.png';
import profile1 from '../../Assets/profile1.png';
import profile2 from '../../Assets/profile2.png';
import profile3 from '../../Assets/profile3.png';
import profile4 from '../../Assets/profile4.png';
import profile5 from '../../Assets/profile5.png';
import profile6 from '../../Assets/profile6.png';
import p1 from '../../Assets/p1.png';
import { GrFormNext } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import windian2 from '../../Assets/windian2.jpg';
import { GrFormAdd } from "react-icons/gr";



export default function Order() {
    return (
        <div>
            <div className='container order-container'>
                <h5 className='m-0'><b>Account</b></h5>
                <p className='username'>Dumy Dumy</p>
                <hr />
                <Tabs className="order-tab">
                    <TabList className="order-tab__tab-list">
                        <Tab className="order-tab__tab">
                            <p>Overview</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Orders & Returns</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Coupons</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Profile</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Addresses</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Terms of Use</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Privacy Policy</p>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='row profile-box'>
                                <div className='col-md-3'>
                                    <img src={profile} alt="something" width={"100%"} />
                                </div>
                                <div className='col-md-9 profile-mail'>
                                    <p>Dumy@gmail.com</p>
                                </div>
                                <button className='edit-profile-button'>Edit profile</button>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 other-box'>
                                    <div className='text-center'>
                                        <img src={profile1} alt="something" />
                                        <h6>Orders</h6>
                                        <p>Check Your Order Status</p>
                                    </div>
                                </div>
                                <div className='col-md-4 other-box ms-2'>
                                    <div className='text-center'>
                                        <img src={profile2} alt="something" />
                                        <h6>Collections & Wishlist</h6>
                                        <p>All Your Favourite Product Collection</p>
                                    </div>
                                </div>
                                <div className='col-md-4 other-box ms-2'>
                                    <div className='text-center'>
                                        <img src={profile3} alt="something" />
                                        <h6>Saved Cards</h6>
                                        <p>Save Your Cards For Faster Checkout</p>
                                    </div>
                                </div>
                                <div className='col-md-4 other-box'>
                                    <div className='text-center'>
                                        <img src={profile4} alt="something" />
                                        <h6>Addresses</h6>
                                        <p>Save addresses for Hasle-free Checkout</p>
                                    </div>
                                </div>
                                <div className='col-md-4 other-box ms-2'>
                                    <div className='text-center'>
                                        <img src={profile5} alt="something" />
                                        <h6>Coupons</h6>
                                        <p>Manage Coupons for additional discount</p>
                                    </div>
                                </div>
                                <div className='col-md-4 other-box ms-2'>
                                    <div className='text-center'>
                                        <img src={profile6} alt="something" />
                                        <h6>Profile Details</h6>
                                        <p>Change Your Profile Details and Password</p>
                                    </div>
                                </div>
                            </div>
                            <button className='Logout-button'>Logout</button>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div>
                                <button className='filter-button'>All</button>
                                <button className='filter-button'>Ordered</button>
                                <button className='filter-button'>Shipped</button>
                                <button className='filter-button'>Delivered</button>
                                <button className='filter-button'>Cancelled</button>
                                <button className='filter-button'>Exchange</button>
                                <button className='filter-button'>Return</button>
                                <button className='filter-button'>Others</button>
                            </div>
                            <div className='row order-box'>
                                <div className='col-md-6'>
                                    <p>25th September</p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <p>Order Id : 98147213891</p>
                                </div>
                                <hr />
                                <div className='col-md-2'>
                                    <img src={p1} alt="something" width="100%" />
                                </div>
                                <div className='col-md-9'>
                                    <h6>Ethluxis Men's Silk Blend Kurta, Churidar Pyjama With Nehru Jacket (ETH-TRI-FLR_Navy Blue_42)</h6>
                                    <GoPrimitiveDot className='deliver' /> Delivered on 29th Sepetember,2022<br />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiOutlineStar className='star' />
                                </div>
                                <div className='col-md-1'>
                                    <GrFormNext />
                                </div>
                                <hr className='mt-3' />
                            </div>
                            <div className='row order-box'>
                                <div className='col-md-6'>
                                    <p>5th November</p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <p>Order Id : 98147213891</p>
                                </div>
                                <hr />
                                <div className='col-md-2'>
                                    <img src={windian2} alt="something" width="100%" />
                                </div>
                                <div className='col-md-9'>
                                    <h6>Kaynat Women's Rayon Green Print Kurta & duptta Set Rayon (Size: S-3XL)</h6>
                                    <GoPrimitiveDot className='cancel' /> Cancelled<br />
                                </div>
                                <div className='col-md-1'>
                                    <GrFormNext />
                                </div>
                                <hr className='mt-3' />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='row coupon-box'>
                                <div className='col-md-2 coupon-discount'>150 <br /> OFF</div>
                                <div className='col-md-10'>
                                    <p>On minimun purchase of Rs.500</p>
                                    <p>Code : BUY2GET150</p>
                                </div>
                                <hr className='mt-3' />
                                <div className='col-md-6'>
                                    <p>Expiry : Jan 31, 2023 | 11:59:00 P.M</p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <p><b>Details</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="order-tab-panel-content">
                            <div className='row coupon-box'>
                                <div className='col-md-2 coupon-discount'>150 <br /> OFF</div>
                                <div className='col-md-10'>
                                    <p>On minimun purchase of Rs.500</p>
                                    <p>Code : BUY2GET150</p>
                                </div>
                                <hr className='mt-3' />
                                <div className='col-md-6'>
                                    <p>Expiry : Jan 31, 2023 | 11:59:00 P.M</p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <p><b>Details</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="order-tab-panel-content">
                            <div className='row coupon-box'>
                                <div className='col-md-2 coupon-discount'>150 <br /> OFF</div>
                                <div className='col-md-10'>
                                    <p>On minimun purchase of Rs.500</p>
                                    <p>Code : BUY2GET150</p>
                                </div>
                                <hr className='mt-3' />
                                <div className='col-md-6'>
                                    <p>Expiry : Jan 31, 2023 | 11:59:00 P.M</p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <p><b>Details</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="order-tab-panel-content">
                            <div className='row coupon-box'>
                                <div className='col-md-2 coupon-discount'>150 <br /> OFF</div>
                                <div className='col-md-10'>
                                    <p>On minimun purchase of Rs.500</p>
                                    <p>Code : BUY2GET150</p>
                                </div>
                                <hr className='mt-3' />
                                <div className='col-md-6'>
                                    <p>Expiry : Jan 31, 2023 | 11:59:00 P.M</p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <p><b>Details</b></p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='profile-tab-box'>
                                <h5><b>Profile Details</b></h5>
                                <hr />
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <p>FullName</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Dumy Dumy</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Mobile No.</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>9874563210</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Email ID</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Dumy@gmail.com</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Gender</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Female</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Date Of Birth</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>- not added -</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Location</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>- not added -</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Alternate Mobile</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>9874563217</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Hint Name</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>- not added -</p>
                                    </div>
                                </div>
                                <button className='Logout-button'>EDIT</button>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='row'>
                                <div className='col-md-6 text-start'>
                                    <h4>Saved Addresses</h4>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <button className='new-address-button'><GrFormAdd className='plus-icon' />Add New Address</button>
                                </div>
                            </div>
                            <p className='username'>Default Address</p>
                            <div className='address-box'>
                                <p className='username'><b>Dumy dumy</b></p><br />
                                <p className='username'>Airport Road</p>
                                <p className='username'>Indore</p>
                                <p className='username'>Indore - 452016</p>
                                <p className='username'>Madhya Pradesh</p><br />
                                <p className='username'>Mobile : 9874563210</p>
                                <hr />
                                <div className='row'>
                                    <div className='col-md-6 edit-button'>
                                        <button>EDIT</button>
                                    </div>
                                    <div className='col-md-6 remove-button'>
                                        <button>REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <h2>Terms of Use</h2>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <h2>Privacy policy</h2>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
