import React from 'react';
import winter from '../../Assets/winter.png';
import winterbrandproduct1 from '../../Assets/winterbrandproduct1.png';
import winterbrandproduct2 from '../../Assets/winterbrandproduct2.png';
import winterbrandproduct3 from '../../Assets/winterbrandproduct3.png';
import winterbrandproduct4 from '../../Assets/winterbrandproduct4.png';
import kbrand12 from '../../Assets/winterbrand1.jpg';
import winterbrand2 from '../../Assets/winterbrand2.png';
import winterbrand3 from '../../Assets/winterbrand3.png';
import winterbrand4 from '../../Assets/winterbrand4.png';
import wintercat1 from '../../Assets/wintercat1.png';
import wintercat2 from '../../Assets/wintercat2.png';
import wintercat3 from '../../Assets/wintercat3.png';
import winter1 from '../../Assets/winter1.jpg';
import windian2 from '../../Assets/windian2.jpg';
import windian3 from '../../Assets/windian3.jpg';
import windian4 from '../../Assets/windian4.jpg';

export default function Winter() {
    return (
        <div>
            <img src={winter} className='banner' alt="something" />
            <div className='section'>
                <h2 className='inner-heading'>Biggest deal on top brands</h2>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={winterbrandproduct1} className="brand-product" alt="something" />
                        <img src={kbrand12} className="brand" alt="something"  width={"30%"} />
                        <h2 className='text-center'>30-60% Off</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src={winterbrandproduct2} className="brand-product" alt="something" />
                        <img src={winterbrand2} className="brand" alt="something" width={"30%"} />
                        <h2 className='text-center'>30-60% Off</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src={winterbrandproduct3} className="brand-product" alt="something" />
                        <img src={winterbrand3} className="brand" alt="something" width={"30%"} />
                        <h2 className='text-center'>30-60% Off</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src={winterbrandproduct4} className="brand-product" alt="something" />
                        <img src={winterbrand4} className="brand" alt="something" width={"30%"} />
                        <h2 className='text-center'>30-60% Off</h2>
                    </div>
                </div>
            </div>
            <div className='section'>
                <h2 className='inner-heading'>Categories to bag</h2>
                <div className='row category-area' style={{ padding: "0px", margin: "0px" }}>
                    <div className='col-md-4'>
                        <div class="single-category mb-30">
                            <div class="category-img">
                                <img src={wintercat1} alt="something" />
                                <div className="category-caption">
                                    <h2 className='text-center text-black'>Men's</h2>
                                    <span className="best"><a href="#">Best New Deals</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="single-category mb-30">
                            <div class="category-img">
                                <img src={wintercat2} alt="something" />
                                <div className="category-caption">
                                    <h2 className='text-center'>Women's</h2>
                                    <span className="best"><a href="#">Best New Deals</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="single-category mb-30">
                            <div class="category-img">
                                <img src={wintercat3} alt="something" />
                                <div className="category-caption">
                                    <h2 className='text-center'>Kid's</h2>
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
                        <img src={winter1} className="brand-product" alt="something" />
                        <h5 className='text-center'>Pullover</h5>
                    </div>
                    <div className='col-md-3'>
                        <img src={windian2} className="brand-product" alt="something" />
                        <h5 className='text-center'>Long Kurta</h5>
                    </div>
                    <div className='col-md-3'>
                        <img src={windian3} className="brand-product" alt="something" />
                        <h5 className='text-center'>Saree</h5>
                    </div>
                    <div className='col-md-3'>
                        <img src={windian4} className="brand-product" alt="something" />
                        <h5 className='text-center'>Partywear</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
