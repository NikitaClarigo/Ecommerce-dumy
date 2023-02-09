
import React from 'react';
import './Cart.css';
import windian2 from '../../Assets/windian2.jpg';
import indian3 from '../../Assets/indian3.jpg';
import indian4 from '../../Assets/indian4.jpg';
import windian3 from '../../Assets/windian3.jpg';
import windian4 from '../../Assets/windian4.jpg';
import { Link, NavLink } from 'react-router-dom';
import { BsCheckCircleFill } from "react-icons/bs";
import p1 from '../../Assets/p1.png';

export default function Cart() {
    return (
        <div className='cart-main'>
            <div className='row dextop-cart'>
                <div className='col-md-8 cart-col'>
                    <h4>Shopping Cart</h4>
                    <hr />
                    <div className='row'>
                        <div className='col-md-1 d-flex left'>
                            <input type="checkbox" />
                        </div>
                        <div className='col-md-3'>
                            <img src={p1} className="cart-product" alt="something" />
                        </div>
                        <div className='col-md-7'>
                            <p className='product-des'>Ethluxis Men's Silk Blend Kurta, Churidar Pyjama With Nehru Jacket (ETH-TRI-FLR_Navy Blue_42)</p>
                            <p className='inner-content text-danger'>Only 3 left in stock</p>
                            <p className='inner-content'>Eligible for FREE Shipping</p>
                            <input type="checkbox" /><span className='inner-content'> This will be Gift</span><span className='inner-content text-danger'> Learn More</span>
                            <p className='inner-content'><b>Size : 42 </b></p>
                            <p className='inner-content'><b>Colour : Black </b></p>
                            <form>
                                <select name='Quantity'>
                                    <option value={""} disabled defaultValue>Quantity</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                                <span className='inner-content'> |  Delete | </span>
                                <span className='inner-content'>Save for later | </span>
                                <span className='inner-content'>Add to list | </span>
                                <span className='inner-content'>See more like this | </span>
                            </form>
                        </div>
                        <div className='col-md-1'>
                            <b>₹1800</b>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-md-1 d-flex left'>
                            <input type="checkbox" />
                        </div>
                        <div className='col-md-3'>
                            <img src={windian2} className="cart-product" alt="something" />
                        </div>
                        <div className='col-md-7'>
                            <p className='product-des'>Kaynat Women's Rayon Green Print Kurta & duptta Set Rayon (Size: S-3XL)</p>
                            <p className='inner-content text-danger'>Only 3 left in stock</p>
                            <p className='inner-content'>Eligible for FREE Shipping</p>
                            <input type="checkbox" /><span className='inner-content'> This will be Gift</span><span className='inner-content text-danger'> Learn More</span>
                            <p className='inner-content'><b>Size : 42 </b></p>
                            <p className='inner-content'><b>Colour : Black </b></p>
                            <form>
                                <select name='Quantity'>
                                    <option value={""} disabled defaultValue>Quantity</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                                <span className='inner-content'> |  Delete | </span>
                                <span className='inner-content'>Save for later | </span>
                                <span className='inner-content'>Add to list | </span>
                                <span className='inner-content'>See more like this | </span>
                            </form>
                        </div>
                        <div className='col-md-1'>
                            <b>₹2000</b>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 cart-col buy-col'>
                    <BsCheckCircleFill className='check' />
                    <span className='inner-content'> Your order is eligible for FREE Delivery.</span><br></br>
                    <h5>Subtotal (2 Items) : ₹38,00.00</h5>
                    <input type="checkbox" /><span> This order contains a gift</span>
                    <Link to="/Checkoutmain">
                        <button className='buy-button'>Proceed to Buy</button>
                    </Link>
                    <div className='related-item-col'>
                        <h6 className='inner-content'> <b>Products related to items in your cart</b></h6><br></br>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src={windian3} className="related-product" alt="something" />
                            </div>
                            <div className='col-md-8'>
                                <p className='inner-content'><b>Women's Banarasi Silk Saree with Blouse Piece,Black</b></p>
                                <p>₹5,000.00</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src={indian3} className="related-product" alt="something" />
                            </div>
                            <div className='col-md-8'>
                                <p className='inner-content'><b>Women's Banarasi Silk Saree with Blouse Piece,Black</b></p>
                                <p>₹5,000.00</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src={indian4} className="related-product" alt="something" />
                            </div>
                            <div className='col-md-8'>
                                <p className='inner-content'><b>Women's Banarasi Silk Saree with Blouse Piece,Black</b></p>
                                <p>₹5,000.00</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src={windian4} className="related-product" alt="something" />
                            </div>
                            <div className='col-md-8'>
                                <p className='inner-content'><b>Women's Banarasi Silk Saree with Blouse Piece,Black</b></p>
                                <p>₹5,000.00</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row mobile-cart'>
                <div className='col-md-8 cart-col'>
                    <h4>Shopping Cart</h4>
                    <hr />
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={p1} className="cart-product" alt="something" />
                        </div>
                        <div className='col-md-7'>
                            <p className='product-des'>Ethluxis Men's Silk Blend Kurta, Churidar Pyjama With Nehru Jacket (ETH-TRI-FLR_Navy Blue_42)</p>
                            <p className='inner-content text-danger'>Only 3 left in stock</p>
                            <p className='inner-content'>Eligible for FREE Shipping</p>
                            <input type="checkbox" /><span className='inner-content'> This will be Gift</span><span className='inner-content text-danger'> Learn More</span>
                            <p className='inner-content'><b>Size : 42 </b></p>
                            <p className='inner-content'><b>Colour : Black </b></p>
                            <form>
                                <select name='Quantity'>
                                    <option value={""} disabled defaultValue>Quantity</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                                <span className='inner-content'> |  Delete | </span>
                                <span className='inner-content'>Save for later | </span>
                                <span className='inner-content'>Add to list | </span>
                                <span className='inner-content'>See more like this | </span>
                            </form>
                        </div>
                        <div className='col-md-1'>
                            <b>₹1800</b>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={windian2} className="cart-product" alt="something" />
                        </div>
                        <div className='col-md-7'>
                            <p className='product-des'>Kaynat Women's Rayon Green Print Kurta & duptta Set Rayon (Size: S-3XL)</p>
                            <p className='inner-content text-danger'>Only 3 left in stock</p>
                            <p className='inner-content'>Eligible for FREE Shipping</p>
                            <input type="checkbox" /><span className='inner-content'> This will be Gift</span><span className='inner-content text-danger'> Learn More</span>
                            <p className='inner-content'><b>Size : 42 </b></p>
                            <p className='inner-content'><b>Colour : Black </b></p>
                            <form>
                                <select name='Quantity'>
                                    <option value={""} disabled defaultValue>Quantity</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                                <span className='inner-content'> |  Delete | </span>
                                <span className='inner-content'>Save for later | </span>
                                <span className='inner-content'>Add to list | </span>
                                <span className='inner-content'>See more like this | </span>
                            </form>
                        </div>
                        <div className='col-md-1'>
                            <b>₹2000</b>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='col-md-4 cart-col buy-col'>
                    <BsCheckCircleFill className='check' />
                    <span className='inner-content'> Your order is eligible for FREE Delivery.</span><br></br>
                    <h5>Subtotal (2 Items) : ₹38,00.00</h5>
                    <input type="checkbox" /><span> This order contains a gift</span>
                    <Link to="/Checkoutmain">
                        <button className='buy-button'>Proceed to Buy</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
