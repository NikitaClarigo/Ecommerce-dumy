import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
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
// import Home from './Screens/Home/Home';

export default function App() {
  return (
    <div>
      <Router>
        {/* <Home /> */}
        <div className="main-body">
          <h1>ncxb xjbc xkjn</h1>
          <Routes>
            <Route path='/Login' element={<Login />} />
            <Route exact path='/' element={<Dashboard />} >
              <Route path='Dashboard' element={<Main />} />
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
      </Router>

    </div>
  )
}
