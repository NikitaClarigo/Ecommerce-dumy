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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Your Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <input className='w-100' type={"file"} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="First Name" />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Last Name" />
                        </div>
                        <div className='col-md-12'>
                            <input className='w-100' type={"email"} placeholder="Email Address" />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Gender" />
                        </div>
                        <div className='col-md-6'>
                            <input type={"tel"} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Mobile No." />
                        </div>
                        <div className='col-md-6'>
                            <input className='w-100' type={"date"} placeholder="DOB" />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Location" />
                        </div>
                        <div className='col-md-12'>
                            <input className='tel w-100' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Alternate Mobile No." />
                        </div>
                        <input type="submit"></input>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}
function Termsmodal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Terms & Conditions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>This offer is valid until stocks last or till the offer ends.</li>
                    <li>Final Price is inclusive of the offer.</li>
                    <li>Offer is applicable on select products and brands.
                        In the event the user returns any/all products in the order placed during the Offer Period, thereby not maintaining the minimum purchase value, as required to avail the Offer,
                        he/she shall not be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer shall stand deducted from any refund(s) processed for the returned
                        product(s).</li>
                </ul>
            </Modal.Body>
        </Modal>
    );
}
function Addadressmodal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Address
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='row'>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="First Name" required />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Last Name" required />
                        </div>
                        <div className='col-md-12'>
                            <input className='w-100' type={"tel"} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Mobile No." required />
                        </div>
                        <div className='col-md-12'>
                            <input className='text w-100' placeholder="Address (House No,Building,Street,Area)" required />
                        </div>
                        <div className='col-md-6'>
                            <input name="pincode" type="text" inputmode="numeric" maxlength="4" placeholder='Pincode' required />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Locality/Town" required />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="City" required />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="District" required />
                        </div>
                        <div className='col-md-12'>
                            <select name="type" className='w-100' required>
                                <option value="" disabled selected hidden>Type Of Address</option>
                                <option value="coffee">Home</option>
                                <option value="coffee">Office</option>
                            </select>
                        </div>
                        <input type="submit"></input>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}
export default function Order() {
    const [modalShow, setModalShow] = React.useState(false);
    
    const switchTab = (id) => {
        const tab = document.getElementById('tab:r1:1')
        // console.log(tab?.click,'this is the tab click')
        tab.click()
    }

    return (
        <div>
            <div className='container order-container'>
                <Tabs className="order-tab">
                    <TabList className="order-tab__tab-list">
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={profile} className="profile-round" alt="something" />
                            </div>
                            <div className='col-md-9'>
                                <h5 className='m-0'><b>Account</b></h5>
                                <p className='username'>Olive Yew</p>
                            </div>
                        </div>
                        <hr />
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
                            <p>Saved Cards</p>
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
                                    <p><b>Olive Yew</b></p>
                                    <p>olive012@gmail.com</p>
                                    <p>Female</p>
                                    <p>9876543210</p>
                                    <p><b>DOB : </b>8-03-1999</p>
                                    <p>Indore</p>
                                    <p><b>Alternate Mobile No. :</b>9876543211</p>
                                </div>
                                <button className='edit-profile-button' onClick={() => setModalShow(true)}>Edit profile</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                            <div className='container tb-box'>
                                <div className='row'>
                                    <div className='col-md-4 other-box' onClick={() => switchTab('orderTab')}>
                                        <div className='text-center'>
                                            <img src={profile1} alt="something" />
                                            <h6>Orders</h6>
                                            <p>Check Your Order Status</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4  other-box'>
                                        <Link to={"/Wishlist"}>
                                            <div className='text-center'>
                                                <img src={profile2} alt="something" />
                                                <h6>Collections & Wishlist</h6>
                                                <p>All Your Favourite Product Collection</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 other-box' onClick={() => switchTab('orderTab')}>
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
                                    <div className='col-md-4 other-box'>
                                        <div className='text-center'>
                                            <img src={profile5} alt="something" />
                                            <h6>Coupons</h6>
                                            <p>Manage Coupons for additional discount</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 other-box'>
                                        <div className='text-center'>
                                            <img src={profile6} alt="something" />
                                            <h6>Profile Details</h6>
                                            <p>Change Your Profile Details and Password</p>
                                        </div>
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
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='row coupon-box'>
                                <div className="coupon_area col-md-6">
                                    <div className="coupon_content">
                                        <h2>10% Discount</h2>
                                        <h3>on your fist order</h3>
                                        <h3 className="code_text">code</h3>
                                        <h3 className="code">eMartoffer</h3><br></br>
                                        <p onClick={() => setModalShow(true)}>View T&C</p>
                                        <Termsmodal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                                <div className="coupon_area col-md-6">
                                    <div className="coupon_content">
                                        <h2>10% Discount</h2>
                                        <h3>on your fist order</h3>
                                        <h3 className="code_text">code</h3>
                                        <h3 className="code">eMartoffer</h3>
                                        <p onClick={() => setModalShow(true)}>View T&C</p>
                                        <Termsmodal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                                <div className="coupon_area col-md-6">
                                    <div className="coupon_content">
                                        <h2>10% Discount</h2>
                                        <h3>on your fist order</h3>
                                        <h3 className="code_text">code</h3>
                                        <h3 className="code">eMartoffer</h3><br></br>
                                        <p onClick={() => setModalShow(true)}>View T&C</p>
                                        <Termsmodal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                                <div className="coupon_area col-md-6">
                                    <div className="coupon_content">
                                        <h2>10% Discount</h2>
                                        <h3>on your fist order</h3>
                                        <h3 className="code_text">code</h3>
                                        <h3 className="code">eMartoffer</h3>
                                        <p onClick={() => setModalShow(true)}>View T&C</p>
                                        <Termsmodal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='row'>
                                <div className='col-md-6 text-start'>
                                    <h4>Saved Cards</h4>
                                </div>
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
                                    <button className='new-address-button' onClick={() => setModalShow(true)}><GrFormAdd className='plus-icon' />Add New Address</button>
                                    <Addadressmodal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            </div>
                            <p className='username'>Default Address</p>
                            <div className='row add'>
                                <div className='address-box col-md-6'>
                                    <button className='cat-button'>Home</button>
                                    <p className='username'><b>Dumy dumy</b></p><br />
                                    <p className='username'>Airport Road</p>
                                    <p className='username'>Indore</p>
                                    <p className='username'>Indore - 452016</p>
                                    <p className='username'>Madhya Pradesh</p><br />
                                    <p className='username'>Mobile : 9874563210</p>
                                    <div className='row editbutton'>
                                        <FaEdit />
                                    </div>
                                </div>
                                <div className='address-box col-md-6'>
                                    <button className='cat-button'>Office</button>
                                    <p className='username'><b>Dumy dumy</b></p><br />
                                    <p className='username'>Airport Road</p>
                                    <p className='username'>Indore</p>
                                    <p className='username'>Indore - 452016</p>
                                    <p className='username'>Madhya Pradesh</p><br />
                                    <p className='username'>Mobile : 9874563210</p>
                                    <div className='row editbutton'>
                                        <FaEdit />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content terms">
                            <h2 className='text-center'>emart Terms of Use</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet pellentesque ipsum, maximus sagittis ex iaculis et. Praesent nibh velit, ultrices vel malesuada eu, vehicula nec lectus. Sed ut mi in lacus vehicula dignissim. Sed quis augue ut massa cursus scelerisque. Curabitur id orci ut massa tempus pellentesque ut ac velit. Aliquam faucibus lorem ac ante cursus condimentum. Donec pretium elit dolor, at ornare libero porta et. Pellentesque lacinia sapien in mi convallis, non varius augue tincidunt. Duis convallis elit ac sem pretium, vitae rhoncus enim mattis. Praesent non rhoncus nulla, eu venenatis sem. Sed posuere accumsan ex quis accumsan. Donec pellentesque fermentum leo et pharetra.
                            </p>
                            <p>
                            Vivamus lectus sapien, venenatis at bibendum nec, sodales ac nulla. Suspendisse ornare nisi eget turpis ullamcorper, vel laoreet neque bibendum. In augue nisl, pellentesque vel vehicula a, tristique vitae nisl. Donec faucibus tortor at finibus convallis. Quisque ac erat a lectus consequat porta ac quis eros. Nulla in elit eleifend, auctor est eu, ullamcorper nulla. Duis nec nibh commodo, rhoncus leo quis, egestas magna. Maecenas fermentum, velit ac egestas tincidunt, risus nunc varius erat, eget euismod mauris felis a turpis.
                            </p>
                            <p>
                            Fusce arcu velit, molestie eget ante eget, ornare imperdiet nulla. Integer ut nunc nisl. Maecenas at sagittis mauris. Nunc volutpat aliquet arcu, eget congue enim posuere non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sollicitudin nec felis id egestas. Nullam et metus vulputate diam ornare commodo. Nulla vitae purus nunc. Nunc ut elementum risus. Praesent ullamcorper lobortis massa, vitae sagittis dolor malesuada accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non magna risus.
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="order-tab-panel-content terms">
                            <h2 className='text-center'>emart Privacy policy</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet pellentesque ipsum, maximus sagittis ex iaculis et. Praesent nibh velit, ultrices vel malesuada eu, vehicula nec lectus. Sed ut mi in lacus vehicula dignissim. Sed quis augue ut massa cursus scelerisque. Curabitur id orci ut massa tempus pellentesque ut ac velit. Aliquam faucibus lorem ac ante cursus condimentum. Donec pretium elit dolor, at ornare libero porta et. Pellentesque lacinia sapien in mi convallis, non varius augue tincidunt. Duis convallis elit ac sem pretium, vitae rhoncus enim mattis. Praesent non rhoncus nulla, eu venenatis sem. Sed posuere accumsan ex quis accumsan. Donec pellentesque fermentum leo et pharetra.
                            </p>
                            <p>
                            Vivamus lectus sapien, venenatis at bibendum nec, sodales ac nulla. Suspendisse ornare nisi eget turpis ullamcorper, vel laoreet neque bibendum. In augue nisl, pellentesque vel vehicula a, tristique vitae nisl. Donec faucibus tortor at finibus convallis. Quisque ac erat a lectus consequat porta ac quis eros. Nulla in elit eleifend, auctor est eu, ullamcorper nulla. Duis nec nibh commodo, rhoncus leo quis, egestas magna. Maecenas fermentum, velit ac egestas tincidunt, risus nunc varius erat, eget euismod mauris felis a turpis.
                            </p>
                            <p>
                            Fusce arcu velit, molestie eget ante eget, ornare imperdiet nulla. Integer ut nunc nisl. Maecenas at sagittis mauris. Nunc volutpat aliquet arcu, eget congue enim posuere non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sollicitudin nec felis id egestas. Nullam et metus vulputate diam ornare commodo. Nulla vitae purus nunc. Nunc ut elementum risus. Praesent ullamcorper lobortis massa, vitae sagittis dolor malesuada accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non magna risus.
                            </p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
