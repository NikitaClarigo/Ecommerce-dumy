import React from 'react'

export default function Shirt() {
    return (
        <div className='container-fluid Shirt-section'>
            <p>Home / Men / <b>Shirts</b></p>
            <p><b>Casual shirts For Men</b> - 200 Items</p>
            <div className='row'>
                <div className='col-md-2 mt-4'>
                    <h6><b>FILTERS</b></h6>
                </div>
                <div className='col-md-10 mt-4'>
                    <form className='select'>
                        <label>Sort by : </label>
                        <select>
                            <option value="">Recommended</option>
                            <option value="">What's New</option>
                            <option value="">Popularity</option>
                            <option value="">Better Discount</option>
                            <option value="">Price : High to low</option>
                            <option value="">Price : Low to High</option>
                            <option value="">Customer Rating</option>
                        </select>
                    </form>
                </div>
                <div className='filter-section row'>
                    <div className='col-md-2 filter-left'>
                        <p><b>BRAND</b></p>
                        <form>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Allen Solly</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Roadster</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>HIGHLANDER</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Louis Philippe Sport</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Flying Machine</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>U.S. Polo Assn.</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Peter England Casuals</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Parx</label><br/>
                        </form>
                        <p><b>PRICE</b></p>
                        <form>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Rs. 314 to Rs. 648</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Rs. 648 to Rs. 1265</label><br/>
                            <input type="checkbox" />
                            <label className='checkbox-label'>Rs. 1265 to Rs. 1883</label><br/>
                        </form>
                    </div>
                    <div className='col-md-10 filter-right'>tgmb</div>
                </div>
            </div>
        </div>
    )
}
