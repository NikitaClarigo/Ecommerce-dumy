/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Wishlist.css';
import indian1 from '../../Assets/indian1.jpg';
import indian2 from '../../Assets/indian2.jpg';
import indian3 from '../../Assets/indian3.jpg';
import windian1 from '../../Assets/windian1.jpg';
import windian2 from '../../Assets/windian2.jpg';
import windian3 from '../../Assets/windian3.jpg';
import kcat1 from '../../Assets/kcat1.jpg';
import kcat2 from '../../Assets/kcat2.jpg';
import kcat3 from '../../Assets/kcat3.jpg';
import homecat1 from '../../Assets/homecat1.jpg';
import homecat2 from '../../Assets/homecat2.jpg';
import homecat3 from '../../Assets/homecat3.jpg';

export default function Wishlist() {
    return (
        <div className='wishlist-main'>
            <h5><b>My Wishlist</b> 23 items</h5>
            <div className='row'>
                <div className='col-md-3 wishlist-col'>
                    <img src={homecat1} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={indian1} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={windian1} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={kcat1} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={indian2} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={windian2} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={kcat2} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={homecat2} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={ homecat3} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={kcat3} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={windian3} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
                <div className='col-md-3 wishlist-col'>
                    <img src={indian3} className="wishlist-product" alt="something" />
                    <p>Skyblue Bed Line</p>
                    <h5 className='text-center'><b>Rs 1500</b> (50% off)</h5>
                    <hr />
                    <p className='move-to-bag-button'>Move to Bag</p>
                </div>
            </div>
        </div>
    )
}
