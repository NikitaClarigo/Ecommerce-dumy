/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './HomeandLiving.css';
import homebanner from '../../Assets/home-banner.png';
import homecat1 from '../../Assets/homecat1.jpg';
import homecat2 from '../../Assets/homecat2.jpg';
import homecat3 from '../../Assets/homecat3.jpg';
import homecat4 from '../../Assets/homecat4.jpg';
import homecat5 from '../../Assets/homecat5.jpg';
import homecat6 from '../../Assets/homecat6.jpg';

export default function HomeandLiving() {
  return (
    <div>
      <img src={homebanner} className='banner' alt="something" />
      <div className='row section'>
        <div className='col-md-4 sidebar'>
          <h5><b>Furnishing & Bedline</b></h5>
          <a><p>Bed Sheets</p></a>
          <a><p>Bedding Sets & Bed Covers</p></a>
          <a><p>Blankets, Quilts & Dohars</p></a>
          <a><p>Pillows & Pillow Covers</p></a>
          <a><p>Cushions & Cushion Covers</p></a>
          <a><p>Curtains</p></a>
          <a><p>Mats & Dhurries</p></a>
          <a><p>Carpets</p></a>

          <h5><b>Bath & Bed Linen</b></h5>
          <a><p>Towels & Towel Sets</p></a>
          <a><p>Bath Robes</p></a>
          <a><p>Bathroom Accessories</p></a>
          <a><p>Shower Curtains</p></a>
          <a><p>Bath Rugs</p></a>

          <h5><b>Home Décor</b></h5>
          <a><p>Pooja Essentials</p></a>
          <a><p>Laptop Table</p></a>
          <a><p>Ottomans</p></a>
          <a><p>Artificial Flowers & Plants</p></a>
          <a><p>Candles & Candle Holders</p></a>
          <a><p>Clocks</p></a>
          <a><p>Planters & Garden Accessories</p></a>
          <a><p>Home Fragrances</p></a>
          <a><p>Mirrors</p></a>
          <a><p>Wall Art</p></a>
          <a><p>Wall Décor</p></a>
          <a><p>Wall Shelves</p></a>
          <a><p>Showpieces & Vases</p></a>

          <h5><b>Lamps & Lighting</b></h5>
          <a><p>Floor Lamps</p></a>
          <a><p>Table Lamps</p></a>
          <a><p>Wall Lamp & String Lights</p></a>
          <a><p>Bathroom Lights & Outdoor Lamps</p></a>
          <a><p>Ceiling Lamps</p></a>

          <h5><b>Kitchen & Table</b></h5>
          <a><p>Dinnerware</p></a>
          <a><p>Cups & Mugs</p></a>
          <a><p>Water Bottles</p></a>
          <a><p>Bakeware</p></a>
          <a><p>Trays & Serveware</p></a>
          <a><p>Bar & Drinkware</p></a>
          <a><p>Cookware & Kitchen Tools</p></a>
          <a><p>Kitchen Storage</p></a>
          <a><p>Table Covers & Furnishings</p></a>

          <h5><b>Storage & Organisers</b></h5>
          <a><p>Organisers</p></a>
          <a><p>Hooks & Holders</p></a>
        </div>
        <div className='col-md-8'>
          <h2 className='inner-heading'>Categories to bag</h2>
          <div className='row card-content'>
            <div className='col-md-6'>
              <img src={homecat1} className="brand-product" alt="something" />
              <h5 className='text-center'>Bed Line</h5>
            </div>
            <div className='col-md-6'>
              <img src={homecat2} className="brand-product" alt="something" />
              <h5 className='text-center'>Furnishing</h5>
            </div>
            <div className='col-md-6'>
              <img src={homecat3} className="brand-product" alt="something" />
              <h5 className='text-center'>Art & Decore</h5>
            </div>
            <div className='col-md-6'>
              <img src={homecat4} className="brand-product" alt="something" />
              <h5 className='text-center'>Lamps & Lightning</h5>
            </div>
            <div className='col-md-6'>
              <img src={homecat5} className="brand-product" alt="something" />
              <h5 className='text-center'>Kitchen & Dinning</h5>
            </div>
            <div className='col-md-6'>
              <img src={homecat6} className="brand-product" alt="something" />
              <h5 className='text-center'>Bath</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='row section'>
        <h2 className='inner-heading'>Featured Brands</h2>
        <div className='row'>
          <div className='col-md-2'>
            <img src='https://images.yourstory.com/cs/images/companies/8a876eee396e-SwayamIndiaLogo-1672645565815.jpg?fm=png&auto=format&ar=1:1&mode=fill&fill=solid' className='home-brand' alt="something" />
          </div>
          <div className='col-md-2'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png' className='home-brand' alt="something" />
          </div>
          <div className='col-md-2'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkB6ZyQeC4_mB1PvhmgL_z3yBGpnuRZUQTupzA7VNEZG9km4zs5-JRccxuZ70H0eJ81k&usqp=CAU' className='home-brand' alt="something" />
          </div>
          <div className='col-md-2'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCoNCnttZxvrVyZv9DSIxcc2YwcTbXLl5nUppL0EuRqpae1fLlKh_M4a5kSN_LJ-NauE&usqp=CAU' className='home-brand' alt="something" />
          </div>
          <div className='col-md-2'>
          <img src='https://www.propostefair.it/wp-content/uploads/2021/06/logo-DDECORHOMEFABRICS.jpg' className='home-brand' alt="something" />
          </div>
          <div className='col-md-2'>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX////sIiTrAADsGRvvYGHxbW7rCg796ur5ycnrBQr2pKX60dHrExX2qKn2sLHsDRHzg4TzjIzzh4j3tbX84ODsHR/97+/1m5z72trtLS/4urr0lpf+8/PvVVb6zs7wZGXydXb4wcHuRUbuS0zuQkPye3z1mJntKCrtNznvV1jtMzRkOqarAAAE70lEQVR4nO3b63aiMBQFYAje0CgFG8S7aGmdvv8DjtwCIYlDGJi2a/b3k8UxbGDKIWEsCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBrHPyRoXGcFYb7saHgNSt8DUwL92FWeEpMCzfpcdKJY4oE6XES40JK0nOzI9S0cEKiR+G7eaFrH6wLtc2Rx8W4OuZ1zHscqMfMC52rZU2JeZ3tvVgfHcpsd2mFXcazyck6dSsMraXbpfDD6lJlT+bdzqhNZtasW+HUmk+6FNpIqIaEWkioL0RCLTEhcwvVJqfYIjw2tQkZdUlmQpVPPSmhQ3OOvEn4AXXCcldO8YwWErLrepXjezrnfNN6X4+oSeiR+8sqjqJoES8vjCh6iWZCZ+QHKf9cjZgE+aZbPaIioUOc0SUQXM6UNM+skNAZlc2qV26ifrFlUT8wZUJK99N6w7u4SKNJCSerYucdv21I+SNB/QzJCd3zq6rNPt0b17G/hGR8aI4WbZuXUUq4LHZdVwnLA395mpBedG8STDyvvSUkS9Vwt0bE/hIS6XyWluK17iuhu1cP9yme0N4SOr90AR8vPUMkZHfNcJE4XG8J+XEpDJKQ7GojTOs30Ej4h99bQndlaW2F+6anhC4PFf56PA0/53y4WDwTvSWsn9KG6wAJ2Rv/+XN6HIzwiIdhEpKYn9IoVz2pxNumn4TOsTqB2c+zbbzLxcPcpTzhgpSSf5Rwlz/mef8nvpj3n3DPt/LnxxAJa3epFXtE3ZM+Tbgik0LLhLMyIT9UEg6YsPaXJr2Mly1x1RNc2oTRvLQpD/R5woU+4XiQhGtLMF1daJvOe6LshL5jQubIR7gIqDQ79nMT1v/WVA4b0mj0B0jossLACW36GSmOMryKt+oACdm2MBk44eMpf15Ysrd2z8POCRWGSpi+dH/60oWctutpfkbCdF2COMkuFMZLhAP96QmzCpfc/dp0htB6axOGi6K9jBblo/V7JWTlclbeslGy4eNNWyVc8fayZU/ztwn5UXhBm4TsWK6e3opfr3r/Q6uExn1pt4TsWu505Ge0/KWnCXmXyPN4/B08/J4JrdkpM+P/oE7PEtbmFPbZQ96pMi++VcI3fVn89C6tFa6PHmEjHtBa1Vu3/hMGxCu06Wlspk+4rh+oPE+jamhyx/p4/Sf0jfpSm+gTCr8vJVS2pRlxbm+AhHyvdgn1d7dQJj8Pq4mZhutAsxgdE3qaed2HP609EfXk19gT9/rqhLYndlyVjTBVrly3UJyd6bGxXvT1CdlHbKnMxTzKrs29Ny5j6LvN9Txtwp2c8Onakyph2e49Tfh4B3JHib+p85MRabysq/tSRibJ7jV8DHQIp/H7TTGNIa0fXorlyeqC0U2+hLkWJpSkWf33Yq9q4dGbF5tu+hnhYlRKvTrFyqq283603el1S1eCPdU3U/IasLzE7BWbxD9R0uqavFdZ+GR1rbWfu47fFhJqIaG+EAm1/oOEXb8v7Ziw8/el087fl754f95LNV7zG4SWhYfGkmlL7FP6AqEderEOW9f04+l8nulk/tW1k32SsiTGdTSbMki6FKaTFBvTD+CTvCeMxqYf+Z/zN//4bPy/A/IX7JVp3SgRvtICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Id+A1Swe1ZcugIKAAAAAElFTkSuQmCC' className='home-brand' alt="something" />
          </div>
        </div>
      </div>
    </div>
  )
}
