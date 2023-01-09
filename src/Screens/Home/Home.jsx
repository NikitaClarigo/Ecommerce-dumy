import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './home.css';
import Main from '../Main/Main';
import Men from '../Men/Men';
import Women from '../Women/Women';
import Kids from '../Kids/Kids';
import HomeandLiving from '../HomeandLiving/HomeandLiving';
import Beauty from '../Beauty/Beauty';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';


export default function Home() {



  return (
    <div>
        <div className="main-body">
          <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/' element={<Dashboard />} >
              <Route path='Dashboard' element={<Main />}/>
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
