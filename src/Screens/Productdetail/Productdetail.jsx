import React from 'react';
import p1 from '../../Assets/p1.png';
import product2 from '../../Assets/product-look2.png';
import './Productdetail.css';
import { AiFillStar } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';

export default function Productdetail() {
  return (
    <div className='container-fluid row'>
      <p>Home / Mens / Shirt / English Navy</p>
      <div className='col-md-7 row'>
        <div className='col-md-6'>
          <img src={p1} alt="something" width={350} />
        </div>
        <div className='col-md-6'>
          <img src={product2} alt="something" width={350} />
        </div>
      </div>
      <div className='col-md-5'>
        <div className='product-detail-section'>
          <h4><b>English Navy</b></h4>
          <p className='subtitle'>Men Red Slim Fit Formal Shirt</p>
          <Link to={"#progress"}>
            <button>4<AiFillStar className='star-icon' /> | 4.5k Ratings</button>
          </Link>
          <hr />
          <h4>₹519</h4>
          <p className='text-success'><b>Inclusive all taxes</b></p>
          <h6><b>SELECT SIZE</b></h6>
          <button className='size-button'>38</button>
          <span><button className='size-button'>40</button></span>
          <span><button className='size-button'>42</button></span>
          <span><button className='size-button'>44</button></span>
          <div className='row'>
            <div className='col-md-7'>
              <Link to={"/Cart"}>
                <button className='bag-button'><HiShoppingBag className='bag-icon' /> ADD TO BAG</button>
              </Link>
            </div>
            <div className='col-md-5'>
              <Link to={"/Wishlist"}>
                <button className='wishlist-button'>WISHLIST</button>
              </Link>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className='col-md-7'>
        <div className='container-fluid rating-section'>
          <h5>Ratings & Reviews</h5>
          <div className='row'>
            <div className='col-md-4 rating-inner-section'>
              <h1>4<AiFillStar className='star-icon' /></h1>
              <p>4.5k Varified Buyers</p>
            </div>
            <div className='col-md-5 progress-section' id='progress'>
              <ProgressBar variant="success" now={80} />
              <ProgressBar variant="success" now={60} />
              <ProgressBar variant="info" now={20} />
              <ProgressBar variant="warning" now={60} />
              <ProgressBar variant="danger" now={80} />
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-5'>
        <div className='detail-section'>
          <h5>Product Details</h5>
          <p>Name : English Navy</p>
          <p>Fabric : Cotton Blend</p>
          <p>Sleeve Length : Long Sleeves</p>
          <p>Pattern : Solid</p>
          <p>Net Quantity (N) : 1</p>
        </div>
      </div>
    </div>
  )
}
