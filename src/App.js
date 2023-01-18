import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import './Screens/Home/home.css';
import Main from './Screens/Main/Main';
import Men from './Screens/Men/Men';
import Women from './Screens/Women/Women';
import Kids from './Screens/Kids/Kids';
import HomeandLiving from './Screens/HomeandLiving/HomeandLiving';
import Beauty from './Screens/Beauty/Beauty';
import Login from './Screens/Login/Login';
import Dashboard from './Screens/Dashboard/Dashboard';
import Wishlist from './Screens/Wishlist/Wishlist';
import Cart from './Screens/Cart/Cart';
import Checkoutmain from './Screens/Checkoutmain/Checkoutmain';
import CheckoutAddress from './Screens/Checkoutmain/CheckoutAddress';
import CheckoutAddress1 from './Screens/Checkoutmain/CheckoutAddress1';
import Productdetail from './Screens/Productdetail/Productdetail';


export default function App() {
  return (
    <div>
      {/* <Home /> */}
      <div className="main-body">
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Dashboard />} >
            <Route path='Dashboard' element={<Main />} />
            <Route path='Productdetail' element={<Productdetail />} />
            <Route path='Checkoutmain' element={<Checkoutmain />} />
            <Route path='CheckoutAddress' element={<CheckoutAddress />} />
            <Route path='CheckoutAddress1' element={<CheckoutAddress1 />} />
            <Route path='Men' element={<Men />} />
            <Route path='Women' element={<Women />} />
            <Route path='Kids' element={<Kids />} />
            <Route path='HomeandLiving' element={<HomeandLiving />} />
            <Route path='Beauty' element={<Beauty />} />
            <Route path='Wishlist' element={<Wishlist />} />
            <Route path='Cart' element={<Cart />} />
          </Route>
        </Routes>
        <Outlet />
      </div>

    </div>
  )
}
