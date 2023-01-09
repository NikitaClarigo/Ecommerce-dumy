import React from 'react';
import './beauty.css';
import beautybanner from '../../Assets/beauty-banner.png';
import beautycat1 from '../../Assets/beautycat1.jpg';
import beautycat2 from '../../Assets/beautycat2.jpg';
import beautycat3 from '../../Assets/beautycat3.jpg';
import beautycat4 from '../../Assets/beautycat4.jpg';
import beautycat5 from '../../Assets/beautycat5.jpg';
import beautycat6 from '../../Assets/beautycat6.jpg';


export default function Beauty() {
  return (
    <div>
      <img src={beautybanner} className='banner'/>
      <div className='row section'>
        <h2 className='inner-heading'>Favourite Brands</h2>
        <div className='row'>
          <div className='col-md-2 beauty-brand'>
            <img src='https://logos-world.net/wp-content/uploads/2020/09/Lakme-Logo.png' className='home-brand' />
          </div>
          <div className='col-md-2 beauty-brand'>
          <img src='https://1000logos.net/wp-content/uploads/2017/03/LOreal-Symbol.jpg' className='home-brand' />
          </div>
          <div className='col-md-2 beauty-brand'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRKUa-o3eKiVs9E5lqwOdNymeVpTgo5bgd6LuYPBLRVzcLDhp9oMnQzBrEDVE-1j7SPY&usqp=CAU' className='home-brand' />
          </div>
          <div className='col-md-2 beauty-brand'>
          <img src='https://www.dlfmallofindia.com/wp-content/uploads/2020/04/Color-Bar.png' className='home-brand' />
          </div>
          <div className='col-md-2 beauty-brand'>
          <img src='https://khatabook-assets.s3.amazonaws.com/media/post/LNTMR-KZLqeUd-dDYVKLq6mz3R9y8MxAn3Hx6YaNJOx7MbnvGFSAYsj1Z28vqJmOMKVJ8wviR8326W7pKB8ijFyo0-Pe80r1DmgPUCc5jt4Gk-V3Dj72XhewPLDVs2_gfGoPh36bzmLm.webp' className='home-brand' />
          </div>
          <div className='col-md-2 beauty-brand'>
          <img src='https://khatabook-assets.s3.amazonaws.com/media/post/u7xSFw9sM4HVPn4Xcrr9MyksTSlyXygeVvJCtbKlEdXmLN2EUX0PvgMA4uIp-922Ptp0iHI-OAI9iGJuVsoeL1wn3xHCluGa7y_1pcAOm7mR0Yvn6hOTkoDmLOkoMGfhxAw8Rm8fGZL_.webp' className='home-brand' />
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='inner-heading'>Categories to bag</h2>
        <div className='row category-area' style={{ padding: "0px", margin:"0px" }}>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={beautycat1} />
                <div className="category-caption">
                  <h2 className='text-center'>Makeup</h2>
                  <span className="best"><a href="#">Best New Deals</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={beautycat2} />
                <div className="category-caption">
                  <h2 className='text-center'>Skincare</h2>
                  <span className="best"><a href="#">Best New Deals</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={beautycat3} />
                <div className="category-caption">
                  <h2 className='text-center'>Haircare</h2>
                  <span className="best"><a href="#">Best New Deals</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={beautycat4} />
                <div className="category-caption">
                  <h2 className='text-center'>Fragrances</h2>
                  <span className="best"><a href="#">Best New Deals</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={beautycat5} />
                <div className="category-caption">
                  <h2 className='text-center'>Appliances</h2>
                  <span className="best"><a href="#">Best New Deals</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="single-category mb-30">
              <div class="category-img">
                <img src={beautycat6} />
                <div className="category-caption">
                  <h2 className='text-center'>Herbal</h2>
                  <span className="best"><a href="#">Best New Deals</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
