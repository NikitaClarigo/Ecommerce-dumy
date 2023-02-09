/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './beauty.css';
import beautybanner from '../../Assets/beauty-banner.png';
import beautycat1 from '../../Assets/beautycat1.jpg';
import beautycat2 from '../../Assets/beautycat2.jpg';
import beautycat3 from '../../Assets/beautycat3.jpg';
import beautycat4 from '../../Assets/beautycat4.jpg';
import beautycat5 from '../../Assets/beautycat5.jpg';
import beautycat6 from '../../Assets/beautycat6.jpg';
import { Link } from 'react-router-dom';


export default function Beauty() {
  return (
    <div>
      <img src={beautybanner} className='banner' alt="something" />
      <div className='row section beauty-brand-row'>
        <h2 className='inner-heading'>Favourite Brands</h2>
        <div className='row'>
          <div className='col-md-2 beauty-brand'>
            <Link to={"/Shirt"}>
              <img src='https://logos-world.net/wp-content/uploads/2020/09/Lakme-Logo.png' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2 beauty-brand'>
            <Link to={"/Shirt"}>
              <img src='https://1000logos.net/wp-content/uploads/2017/03/LOreal-Symbol.jpg' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2 beauty-brand'>
            <Link to={"/Shirt"}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRKUa-o3eKiVs9E5lqwOdNymeVpTgo5bgd6LuYPBLRVzcLDhp9oMnQzBrEDVE-1j7SPY&usqp=CAU' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2 beauty-brand'>
            <Link to={"/Shirt"}>
              <img src='https://www.ranklogos.com/wp-content/uploads/2012/06/colorbar-logo.png' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2 beauty-brand'>
            <Link to={"/Shirt"}>
              <img src='https://khatabook-assets.s3.amazonaws.com/media/post/LNTMR-KZLqeUd-dDYVKLq6mz3R9y8MxAn3Hx6YaNJOx7MbnvGFSAYsj1Z28vqJmOMKVJ8wviR8326W7pKB8ijFyo0-Pe80r1DmgPUCc5jt4Gk-V3Dj72XhewPLDVs2_gfGoPh36bzmLm.webp' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2 beauty-brand'>
            <Link to={"/Shirt"}>
              <img src='https://khatabook-assets.s3.amazonaws.com/media/post/u7xSFw9sM4HVPn4Xcrr9MyksTSlyXygeVvJCtbKlEdXmLN2EUX0PvgMA4uIp-922Ptp0iHI-OAI9iGJuVsoeL1wn3xHCluGa7y_1pcAOm7mR0Yvn6hOTkoDmLOkoMGfhxAw8Rm8fGZL_.webp' className='home-brand' alt="something" />
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
                <img src={beautycat1} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Makeup</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="single-category mb-30">
              <div className="category-img">
                <img src={beautycat2} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Skincare</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="single-category mb-30">
              <div className="category-img">
                <img src={beautycat3} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Haircare</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="single-category mb-30">
              <div className="category-img">
                <img src={beautycat4} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Fragrances</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="single-category mb-30">
              <div className="category-img">
                <img src={beautycat5} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Appliances</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="single-category mb-30">
              <div className="category-img">
                <img src={beautycat6} alt="something" />
                <div className="category-caption">
                  <h2 className='text-center'>Herbal</h2>
                  <span className="best"><Link to={"/Shirt"}>Best New Deals</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
