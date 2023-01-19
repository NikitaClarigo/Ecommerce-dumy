/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Main.css';
import banner from '../../Assets/header1.png';
import cat1 from '../../Assets/cat1.jpg';
import cat2 from '../../Assets/cat2.jpg';
import cat3 from '../../Assets/cat3.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import p1 from '../../Assets/p1.png';
import p2 from '../../Assets/p2.png';
import p3 from '../../Assets/p3.png';
import p4 from '../../Assets/p4.png';
import p5 from '../../Assets/p5.png';
import p6 from '../../Assets/p6.png';
import Background from '../../Assets/best-product-bg.png';
import { Link } from 'react-router-dom';


export default function Main() {
    return (
        <div>
            <img src={banner} className='banner' alt="something" />
            <div className="top-right">
                <p>60% Discount</p>
                <h1>Winter <br />Collection</h1>
                <Link to={"/Winter"}>
                <button>Shop Now</button>
                </Link>
            </div>
            <div className='main-page'>
                <h2 className='heading'>Shop By Category</h2>
                <div className='row category-area'>
                    <div className='col-md-4'>
                        <div className="single-category mb-30">
                            <div className="category-img">
                                <img src={cat1} alt="something" />
                                <div className="category-caption">
                                    <h2>Women`s</h2>
                                    <span className="best"><a href="#">Best New Deals</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="single-category mb-30">
                            <div className="category-img">
                                <img src={cat2} alt="something" />
                                <div className="category-caption">
                                    <h2>Winter Cloth</h2>
                                    <span className="best"><a href="#">Best New Deals</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="single-category mb-30">
                            <div className="category-img">
                                <img src={cat3} alt="something" />
                                <div className="category-caption">
                                    <h2>Men'S Cloth</h2>
                                    <span className="best"><a href="#">Best New Deals</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-page row'>
                <Tabs selectedTabClassName="select-tab" defaultActiveKey="first">
                    <TabList>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2 className='heading mb-0'>Latest Products</h2>
                            </div>
                            <div className='col-md-6'>
                                <Tab className="tab" eventKey="first">All</Tab>
                                <Tab className="tab" eventKey="second">New</Tab>
                                <Tab className="tab" eventKey="third">Featured</Tab>
                                <Tab className="tab" eventKey="fourth">Offer</Tab>
                            </div>
                        </div>
                    </TabList>
                    <TabPanel eventKey="first">
                        <div className='tab-content row'>
                            <div className='col-md-4 product-col'>
                                <Link to={"/Productdetail"}>
                                    <img src={p1} className='product-img' alt="something" />
                                </Link>
                            </div>
                            <div className='col-md-4 product-col'>
                                <img src={p5} className='product-img' alt="something" />
                            </div>
                            <div className='col-md-4 product-col'>
                                <img src={p3} className='product-img' alt="something" />
                            </div>
                            <div className='col-md-4 product-col'>
                                <img src={p2} className='product-img' alt="something" />
                            </div>
                            <div className='col-md-4 product-col'>
                                <img src={p4} className='product-img' alt="something" />
                            </div>
                            <div className='col-md-4 product-col'>
                                <img src={p6} className='product-img' alt="something" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel eventKey="second">
                        <div className='tab-content row'>
                            <div className='col-md-4 product-col'>
                                <img src={p6} className='product-img' alt="something" />
                            </div>
                            <div className='col-md-4 product-col'>
                                <img src={p3} className='product-img' alt="something" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel eventKey="third">
                        <div className='tab-content row'>
                            <div className='col-md-4 product-col'>
                                <img src={p4} className='product-img' alt="something" />
                            </div>
                            <div className='col-md-4 product-col'>
                                <img src={p5} className='product-img' alt="something" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel eventKey="fourth">
                        <div className='tab-content row'>
                            <div className='col-md-4 product-col'>
                                <img src={p2} className='product-img' alt="something" />
                            </div>
                            <div className='col-md-4 product-col'>
                                <img src={p1} className='product-img' alt="something" />
                            </div>
                        </div>
                    </TabPanel>
                </Tabs >
            </div >
            <div className='best-product-area lf-padding'>
                <div className='latest-height latest-area align-item-center' style={{ background: `url(${Background})` }}>
                    <div className='container'>
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-5 col-lg-5  col-md-6 offset-xl-1 offset-lg-1">
                                <div className="latest-caption">
                                    <h2>Get Our<br />Latest Offers News</h2>
                                    <p>Subscribe news latter</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6 ">
                                <div className="latest-subscribe">
                                    <form action="#">
                                        <input type="email" placeholder="Your email here" />
                                        <button className='shop-button'>Shop Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
