import React from 'react';
import color1 from '../../Assets/color1.png';
import color2 from '../../Assets/color2.png';
import color3 from '../../Assets/color3.png';
import color4 from '../../Assets/color4.png';
import color5 from '../../Assets/color5.png';
import color6 from '../../Assets/color6.png';
import color7 from '../../Assets/color7.png';
import mensblackkurta from '../../Assets/mens-blackkurta.png';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Blackkurta() {
    return (
        <div className='container-fluid Shirt-section'>
            <p><Link to={"/Dashboard"}>Home</Link> / <Link to={"/Men"}>Men</Link> / <b>All Black Indian Wear</b></p>
            <p><b>Men's Black Kurtas</b> - 200 Items</p>
            <div className='row'>
                <div className='col-md-2 mt-4'>
                    <h6><b>FILTERS</b></h6>
                </div>
                <div className='col-md-10 mt-4'>
                    <form className='select'>
                        <label>Sort by : </label>
                        <select>
                            <option value="">Recommended</option>
                            <option value="">What's New</option>
                            <option value="">Popularity</option>
                            <option value="">Better Discount</option>
                            <option value="">Price : High to low</option>
                            <option value="">Price : Low to High</option>
                            <option value="">Customer Rating</option>
                        </select>
                    </form>
                </div>
                <div className='filter-section row'>
                    <div className='col-md-2 filter-left'>
                        <p><b>CATEGORIES</b></p>
                        <form>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Kurta Sets</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>Kurtas</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>Dhotis</label><br />
                        </form>
                        <p><b>BRAND</b></p>
                        <form>
                            <input type="checkbox" />
                            <label className='checkbox-label'>DEYANN</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>SOJANYA</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>KISAH</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>Jompers</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>VASTRAMAY</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>Hangup</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>See Designs</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>Anouk</label><br />
                        </form>
                        <p><b>PRICE</b></p>
                        <form>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Rs. 314 to Rs. 648</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>Rs. 648 to Rs. 1265</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>Rs. 1265 to Rs. 1883</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'>Rs. 1884 to Rs. 2000</label><br />
                        </form>
                        <p><b>COLOR</b></p>
                        <form>
                            <input type="checkbox" />
                            <label className='checkbox-label'><img className='colorball' src={color1} alt="something" />Blue</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'><img className='colorball' src={color2} alt="something" />White</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'><img className='colorball' src={color3} alt="something" />Pink</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'><img className='colorball' src={color4} alt="something" />Navy Blue</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'><img className='colorball' src={color5} alt="something" />Grey</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'><img className='colorball' src={color6} alt="something" />Green</label><br />
                            <input type="checkbox" />
                            <label className='checkbox-label'><img className='colorball' src={color7} alt="something" />Purple</label><br />
                        </form>
                        <p><b>DISCOUNT RANGE</b></p>
                        <form>
                            <input type="radio" />
                            <label className='checkbox-label'>10% and above</label><br />
                            <input type="radio" />
                            <label className='checkbox-label'>20% and above</label><br />
                            <input type="radio" />
                            <label className='checkbox-label'>30% and above</label><br />
                            <input type="radio" />
                            <label className='checkbox-label'>40% and above</label><br />
                            <input type="radio" />
                            <label className='checkbox-label'>50% and above</label><br />
                            <input type="radio" />
                            <label className='checkbox-label'>60% and above</label><br />
                            <input type="radio" />
                            <label className='checkbox-label'>70% and above</label><br />
                        </form>
                    </div>
                    <div className='col-md-10 tshirt-filter-right'>
                        <div className='row'>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                            <div className='col-md-3 product-cat-col'>
                                <Link to={"/productdetail"}>
                                    <img src={mensblackkurta} alt="something" width={"100%"} />
                                    <Link to={"/Wishlist"}><AiOutlineHeart className='wishlist-icon' /></Link>
                                    <h6><b>Hancock</b></h6>
                                    <p>Slim Fit Formal Shirt</p>
                                    <h5>Rs 656 <span className='text-decoration-line-through text-black-50'> Rs 995</span><span className='text-danger'> (30% OFF)</span></h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
