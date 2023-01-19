/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Men.css';
import menbanner from '../../Assets/men-banner.png';
import brandproduct1 from '../../Assets/us-polo.jpg';
import brandproduct2 from '../../Assets/levis.jpg';
import brandproduct3 from '../../Assets/tomy.jpg';
import brandproduct4 from '../../Assets/united.jpg';
import brand1 from '../../Assets/brand1.png';
import brand2 from '../../Assets/brand2.png';
import brand3 from '../../Assets/brand3.png';
import brand4 from '../../Assets/brand4.png';
import mcat1 from '../../Assets/mcat1.jpg';
import mcat2 from '../../Assets/mcat2.jpg';
import mcat3 from '../../Assets/mcat3.jpg';
import indian1 from '../../Assets/indian1.jpg';
import indian2 from '../../Assets/indian2.jpg';
import indian3 from '../../Assets/indian3.jpg';
import indian4 from '../../Assets/indian4.jpg';
import { Link } from 'react-router-dom';


export default function Men() {
  return (
    <div>
      <img src={menbanner} className='banner' alt="something" />
      <div className='section'>
        <h2 className='inner-heading'>Biggest deal on top brands</h2>
        <div className='row'>
          <div className='col-md-3'>
            <img src={brandproduct1} className="brand-product" alt="something" />
            <img src={brand1} className="brand" alt="something" />
            <h2 className='text-center'>30-60% Off</h2>
          </div>
          <div className='col-md-3'>
            <img src={brandproduct2} className="brand-product" alt="something" />
            <img src={brand2} className="brand" alt="something" />
            <h2 className='text-center'>30-60% Off</h2>
          </div>
          <div className='col-md-3'>
            <img src={brandproduct3} className="brand-product" alt="something" />
            <img src={brand3} className="brand" alt="something" />
            <h2 className='text-center'>30-60% Off</h2>
          </div>
          <div className='col-md-3'>
            <img src={brandproduct4} className="brand-product" alt="something" />
            <img src={brand4} className="brand" alt="something" />
            <h2 className='text-center'>30-60% Off</h2>
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='inner-heading'>Categories to bag</h2>
        <div className='row category-area' style={{ padding: "0px", margin:"0px" }}>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={mcat1} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Shirt's</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={mcat2} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>T-shirts's</h2>
                  <span className="best"><a href="#">Best New Deals</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={mcat3} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Shoe's</h2>
                  <span className="best"><a href="#">Best New Deals</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='inner-heading'>Trending in indian wear</h2>
        <div className='row card-content'>
          <div className='col-md-3'>
            <img src={indian1} className="brand-product" alt="something" />
            <h5 className='text-center'>All black indian wear</h5>
          </div>
          <div className='col-md-3'>
            <img src={indian2} className="brand-product" alt="something" />
            <h5 className='text-center'>Short Kurta</h5>
          </div>
          <div className='col-md-3'>
            <img src={indian3} className="brand-product" alt="something" />
            <h5 className='text-center'>Ethinic Casuals</h5>
          </div>
          <div className='col-md-3'>
            <img src={indian4} className="brand-product" alt="something" />
            <h5 className='text-center'>Partywear</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
