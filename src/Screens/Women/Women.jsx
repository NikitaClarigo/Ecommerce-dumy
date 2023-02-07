/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import womenbanner from '../../Assets/women-banner.png';
import womenbrandproduct1 from '../../Assets/women-brand-product1.jpg';
import womenbrandproduct2 from '../../Assets/women-brand-product2.jpg';
import womenbrandproduct3 from '../../Assets/women-brand-product3.jpg';
import womenbrandproduct4 from '../../Assets/women-brand-product4.jpg';
import womenbrand1 from '../../Assets/women-brand1.png';
import womenbrand4 from '../../Assets/women-brand4.png';
import womenbrand2 from '../../Assets/women-brand2.png';
import womenbrand3 from '../../Assets/women-brand3.png';
import wcat1 from '../../Assets/wcat1.jpg';
import wcat2 from '../../Assets/wcat2.jpg';
import wcat3 from '../../Assets/wcat3.jpg';
import windian1 from '../../Assets/windian1.jpg';
import windian2 from '../../Assets/windian2.jpg';
import windian3 from '../../Assets/windian3.jpg';
import windian4 from '../../Assets/windian4.jpg';
import { Link } from 'react-router-dom';

export default function Women() {
  return (
    <div>
      <img src={womenbanner} className='banner' alt="something" />
      <div className='section'>
        <h2 className='inner-heading'>Biggest deal on top brands</h2>
        <div className='row'>
          <div className='col-md-3 women-cal-col'>
            <Link to={"/Shirt"}>
              <img src={womenbrandproduct1} className="brand-product" alt="something" />
              <img src={womenbrand1} className="brand" alt="something" />
              <h2 className='text-center'>30-60% Off</h2>
            </Link>
          </div>
          <div className='col-md-3 women-cal-col'>
            <Link to={"/Shirt"}>
              <img src={womenbrandproduct2} className="brand-product" alt="something" />
              <img src={womenbrand4} className="brand" alt="something" />
              <h2 className='text-center'>30-60% Off</h2>
            </Link>
          </div>
          <div className='col-md-3 women-cal-col'>
            <Link to={"/Shirt"}>
              <img src={womenbrandproduct3} className="brand-product" alt="something" />
              <img src={womenbrand2} className="brand" alt="something" />
              <h2 className='text-center'>30-60% Off</h2>
            </Link>
          </div>
          <div className='col-md-3 women-cal-col'>
            <Link to={"/Shirt"}>
              <img src={womenbrandproduct4} className="brand-product" alt="something" />
              <img src={womenbrand3} className="brand" alt="something" />
              <h2 className='text-center'>30-60% Off</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='inner-heading'>Categories to bag</h2>
        <div className='row category-area' style={{ padding: "0px", margin: "0px" }}>
          <div className='col-md-4'>
            <div className="single-category mb-30">
              <div className="category-img">
                <img src={wcat1} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center text-white'>Western</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="single-category mb-30">
              <div className="category-img">
                <img src={wcat2} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Indian</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="single-category mb-30">
              <div className="category-img">
                <img src={wcat3} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Accessories</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
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
            <Link to={"/Shirt"}>
              <img src={windian1} className="brand-product" alt="something" />
              <h5 className='text-center'>Anarkali</h5>
            </Link>
          </div>
          <div className='col-md-3'>
            <Link to={"/Shirt"}>
              <img src={windian2} className="brand-product" alt="something" />
              <h5 className='text-center'>Long Kurta</h5>
            </Link>
          </div>
          <div className='col-md-3'>
            <Link to={"/Shirt"}>
              <img src={windian3} className="brand-product" alt="something" />
              <h5 className='text-center'>Saree</h5>
            </Link>
          </div>
          <div className='col-md-3'>
            <Link to={"/Shirt"}>
              <img src={windian4} className="brand-product" alt="something" />
              <h5 className='text-center'>Partywear</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
