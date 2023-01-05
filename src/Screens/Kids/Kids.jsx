import React from 'react';
import './kids.css';
import kidsnbanner from '../../Assets/kids-banner.png';
import womenbrandproduct1 from '../../Assets/women-brand-product1.jpg';
import womenbrandproduct2 from '../../Assets/women-brand-product2.jpg';
import womenbrandproduct3 from '../../Assets/women-brand-product3.jpg';
import womenbrandproduct4 from '../../Assets/women-brand-product4.jpg';
import kbrand1 from '../../Assets/kbrand1.jpg';
import kbrand2 from '../../Assets/kbrand2.jpg';
import kbrand3 from '../../Assets/kbrand3.jpg';
import kbrand4 from '../../Assets/kbrand4.jpg';
import kbrand5 from '../../Assets/kbrand5.jpg';
import kbrand6 from '../../Assets/kbrand6.jpg';
import kbrand7 from '../../Assets/kbrand7.jpg';
import kbrand8 from '../../Assets/kbrand8.jpg';
import kbrand9 from '../../Assets/kbrand9.jpg';
import kbrand10 from '../../Assets/kbrand10.jpg';
import kbrand11 from '../../Assets/kbrand11.jpg';
import kbrand12 from '../../Assets/kbrand12.jpg';
import kcat1 from '../../Assets/kcat1.jpg';
import kcat2 from '../../Assets/kcat2.jpg';
import kcat3 from '../../Assets/kcat3.jpg';
import kcat4 from '../../Assets/kcat4.jpg';
import kcat5 from '../../Assets/kcat5.jpg';
import kcat6 from '../../Assets/kcat6.jpg';
import kcat7 from '../../Assets/kcat7.jpg';
import kcat8 from '../../Assets/kcat8.jpg';
import exploreimg1 from '../../Assets/explore-img1.jpg';
import exploreimg2 from '../../Assets/explore-img2.jpg';
import exploreimg3 from '../../Assets/explore-img3.jpg';
import exploreimg4 from '../../Assets/explore-img4.jpg';

export default function Kids() {
  return (
    <div>
      <img src={kidsnbanner} className='banner' />
      <div className='section'>
        <h2 className='inner-heading'>Favourite brands</h2>
        <div className='row'>
          <div className='col-md-2'>
            <img src={kbrand1} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand2} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand3} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand4} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand5} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand6} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand7} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand8} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand9} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand10} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand11} className="kbrand" />
          </div>
          <div className='col-md-2'>
            <img src={kbrand12} className="kbrand" />
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='inner-heading'>Categories to bag</h2>
        <div className='row card-content'>
          <div className='col-md-3'>
            <img src={kcat1} className="brand-product" />
            <h5 className='text-center'>+ Dresses</h5>
          </div>
          <div className='col-md-3'>
            <img src={kcat2} className="brand-product" />
            <h5 className='text-center'>+ Babycare</h5>
          </div>
          <div className='col-md-3'>
            <img src={kcat3} className="brand-product" />
            <h5 className='text-center'>+ Shorts </h5>
          </div>
          <div className='col-md-3'>
            <img src={kcat4} className="brand-product" />
            <h5 className='text-center'>+ Value Packs & Sets</h5>
          </div>
          <div className='col-md-3'>
            <img src={kcat5} className="brand-product" />
            <h5 className='text-center'>+ Sleepwear & Innerwear</h5>
          </div>
          <div className='col-md-3'>
            <img src={kcat6} className="brand-product" />
            <h5 className='text-center'>+ Onesies</h5>
          </div>
          <div className='col-md-3'>
            <img src={kcat7} className="brand-product" />
            <h5 className='text-center'>+ Flip-Flops & Sandals</h5>
          </div>
          <div className='col-md-3'>
            <img src={kcat8} className="brand-product" />
            <h5 className='text-center'>+ T-Shirts & Tops</h5>
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='inner-heading'>Explore more</h2>
        <div className='row'>
          <div className='col-md-6 row'>
            <div className='col-md-6'>
              <img src={exploreimg1} className="explore-img-big" />
            </div>
            <div className='col-md-6'>
              <h1 className='explore-content'>1</h1><span className='explore-head'>Logo Mania</span>
              <h5 className='lh-lg'>A li'l brand love for the li'l ones</h5>
              <a>+ Explore</a><br />
              <img src={exploreimg2} className="explore-img-big" />
            </div>
          </div>
          <div className='col-md-6 row'>
            <div className='col-md-6'>
              <h1 className='explore-content float-end'>2</h1><span className='explore-head lh-sm'>Character Store</span>
              <h5>Let them wear their favourites</h5>
              <a>+ Explore</a><br />
              <img src={exploreimg4} className="explore-img-big" />
            </div>
            <div className='col-md-6'>
              <img src={exploreimg3} className="explore-img-big" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
