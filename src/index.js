import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
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
// import Header from './Components/Header/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
            <Route exact path='/' element={<Dashboard />} >
            <Route path='/Login' element={<Login />} />
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
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
