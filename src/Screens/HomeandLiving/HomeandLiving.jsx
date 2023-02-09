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
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BsFilter } from "react-icons/bs"

export default function HomeandLiving() {
  return (
    <div>
      <img src={homebanner} className='banner' alt="something" />

      <div className='row section filter-section'>
        <div className='col-md-4 sidebar'>
          <h5><b>Furnishing & Bedline</b></h5>
          <Link to={"/Shirt"}><p>Bed Sheets</p></Link>
          <Link to={"/Shirt"}><p>Bedding Sets & Bed Covers</p></Link>
          <Link to={"/Shirt"}><p>Blankets, Quilts & Dohars</p></Link>
          <Link to={"/Shirt"}><p>Pillows & Pillow Covers</p></Link>
          <Link to={"/Shirt"}><p>Cushions & Cushion Covers</p></Link>
          <Link to={"/Shirt"}><p>Curtains</p></Link>
          <Link to={"/Shirt"}><p>Mats & Dhurries</p></Link>
          <Link to={"/Shirt"}><p>Carpets</p></Link>

          <h5><b>Bath & Bed Linen</b></h5>
          <Link to={"/Shirt"}><p>Towels & Towel Sets</p></Link>
          <Link to={"/Shirt"}><p>Bath Robes</p></Link>
          <Link to={"/Shirt"}><p>Bathroom Accessories</p></Link>
          <Link to={"/Shirt"}><p>Shower Curtains</p></Link>
          <Link to={"/Shirt"}><p>Bath Rugs</p></Link>

          <h5><b>Home Décor</b></h5>
          <Link to={"/Shirt"}><p>Pooja Essentials</p></Link>
          <Link to={"/Shirt"}><p>Laptop Table</p></Link>
          <Link to={"/Shirt"}><p>Ottomans</p></Link>
          <Link to={"/Shirt"}><p>Artificial Flowers & Plants</p></Link>
          <Link to={"/Shirt"}><p>Candles & Candle Holders</p></Link>
          <Link to={"/Shirt"}><p>Clocks</p></Link>
          <Link to={"/Shirt"}><p>Planters & Garden Accessories</p></Link>
          <Link to={"/Shirt"}><p>Home Fragrances</p></Link>
          <Link to={"/Shirt"}><p>Mirrors</p></Link>
          <Link to={"/Shirt"}><p>Wall Art</p></Link>
          <Link to={"/Shirt"}><p>Wall Décor</p></Link>
          <Link to={"/Shirt"}><p>Wall Shelves</p></Link>
          <Link to={"/Shirt"}><p>Showpieces & Vases</p></Link>

          <h5><b>Lamps & Lighting</b></h5>
          <Link to={"/Shirt"}><p>Floor Lamps</p></Link>
          <Link to={"/Shirt"}><p>Table Lamps</p></Link>
          <Link to={"/Shirt"}><p>Wall Lamp & String Lights</p></Link>
          <Link to={"/Shirt"}><p>Bathroom Lights & Outdoor Lamps</p></Link>
          <Link to={"/Shirt"}><p>Ceiling Lamps</p></Link>

          <h5><b>Kitchen & Table</b></h5>
          <Link to={"/Shirt"}><p>Dinnerware</p></Link>
          <Link to={"/Shirt"}><p>Cups & Mugs</p></Link>
          <Link to={"/Shirt"}><p>Water Bottles</p></Link>
          <Link to={"/Shirt"}><p>Bakeware</p></Link>
          <Link to={"/Shirt"}><p>Trays & Serveware</p></Link>
          <Link to={"/Shirt"}><p>Bar & Drinkware</p></Link>
          <Link to={"/Shirt"}><p>Cookware & Kitchen Tools</p></Link>
          <Link to={"/Shirt"}><p>Kitchen Storage</p></Link>
          <Link to={"/Shirt"}><p>Table Covers & Furnishings</p></Link>

          <h5><b>Storage & Organisers</b></h5>
          <Link to={"/Shirt"}><p>Organisers</p></Link>
          <Link to={"/Shirt"}><p>Hooks & Holders</p></Link>
        </div>
        <div className='col-md-8'>
          <h2 className='inner-heading'>Categories to bag</h2>
          <div className='row card-content'>
            <div className='col-md-6'>
              <Link to={"/Productdetail"}>
                <img src={homecat1} className="brand-product" alt="something" />
                <h5 className='text-center'>Bed Line</h5>
              </Link>
            </div>
            <div className='col-md-6'>
              <Link to={"/Productdetail"}>
                <img src={homecat2} className="brand-product" alt="something" />
                <h5 className='text-center'>Furnishing</h5>
              </Link>
            </div>
            <div className='col-md-6'>
              <Link to={"/Productdetail"}>
                <img src={homecat3} className="brand-product" alt="something" />
                <h5 className='text-center'>Art & Decore</h5>
              </Link>
            </div>
            <div className='col-md-6'>
              <Link to={"/Productdetail"}>
                <img src={homecat4} className="brand-product" alt="something" />
                <h5 className='text-center'>Lamps & Lightning</h5>
              </Link>
            </div>
            <div className='col-md-6'>
              <Link to={"/Productdetail"}>
                <img src={homecat5} className="brand-product" alt="something" />
                <h5 className='text-center'>Kitchen & Dinning</h5>
              </Link>
            </div>
            <div className='col-md-6'>
              <Link to={"/Productdetail"}>
                <img src={homecat6} className="brand-product" alt="something" />
                <h5 className='text-center'>Bath</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className='mobile-filter'>
          <Popup trigger=
            {<button className='home-filter-button'><BsFilter /> Filter</button>}
            position="bottom center">
            <h5><b>Furnishing & Bedline</b></h5>
            <Link to={"/Shirt"}><p>Bed Sheets</p></Link>
            <Link to={"/Shirt"}><p>Bedding Sets & Bed Covers</p></Link>
            <Link to={"/Shirt"}><p>Blankets, Quilts & Dohars</p></Link>
            <Link to={"/Shirt"}><p>Pillows & Pillow Covers</p></Link>
            <Link to={"/Shirt"}><p>Cushions & Cushion Covers</p></Link>
            <Link to={"/Shirt"}><p>Curtains</p></Link>
            <Link to={"/Shirt"}><p>Mats & Dhurries</p></Link>
            <Link to={"/Shirt"}><p>Carpets</p></Link>

            <h5><b>Bath & Bed Linen</b></h5>
            <Link to={"/Shirt"}><p>Towels & Towel Sets</p></Link>
            <Link to={"/Shirt"}><p>Bath Robes</p></Link>
            <Link to={"/Shirt"}><p>Bathroom Accessories</p></Link>
            <Link to={"/Shirt"}><p>Shower Curtains</p></Link>
            <Link to={"/Shirt"}><p>Bath Rugs</p></Link>

            <h5><b>Home Décor</b></h5>
            <Link to={"/Shirt"}><p>Pooja Essentials</p></Link>
            <Link to={"/Shirt"}><p>Laptop Table</p></Link>
            <Link to={"/Shirt"}><p>Ottomans</p></Link>
            <Link to={"/Shirt"}><p>Artificial Flowers & Plants</p></Link>
            <Link to={"/Shirt"}><p>Candles & Candle Holders</p></Link>
            <Link to={"/Shirt"}><p>Clocks</p></Link>
            <Link to={"/Shirt"}><p>Planters & Garden Accessories</p></Link>
            <Link to={"/Shirt"}><p>Home Fragrances</p></Link>
            <Link to={"/Shirt"}><p>Mirrors</p></Link>
            <Link to={"/Shirt"}><p>Wall Art</p></Link>
            <Link to={"/Shirt"}><p>Wall Décor</p></Link>
            <Link to={"/Shirt"}><p>Wall Shelves</p></Link>
            <Link to={"/Shirt"}><p>Showpieces & Vases</p></Link>

            <h5><b>Lamps & Lighting</b></h5>
            <Link to={"/Shirt"}><p>Floor Lamps</p></Link>
            <Link to={"/Shirt"}><p>Table Lamps</p></Link>
            <Link to={"/Shirt"}><p>Wall Lamp & String Lights</p></Link>
            <Link to={"/Shirt"}><p>Bathroom Lights & Outdoor Lamps</p></Link>
            <Link to={"/Shirt"}><p>Ceiling Lamps</p></Link>

            <h5><b>Kitchen & Table</b></h5>
            <Link to={"/Shirt"}><p>Dinnerware</p></Link>
            <Link to={"/Shirt"}><p>Cups & Mugs</p></Link>
            <Link to={"/Shirt"}><p>Water Bottles</p></Link>
            <Link to={"/Shirt"}><p>Bakeware</p></Link>
            <Link to={"/Shirt"}><p>Trays & Serveware</p></Link>
            <Link to={"/Shirt"}><p>Bar & Drinkware</p></Link>
            <Link to={"/Shirt"}><p>Cookware & Kitchen Tools</p></Link>
            <Link to={"/Shirt"}><p>Kitchen Storage</p></Link>
            <Link to={"/Shirt"}><p>Table Covers & Furnishings</p></Link>

            <h5><b>Storage & Organisers</b></h5>
            <Link to={"/Shirt"}><p>Organisers</p></Link>
            <Link to={"/Shirt"}><p>Hooks & Holders</p></Link>
          </Popup>
          <div className='col-md-12 section'>
            <h2 className='inner-heading'>Categories to bag</h2>
            <div className='row card-content'>
              <div className='col-md-6'>
                <Link to={"/Productdetail"}>
                  <img src={homecat1} className="brand-product" alt="something" />
                  <h5 className='text-center'>Bed Line</h5>
                </Link>
              </div>
              <div className='col-md-6'>
                <Link to={"/Productdetail"}>
                  <img src={homecat2} className="brand-product" alt="something" />
                  <h5 className='text-center'>Furnishing</h5>
                </Link>
              </div>
              <div className='col-md-6'>
                <Link to={"/Productdetail"}>
                  <img src={homecat3} className="brand-product" alt="something" />
                  <h5 className='text-center'>Art & Decore</h5>
                </Link>
              </div>
              <div className='col-md-6'>
                <Link to={"/Productdetail"}>
                  <img src={homecat4} className="brand-product" alt="something" />
                  <h5 className='text-center'>Lamps & Lightning</h5>
                </Link>
              </div>
              <div className='col-md-6'>
                <Link to={"/Productdetail"}>
                  <img src={homecat5} className="brand-product" alt="something" />
                  <h5 className='text-center'>Kitchen & Dinning</h5>
                </Link>
              </div>
              <div className='col-md-6'>
                <Link to={"/Productdetail"}>
                  <img src={homecat6} className="brand-product" alt="something" />
                  <h5 className='text-center'>Bath</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row section home-brand-section'>
        <h2 className='inner-heading'>Featured Brands</h2>
        <div className='row'>
          <div className='col-md-2'>
            <Link to={"/Shirt"}>
              <img src='https://images.yourstory.com/cs/images/companies/8a876eee396e-SwayamIndiaLogo-1672645565815.jpg?fm=png&auto=format&ar=1:1&mode=fill&fill=solid' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2'>
            <Link to={"/Shirt"}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2'>
            <Link to={"/Shirt"}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkB6ZyQeC4_mB1PvhmgL_z3yBGpnuRZUQTupzA7VNEZG9km4zs5-JRccxuZ70H0eJ81k&usqp=CAU' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2'>
            <Link to={"/Shirt"}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCoNCnttZxvrVyZv9DSIxcc2YwcTbXLl5nUppL0EuRqpae1fLlKh_M4a5kSN_LJ-NauE&usqp=CAU' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2'>
            <Link to={"/Shirt"}>
              <img src='https://www.propostefair.it/wp-content/uploads/2021/06/logo-DDECORHOMEFABRICS.jpg' className='home-brand' alt="something" />
            </Link>
          </div>
          <div className='col-md-2'>
            <Link to={"/Shirt"}>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX////sIiTrAADsGRvvYGHxbW7rCg796ur5ycnrBQr2pKX60dHrExX2qKn2sLHsDRHzg4TzjIzzh4j3tbX84ODsHR/97+/1m5z72trtLS/4urr0lpf+8/PvVVb6zs7wZGXydXb4wcHuRUbuS0zuQkPye3z1mJntKCrtNznvV1jtMzRkOqarAAAE70lEQVR4nO3b63aiMBQFYAje0CgFG8S7aGmdvv8DjtwCIYlDGJi2a/b3k8UxbGDKIWEsCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBrHPyRoXGcFYb7saHgNSt8DUwL92FWeEpMCzfpcdKJY4oE6XES40JK0nOzI9S0cEKiR+G7eaFrH6wLtc2Rx8W4OuZ1zHscqMfMC52rZU2JeZ3tvVgfHcpsd2mFXcazyck6dSsMraXbpfDD6lJlT+bdzqhNZtasW+HUmk+6FNpIqIaEWkioL0RCLTEhcwvVJqfYIjw2tQkZdUlmQpVPPSmhQ3OOvEn4AXXCcldO8YwWErLrepXjezrnfNN6X4+oSeiR+8sqjqJoES8vjCh6iWZCZ+QHKf9cjZgE+aZbPaIioUOc0SUQXM6UNM+skNAZlc2qV26ifrFlUT8wZUJK99N6w7u4SKNJCSerYucdv21I+SNB/QzJCd3zq6rNPt0b17G/hGR8aI4WbZuXUUq4LHZdVwnLA395mpBedG8STDyvvSUkS9Vwt0bE/hIS6XyWluK17iuhu1cP9yme0N4SOr90AR8vPUMkZHfNcJE4XG8J+XEpDJKQ7GojTOs30Ej4h99bQndlaW2F+6anhC4PFf56PA0/53y4WDwTvSWsn9KG6wAJ2Rv/+XN6HIzwiIdhEpKYn9IoVz2pxNumn4TOsTqB2c+zbbzLxcPcpTzhgpSSf5Rwlz/mef8nvpj3n3DPt/LnxxAJa3epFXtE3ZM+Tbgik0LLhLMyIT9UEg6YsPaXJr2Mly1x1RNc2oTRvLQpD/R5woU+4XiQhGtLMF1daJvOe6LshL5jQubIR7gIqDQ79nMT1v/WVA4b0mj0B0jossLACW36GSmOMryKt+oACdm2MBk44eMpf15Ysrd2z8POCRWGSpi+dH/60oWctutpfkbCdF2COMkuFMZLhAP96QmzCpfc/dp0htB6axOGi6K9jBblo/V7JWTlclbeslGy4eNNWyVc8fayZU/ztwn5UXhBm4TsWK6e3opfr3r/Q6uExn1pt4TsWu505Ge0/KWnCXmXyPN4/B08/J4JrdkpM+P/oE7PEtbmFPbZQ96pMi++VcI3fVn89C6tFa6PHmEjHtBa1Vu3/hMGxCu06Wlspk+4rh+oPE+jamhyx/p4/Sf0jfpSm+gTCr8vJVS2pRlxbm+AhHyvdgn1d7dQJj8Pq4mZhutAsxgdE3qaed2HP609EfXk19gT9/rqhLYndlyVjTBVrly3UJyd6bGxXvT1CdlHbKnMxTzKrs29Ny5j6LvN9Txtwp2c8Onakyph2e49Tfh4B3JHib+p85MRabysq/tSRibJ7jV8DHQIp/H7TTGNIa0fXorlyeqC0U2+hLkWJpSkWf33Yq9q4dGbF5tu+hnhYlRKvTrFyqq283603el1S1eCPdU3U/IasLzE7BWbxD9R0uqavFdZ+GR1rbWfu47fFhJqIaG+EAm1/oOEXb8v7Ziw8/el087fl754f95LNV7zG4SWhYfGkmlL7FP6AqEderEOW9f04+l8nulk/tW1k32SsiTGdTSbMki6FKaTFBvTD+CTvCeMxqYf+Z/zN//4bPy/A/IX7JVp3SgRvtICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Id+A1Swe1ZcugIKAAAAAElFTkSuQmCC' className='home-brand' alt="something" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
